-- ================================================================
-- FEATHERED FRIENDS WIKI: SERVER-SIDE SECURITY HARDENING SETUP
-- Run this script once in your Supabase Dashboard -> SQL Editor.
-- ================================================================

-- 1. Enable pgcrypto extension for cryptographic security
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. Create private staff secrets table (RLS enabled with ZERO public access)
CREATE TABLE IF NOT EXISTS public.staff_secrets (
    id SERIAL PRIMARY KEY,
    role TEXT UNIQUE NOT NULL,
    passphrase_hash TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.staff_secrets ENABLE ROW LEVEL SECURITY;
-- Do NOT add any public SELECT/INSERT/DELETE policies to staff_secrets!
-- This ensures no browser can ever query this table directly.

-- Insert the verified master SHA-256 hashes into the server database
INSERT INTO public.staff_secrets (role, passphrase_hash)
VALUES 
    ('host', '522df236b95f8199320b5213b422542041d417c0c84357f17c69d91a2369dead'),
    ('admin', 'd4dfd3b4af1bda0da411c5a71cd723a5f564c1de799485ae912746c0561c1380')
ON CONFLICT (role) DO UPDATE 
SET passphrase_hash = EXCLUDED.passphrase_hash, updated_at = now();

-- 3. Create server-side staff sessions table
CREATE TABLE IF NOT EXISTS public.staff_sessions (
    token TEXT PRIMARY KEY,
    role TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    expires_at TIMESTAMPTZ DEFAULT (now() + interval '7 days')
);

ALTER TABLE public.staff_sessions ENABLE ROW LEVEL SECURITY;
-- No public policies on staff_sessions. Only SECURITY DEFINER functions can access.

-- 4. Server-Side Staff Passphrase Verification Function (RPC)
CREATE OR REPLACE FUNCTION public.verify_staff_passphrase(p_passphrase TEXT, p_role TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_input_hash TEXT;
    v_role_match TEXT;
    v_new_token TEXT;
BEGIN
    -- Compute SHA-256 hash inside PostgreSQL
    v_input_hash := encode(digest(p_passphrase, 'sha256'), 'hex');

    -- Check against private server secrets
    SELECT role INTO v_role_match
    FROM public.staff_secrets
    WHERE role = p_role AND passphrase_hash = v_input_hash;

    IF v_role_match IS NOT NULL THEN
        -- Generate secure random session token
        v_new_token := 'stf_' || encode(gen_random_bytes(32), 'hex');
        
        -- Store session on the server
        INSERT INTO public.staff_sessions (token, role, expires_at)
        VALUES (v_new_token, v_role_match, now() + interval '7 days');

        RETURN jsonb_build_object(
            'success', true,
            'token', v_new_token,
            'role', v_role_match
        );
    ELSE
        RETURN jsonb_build_object(
            'success', false,
            'error', 'Access denied: invalid passphrase'
        );
    END IF;
END;
$$;

-- 5. Server-Side Secure Post Creation Function (Tamper-Proof Badges)
CREATE OR REPLACE FUNCTION public.secure_create_post(
    p_text TEXT,
    p_author TEXT,
    p_is_test BOOLEAN DEFAULT false,
    p_staff_token TEXT DEFAULT ''
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_staff_role TEXT := NULL;
    v_final_author TEXT;
    v_is_host BOOLEAN := false;
    v_is_admin BOOLEAN := false;
    v_new_row RECORD;
BEGIN
    -- Verify staff token if provided
    IF p_staff_token IS NOT NULL AND p_staff_token != '' THEN
        SELECT role INTO v_staff_role
        FROM public.staff_sessions
        WHERE token = p_staff_token AND expires_at > now();
    END IF;

    -- Assign badges ONLY if verified on the server
    IF v_staff_role = 'host' THEN
        v_is_host := true;
        v_is_admin := false;
        v_final_author := '👑 Website Host';
    ELSIF v_staff_role = 'admin' THEN
        v_is_host := false;
        v_is_admin := true;
        v_final_author := '🛡️ Forum Admin';
    ELSE
        -- Normal user: Cannot forge staff badges or host names
        v_is_host := false;
        v_is_admin := false;
        v_final_author := COALESCE(NULLIF(trim(p_author), ''), 'Guest');
        IF v_final_author IN ('👑 Website Host', '🛡️ Forum Admin') THEN
            v_final_author := 'Guest';
        END IF;
    END IF;

    -- Set local transaction flag to allow trigger verification
    PERFORM set_config('app.is_secure_call', 'true', true);

    INSERT INTO public.forum_posts (text, author, is_host, is_admin, is_test, created_at)
    VALUES (p_text, v_final_author, v_is_host, v_is_admin, COALESCE(p_is_test, false), now())
    RETURNING * INTO v_new_row;

    RETURN to_jsonb(v_new_row);
END;
$$;

-- 6. Server-Side Secure Delete Post Function
CREATE OR REPLACE FUNCTION public.secure_delete_post(
    p_post_id BIGINT,
    p_caller_author TEXT DEFAULT '',
    p_staff_token TEXT DEFAULT ''
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_staff_role TEXT := NULL;
    v_post_author TEXT;
BEGIN
    -- Rule 1: Permanent immunity for Post #1 (Welcome Post)
    IF p_post_id = 1 THEN
        RAISE EXCEPTION 'Permanent Welcome Post #1 cannot be deleted.';
    END IF;

    -- Verify staff session
    IF p_staff_token IS NOT NULL AND p_staff_token != '' THEN
        SELECT role INTO v_staff_role
        FROM public.staff_sessions
        WHERE token = p_staff_token AND expires_at > now();
    END IF;

    -- Staff can delete any post
    IF v_staff_role IN ('host', 'admin') THEN
        DELETE FROM public.forum_posts WHERE id = p_post_id AND id != 1;
        RETURN true;
    END IF;

    -- Non-staff: Can ONLY delete their own post
    SELECT author INTO v_post_author FROM public.forum_posts WHERE id = p_post_id;
    IF v_post_author IS NULL THEN
        RETURN false; -- Post doesn't exist
    END IF;

    IF p_caller_author IS NOT NULL AND p_caller_author != '' AND v_post_author = p_caller_author THEN
        DELETE FROM public.forum_posts WHERE id = p_post_id AND id != 1;
        RETURN true;
    ELSE
        RAISE EXCEPTION 'Permission denied: You can only delete your own posts.';
    END IF;
END;
$$;

-- 7. Server-Side Secure Bulk Delete Function
CREATE OR REPLACE FUNCTION public.secure_bulk_delete_posts(
    p_target_author TEXT,
    p_staff_token TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
    v_staff_role TEXT := NULL;
BEGIN
    -- Verify staff session
    IF p_staff_token IS NOT NULL AND p_staff_token != '' THEN
        SELECT role INTO v_staff_role
        FROM public.staff_sessions
        WHERE token = p_staff_token AND expires_at > now();
    END IF;

    IF v_staff_role NOT IN ('host', 'admin') THEN
        RAISE EXCEPTION 'Permission denied: Staff authorization required for bulk deletion.';
    END IF;

    IF p_target_author = '👑 Website Host' THEN
        RAISE EXCEPTION 'Official Website Host posts cannot be bulk-deleted.';
    END IF;

    DELETE FROM public.forum_posts 
    WHERE author = p_target_author AND id != 1;

    RETURN true;
END;
$$;

-- 8. Lockdown Table Permissions (Revoke Direct Public Deletes)
-- Drop any open delete policy that allowed arbitrary console deletes
DROP POLICY IF EXISTS "Allow public delete posts" ON public.forum_posts;
DROP POLICY IF EXISTS "Allow public delete" ON public.forum_posts;
DROP POLICY IF EXISTS "Enable delete for all users" ON public.forum_posts;

-- Revoke direct DELETE on forum_posts from public web users
REVOKE DELETE ON public.forum_posts FROM anon, authenticated;

-- Ensure SELECT and INSERT policies exist for forum_posts
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'forum_posts' AND policyname = 'Allow public select posts'
    ) THEN
        CREATE POLICY "Allow public select posts" ON public.forum_posts FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'forum_posts' AND policyname = 'Allow public insert posts'
    ) THEN
        CREATE POLICY "Allow public insert posts" ON public.forum_posts FOR INSERT WITH CHECK (true);
    END IF;
END $$;

-- 9. Trigger to prevent forging host/admin badges via direct REST API inserts
CREATE OR REPLACE FUNCTION public.trig_sanitize_forum_post()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    -- If an insert is attempted directly via the client REST API without secure_create_post,
    -- strip any forged badges or staff handles automatically.
    IF COALESCE(current_setting('app.is_secure_call', true), 'false') != 'true' THEN
        NEW.is_host := false;
        NEW.is_admin := false;
        IF NEW.author IN ('👑 Website Host', '🛡️ Forum Admin') THEN
            NEW.author := 'Guest';
        END IF;
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS tr_sanitize_forum_post ON public.forum_posts;
CREATE TRIGGER tr_sanitize_forum_post
BEFORE INSERT ON public.forum_posts
FOR EACH ROW
EXECUTE FUNCTION public.trig_sanitize_forum_post();
