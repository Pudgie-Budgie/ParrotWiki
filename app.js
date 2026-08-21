// Parrot Database
const staticData = {
    // 1. 鹦鹉列表
    birds: [
    {
        name: "Budgerigar 'Budgie' (Parakeet)",
        scientific: "Melopsittacus undulatus",
        image: "./assets/budgies1.jpg?auto=format&fit=crop&w=600&q=80", 
        origin: "Australia",
        region: "Available Globally",
        price: "$20 - $50",
        lifespan: "5 - 10 (though some have reached 20+)", 
        intelligence: "Medium",
        talking: "Varies, requires training. Males are more talkative.",
        personality: "Playful, energetic, social",
        gender_id: "Cere color (Blue = Male, Brown/White = Female)",
        health: "Prone to tumors and fatty liver disease. Diet is key.",
        beginner_score: 5,
        beginner_text: "Perfect for beginners."
    },
    {
        name: "Cockatiel",
        scientific: "Nymphicus hollandicus",
        image: "./assets/cockatiel.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "Australia",
        region: "Available Globally",
        price: "$80 - $250",
        lifespan: "15 - 20+ years", 
        intelligence: "Medium",
        talking: "Low (Accomplished whistlers)",
        personality: "Gentle, affectionate, dusty",
        gender_id: "Visual (after molt) or DNA",
        health: "Night frights common. Produce significant feather dust, may not be suitable for people with asthma. Immune system not as strong as some other parrots.",
        beginner_score: 4,
        beginner_text: "Excellent first bird, but its immune system is not as strong as those of the budgerigar and lovebird."
    },
    {
        name: "Quaker Parrot (Monk Parakeet)",
        scientific: "Myiopsitta monachus",
        image: "./assets/monk_parakeet.jpg?auto=format&fit=crop&w=600&q=80", 
        origin: "South America",
        region: "Argentina, Brazil",
        price: "$300 - $600",
        lifespan: "20 - 30 years", 
        intelligence: "High",
        talking: "Very Good",
        personality: "Confident, territorial (cage aggression), funny",
        gender_id: "DNA Testing Required",
        health: "<strong>LEGAL WARNING:</strong> Illegal to own in some states (e.g., California, Georgia). ",
        beginner_score: 4,
        beginner_text: "Great bird, strong immune system, eat a lot. Check local laws first, considered an invasive species in some states such as California."
    },
    {
        name: "Green Cheek Conure",
        scientific: "Pyrrhura molinae",
        image: "./assets/greencheek.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "South America",
        region: "Bolivia, Brazil",
        price: "$300 - $600",
        lifespan: "15 - 25 years", 
        intelligence: "High",
        talking: "Low (Gravelly voice)",
        personality: "Clownish, cuddly, nippy",
        gender_id: "DNA Testing Required",
        health: "Requires plenty of chew toys.",
        beginner_score: 4,
        beginner_text: "Great for dedicated beginners."
    },
    {
        name: "Lovebird",
        scientific: "Agapornis",
        image: "./assets/lovebird2.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "Africa",
        region: "Available Globally",
        price: "$50 - $150",
        lifespan: "10 - 15 years",
        intelligence: "Medium",
        talking: "Low",
        personality: "Feisty, territorial, active",
        gender_id: "DNA Testing Required (mostly)",
        health: "Can be aggressive towards other birds.",
        beginner_score: 4,
        beginner_text: "Good size, but big attitude. Bites hard."
    },
	{
        name: "Sun Conure",
        scientific: "Aratinga solstitialis",
        image: "./assets/sun2.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "South America",
        region: "Brazil, Guyana",
        price: "$500 - $800",
        lifespan: "20 - 30 years", 
        intelligence: "High",
        talking: "Low",
        personality: "Loud, vibrant, playful",
        gender_id: "DNA Testing Required",
        health: "Extremely loud calls (not apartment friendly).",
        beginner_score: 3,
        beginner_text: "Easy to handle, but noise level is challenging."
    },
	{
        name: "Indian Ringneck",
        scientific: "Psittacula krameri",
        image: "./assets/rinkneck.jpg",
        origin: "Africa & India",
        price: "$400 - $800",
        lifespan: "25 - 30 years",
        intelligence: "High",
        talking: "Excellent (Very Clear)",
		personality: "",
		health: "<strong>The 'Bluffing' Phase:</strong> Adolescents often become aggressive/biting for a few months. Needs patience. High-pitched scream.",
		gender_id: "DNA Testing Required",
        beginner_score: 3,
        beginner_text: "Independent. Not a cuddler."
    },
    {
        name: "Amazon Parrot",
        scientific: "Amazona aestiva",
        image: "./assets/amazon.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "South America",
        region: "Bolivia, Brazil",
        price: "$1,000 - $2,500",
        lifespan: "40 - 70 years", 
        intelligence: "High",
        talking: "Excellent (Top-tier singers)",
        personality: "Boisterous, extroverted, hormonal swings",
        gender_id: "DNA Testing Required",
        health: "Prone to obesity and Vitamin A deficiency. Can be loud.",
        beginner_score: 2,
        beginner_text: "Challenging. Known for hormonal aggression."
    },
    {
        name: "Sulphur-crested Cockatoo",
        scientific: "Cacatua galerita",
        image: "./assets/cockatoo.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "Australia",
        region: "Australia, New Guinea",
        price: "$2,500 - $4,000+",
        lifespan: "40 - 80 years", 
        intelligence: "Very High",
        talking: "Medium (Loud mimics)",
        personality: "Velcro bird (cuddly), demanding, destructive",
        gender_id: "Eye color (Black=Male, Red/Brown=Female)",
        health: "<strong>Extremely Loud.</strong> Prone to feather plucking. Requires hours of attention daily.",
        beginner_score: 1,
        beginner_text: "Experts only. A lifelong commitment."
    },
    {
        name: "African Grey",
        scientific: "Psittacus erithacus",
        image: "./assets/grey.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "Central Africa",
        region: "Congo, Ivory Coast",
        price: "$1,000 - $4,000+",
        lifespan: "40 - 60 years", 
        intelligence: "Genius (Toddler level)",
        talking: "Excellent (Best mimic), considered to be #1 species of parrot in average talking ability",
        personality: "Neurotic, loyal to one person, sensitive",
        gender_id: "DNA Testing Required",
        health: "Calcium deficiency common. Prone to plucking.",
        beginner_score: 1,
        beginner_text: "Requires massive commitment."
    },
	{
        name: "Macaw",
        scientific: "Ara ararauna",

        image: "./assets/macaw.jpg?auto=format&fit=crop&w=600&q=80",
        origin: "South America",
        region: "Venezuela, Brazil, Bolivia",
        price: "$2,500 - $5,000+",
        lifespan: "50 - 80 years",
        intelligence: "Very High",
        talking: "Good (Loud)",
        personality: "Larger than life, destructive, loud, affectionate",
        gender_id: "DNA Testing Required",
        health: "Requires massive cage or aviary (alternate method: open raising without any form of container). Beak strength can snap welds. Prone to overgrown beaks.",
        beginner_score: 1,
        beginner_text: "Experts only. Beak size is dangerous for novices."
    }
    ],


// 2. 养护与疾病
	care: [
        {
            title: "🏠 The Perfect Cage Setup",
            category: "Equipment",
            
            // 1. 大图配置
            image: "./assets/bigCage.jpg", // 换成商品大图
            mainLink: "https://amzn.to/3LEPHlU", // 【关键】加上这个，大图就能点了
            
            content: "A big cage provides more space for your feathered friends to play and live.",
            
            // 2. 迷你列表配置
            products: [
                {
                    name: "Easy to clean cage",
                    image: "./assets/cleanCage.jpg",
                    link: "https://amzn.to/3YFTT7U"
                },
				{
                    name: "Coconut birdhouse",
                    image: "./assets/coconut.jpg",
                    link: "https://amzn.to/3YJFmrS"
                },
                {
                    name: "Rope Perch Toy",
                    image: "./assets/toy.jpg",
                    link: "https://amzn.to/4sJqM1f"
                },
				{
                    name: "Toy Pack",
                    image: "./assets/toypack.jpg",
                    link: "https://amzn.to/4qTbiWx"
                },
                // 可以多加几个，测试横向滚动
                {
                    name: "Parakeet Running Wheel (for small birds)",
                    image: "./assets/wheel.jpg",
                    link: "https://amzn.to/49BkEzm"
                }			
            ]
        },
        {
            title: "🚿 Bathing Basics",
            category: "Hygiene",
            image: "./assets/fountain.jpg", // 替换为小鸟洗澡图
			mainLink: "https://amzn.to/45JFWtq", // 【关键】加上这个，大图就能点了
            content: "Most parrots love water! It keeps feathers healthy and reduces dust.\n**Methods:** A shallow dish of water OR a gentle misting spray bottle.\n**Golden Rules:**\n1. Use **Lukewarm Water** only.\n2. **NO SOAP** or shampoo (it strips essential oils).\n3. Bathe in warm days (23C/73F or above) and better in the **morning** so they are dry before bedtime.\n4. Let the parrots decide whether to bathe. Do not force them. ",
            products: [
                {
                    name: "Hanging Bird Bath",
                    image: "./assets/bath.jpg",
                    link: "https://amzn.to/49FDs0b"
                }
            ]
        },
        {
	    title: "👍 Treats & Healthy Foods",
            category: "Treats & Nutrients",
            //image: "",
            content: "There are many things that parrots like to or should eat. A parrot, like a human, needs a wide array of different nutrients. **These are some good treats & healthy foods for parrots:**\n\n- **A variety of seeds:** Seeds provide the bird energy to fuel them during the day (seeds also serve well as treats).\n- **Fruits & Vegetables:** Parrots should eat a wide variety of fruits and vegetables (except avocado) to supplement their diet with vitamins, minerals, fiber, and antioxidants. They also make good treats.\n- **High-Quality Pellets:** A processed food designed to supply the foundational nutrients in a parrot's diet all in a single bite, making up 60-80 percent of a bird's ideal diet.\n- **Mineral Block:** Contains many essential minerals, such as calcium, zinc, iron, and iodine, all compressed into a single block.\n- **Nuts:** A healthy, high-energy treat (avoid peanuts), should not exceed 5-10 percent of the bird's diet.\n- **Millet:** A treat for smaller birds, such as budgies."
        },
        {

            title: "☠️ Dangerous & Toxic Foods",
            category: "Danger",
            //image: "",
            content: "Parrots have sensitive metabolisms. What is safe for humans can be deadly for birds. **Never feed the following:**\n\n- **Avocado:** Contains *persin*, which causes heart failure and sudden death.\n- **Chocolate/Caffeine:** Causes hyperactivity, seizures, and cardiac arrest.\n- **Onions/Garlic:** Destroy red blood cells, leading to anemia.\n- **Apple Seeds:** Contain traces of cyanide.\n- **Salt & Sugar:** Processed human foods damage their kidneys."
        },
        {
            title: "Scaly Face Mites (Knemidocoptes)", 
            category: "Health & Disease", 
            //image: "",
            content: "**Target:** Extremely common in Budgies (Parakeets) and Canaries.\n\n**The Condition:** Microscopic mites burrow into the beak, cere (nose), eyelids, and legs. This creates a crusty, white, honeycomb-like buildup. It looks like 'scale' growing on the face. If left untreated, it can deform the beak permanently.\n\n**Treatment:** Fortunately, this is highly curable. A vet will prescribe **Ivermectin** (a spot-on drop). \n\n**⚠️ Warning:** Do not use cheap 'mite sprays' from pet stores. They are often toxic and ineffective against burrowing mites."
        },
        {
            title: "Psittacosis (Parrot Fever)", 
            category: "Health & Disease", 
            //image: "",
            content: "**Scientific Name:** *Chlamydiosis*.\n\n**Why it's Critical:** This is a **Zoonotic** disease, meaning it can spread from birds to humans, causing pneumonia-like symptoms in owners.\n\n**Symptoms:** The bird may have 'fluffed up' feathers, lime-green watery droppings, eye discharge, and labored breathing. However, some birds are asymptomatic carriers.\n\n**Treatment:** Requires a 45-day course of antibiotics (Doxycycline). Strict quarantine is essential to protect your family and other pets."
        },
        {
            title: "PBFD (Beak & Feather Disease)", 
            category: "Health & Disease", 
            //image: "",
            content: "**The 'Bird AIDS':** PBFD is a viral disease (Circovirus) that attacks the immune system and the cells that produce feathers and beak.\n\n**Symptoms:**\n- Symmetric feather loss or abnormal, twisted feathers.\n- Shiny beak (loss of beak powder).\n- Beak lesions or rotting.\n\n**Prognosis:** It is highly contagious through feather dust. There is currently no cure. Infected birds need supportive care and must be kept away from all other birds for life."
        },
        {
            title: "Egg Binding (Dystocia)", 
            category: "Health & Disease", 
            //image: "",
            content: "**Emergency:** This happens when a female bird cannot pass an egg. It is life-threatening and can kill within hours.\n\n**Symptoms:** The bird sits at the bottom of the cage, panting, straining, or has a visibly swollen abdomen. One or both legs may be paralyzed due to the egg pressing on nerves.\n\n**Immediate Action:**\n1. Place the bird in a hospital cage (warm, humid environment, ~85°F).\n2. Give liquid Calcium (if available).\n3. **Rush to a vet immediately.** Surgery may be required."
        }
    ],

// 3. Merch Shop Data
    merch: [
        {
            title: "Life with a Bird (Comic)",
            type: "Comic",
            image: null,
            description: "Anyone who owns a parrot knows: you don't own the bird, the bird owns you. <br><i>(Placeholder for comic strip)</i>"
        },
        {
            title: "Budgie Tote Bag!",
            type: "Merch",
            image: null,
            description: "A perfect tote bag for daily usage, complete with the budgie spirit!"
        },
        {
            title: "Budgie Stickers!",
            type: "Merch",
            image: null,
            description: "Buy in 25-packs. Usage: You cut out a sticker and stick it on the standard way, then go over the budgie and the text with your hand to make sure it is extra sturdy, and slowly peel off the clear part of the sticker to leave just the design. <i>Note: Do not remove the clear layer if the sticker is used on something that can easily rip, and make sure to go over the border of the design carefully.</i>"
        },
        {
            title: "Parrot Stuffed Animals!",
            type: "Merch",
            image: null,
            description: "No matter your parrot preference, you can always have fun with one of our fuzzy companions. Multiple sizes and species are available for sale!"
        }
    ],


    // 4. 冷知识 
    facts: [
       
        { content: "Parrots are the only birds that can eat with their feet, holding food like a hand." },
        { content: "The Kakapo is the world's only flightless parrot, and it's also the heaviest!" },
        { content: "Some Macaws can live for over 80 years, outliving their owners." },
        { content: "Parrots have zygodactyl feet: two toes face forward and two face backward, giving them incredible grip strength." },
        { content: "A Hyacinth Macaw's beak is strong enough to crack a coconut wide open." },
        { content: "Parrots can see UV light, allowing them to distinguish gender in birds that look identical to humans." },
        { content: "Budgies can hear sequences of sounds ten times faster than humans can." },
        { content: "Most parrots taste with the roof of their mouths, not their tongues." },
        { content: "The Kea from New Zealand is the world's only alpine parrot and is known to be carnivorous (eating sheep fat!)." },
        { content: "Parrots do not have vocal cords. They use a syrinx (bifurcated trachea) to control airflow and mimic sounds." },
        { content: "Cockatoos use their crests like a mood ring: up for excitement/fear, flat for calm." },
        { content: "A parrot's beak grows continuously throughout its life, just like human fingernails, which is why they need to chew." },
        { content: "The Buff-faced Pygmy Parrot is the smallest in the world, standing only 3 inches tall—smaller than a finger!" },
        { content: "Parrots are one of the few animals that can move their upper beak independently from their skull." },
        { content: "Wild Amazon parrots have regional 'dialects'—flocks from different areas sound different from each other." },
        { content: "Studies suggest yawning is contagious among Parakeets, which may be a sign of primitive empathy." },
        { content: "Many parrot species are monogamous and will mate for life, often sharing parenting duties equally." },
        { content: "There are nearly 400 distinct species of parrots found in tropical and subtropical regions around the world." }
    ],
	
	// ... inside staticData ...
    
    // 5. 视频 (只需要 YouTube 的 ID，就是网址 v= 后面那串字符)
    videos: [
        {
            title: "Jealous Bird",
            desc: "No head scratches for other birds — only for me!",
            videoId: "uK3VE3Adhnk" 
        },
        {
            title: "Einstein the African Grey",
            desc: "Smartest most conversational parrot.",
            videoId: "ewptevBIqNk"
        },
		{
            title: "Cockatiel Demands Scritches",
            desc: "Cockatiel enjoys getting head scratches, always wants more.",
            videoId: "h2fboqLo_Dw"
        },
        {
            title: "Cockatiel Singing",
            desc: "Born with perfect pitches.",
            videoId: "fqohVXFwdGo"
        },
		{
            title: "Neo the Budgie",
            desc: "Neo the Budgie introduces himself.",
            videoId: "tf_W5hSL-hk"
        },
		{
            title: "Ranking the Best Parrot Singing Moments",
            desc: "A compilation of different parrots beatboxing, singing, and mimicking sounds.",
            videoId: "YqBPXLw4JSA"
        },
        {
            title: "America's Got Talent: Echo",
            desc: "A 15-year-old double yellow-headed Amazon parrot named Echo performs animal impressions and sings.",
            videoId: "lCYB4oGF53M"
        },
		{
            title: "Monk Parakeet Having Fun",
            desc: "Monk Parakeets have strong talking and playing abilities.",
            videoId: "WTXPfc0L0ko"
        },
		{
			title: "Disco the Budgie",
			desc: "With over 1,700 words, Disco the budgie rivaled Puck (also a budgie) - who holds the Guinness world record for the largest vocabulary of a bird (1,728 words) — but was uniquely creative in inventing his own phrases.",
			videoId: "jXc9ylCXqCw"
		}
    ]
};

// ==========================================
// RENDER LOGIC
// ==========================================

// Helper: 渲染星星
function getStars(score) {
    return '★'.repeat(score) + '☆'.repeat(5 - score);
}

// 1. Render Birds
function renderBirds(data) {
    const grid = document.getElementById('bird-grid');
    grid.innerHTML = '';
    data.forEach(bird => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${bird.image}" alt="${bird.name}" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <div>
                        <div class="bird-name">${bird.name}</div>
                        <div class="bird-scientific">${bird.scientific}</div>
                    </div>
                    <div class="price-tag">${bird.price}</div>
                </div>
                <div class="specs-grid">
                    <div class="spec-item"><strong>Origin</strong> ${bird.origin}</div>
                    <div class="spec-item"><strong>Lifespan</strong> ${bird.lifespan || 'Unknown'}</div>
                    <div class="spec-item"><strong>IQ</strong> ${bird.intelligence}</div>
                    <div class="spec-item"><strong>Talk</strong> ${bird.talking || 'Varies'}</div>
                </div>
                <div class="rating-box">
                    <strong>Beginner:</strong> <span style="color:#d35400">${getStars(bird.beginner_score)}</span>
                </div>
                <div class="notes" style="margin-top:10px">${bird.health}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderCare(data) {
    const genGrid = document.getElementById('care-grid-general');
    const healthGrid = document.getElementById('care-grid-health');
    
    genGrid.innerHTML = '';
    healthGrid.innerHTML = '';
    
    data.forEach(item => {
        const div = document.createElement('div');
        
        // 1. 样式判断
        let cardClass = 'care-card';
        const cat = (item.category || '').toLowerCase();
        const isHealth = cat.includes('health') || cat.includes('disease');
        if (isHealth || cat.includes('danger')) {
            cardClass += ' health'; 
        }

        // 2. 文本格式化
        let content = item.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
        content = content.replace(/\n/g, '<br>');

        // ===============================================
        // A. 左侧大图逻辑 (智能判断：没图就不显示)
        // ===============================================
        let imgContainerHTML = ''; // 默认为空

        // 【关键修改】只有当 item.image 有值的时候，才生成这一块
        if (item.image) {
            const imgTag = `<img src="${item.image}" alt="${item.title}" loading="lazy">`;
            
            if (item.mainLink) {
                imgContainerHTML = `
                    <a href="${item.mainLink}" target="_blank" class="care-card-img clickable">
                        ${imgTag}
                        <div class="shop-overlay">🛒 View on Amazon</div>
                    </a>
                `;
            } else {
                imgContainerHTML = `
                    <div class="care-card-img">
                        ${imgTag}
                    </div>
                `;
            }
        }

        // ===============================================
        // B. 底部迷你列表逻辑
        // ===============================================
        let productsHTML = '';
        if (item.products && item.products.length > 0) {
            let itemsHTML = item.products.map(prod => `
                <a href="${prod.link}" target="_blank" class="mini-product" title="${prod.name}">
                    <img src="${prod.image}" alt="${prod.name}" loading="lazy">
                    <div class="mini-overlay">${prod.name}</div>
                </a>
            `).join('');

            productsHTML = `
                <div class="product-section">
                    <div class="product-section-title">
                        🛒 Recommended Gear
                    </div>
                    <div class="product-list">
                        ${itemsHTML}
                    </div>
                </div>
            `;
        }

        div.className = cardClass;
        
        // 3. 组合 HTML
        // 如果 imgContainerHTML 是空的，右侧的 care-content 会自动填满整行 (Flexbox 特性)
        div.innerHTML = `
            ${imgContainerHTML}
            <div class="care-content">
                <h3>
                    ${item.title} 
                    <span class="care-category">${item.category}</span>
                </h3>
                <div class="care-text">${content}</div>
                ${productsHTML}
            </div>
        `;
        
        // 4. 分流
        if (isHealth) {
            healthGrid.appendChild(div);
        } else {
            genGrid.appendChild(div);
        }
    });
}
// 3. Render Merch
function renderMerch(data) {
    const grid = document.getElementById('merch-grid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card';
        const isComic = item.type === 'Comic' || (item.title && item.title.toLowerCase().includes('comic'));
        const actionButtonHTML = isComic ? '' : `
            <div style="margin-top: 15px;">
                <button class="merch-action-btn" data-title="${escapeHtml(item.title)}">🛒 Buy / View Details</button>
            </div>
        `;
        div.innerHTML = `
            ${item.image ? `<div class="card-img-wrapper"><img src="${item.image}" loading="lazy"></div>` : ''}
            <div class="card-content">
                <h3>${item.title}</h3>
                <div class="notes" style="margin-bottom:10px;">${item.type}</div>
                <div class="rich-text-content">${item.description}</div>
                ${actionButtonHTML}
            </div>
        `;
        grid.appendChild(div);
    });

    // Merch click handler with auth check
    const actionBtns = grid.querySelectorAll('.merch-action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentUser = getCurrentUser();
            const hostActive = isHostAuthenticated() && forumState.identity === 'host';
            if (!currentUser && !hostActive) {
                openAuthModal('signin');
                const err = document.getElementById('auth-error-msg');
                if (err) {
                    err.className = 'auth-error-alert';
                    err.textContent = '🔒 Please Sign In or Register to purchase merchandise!';
                    err.style.display = 'block';
                }
            } else {
                alert(`🛍️ Thank you for your interest in "${btn.getAttribute('data-title')}"! Merch purchasing will officially open soon.`);
            }
        });
    });
}

// 4. Render Facts
function renderFacts(data) {
    const grid = document.getElementById('facts-grid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'fact-card';
        div.innerHTML = `<p>${item.content}</p>`;
        grid.appendChild(div);
    });
}

// 5. Render Videos
function renderVideos(data) {
    const grid = document.getElementById('video-grid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'video-card';
        div.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${item.videoId}" 
                    title="${item.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        grid.appendChild(div);
    });
}

// ==========================================
// SUPABASE REALTIME CLOUD DATABASE SETUP
// ==========================================

const SUPABASE_URL = "https://nnosxtdwjcygkyzzrmag.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZilAYQB-RMD4DHyXTdbkFg_cd0xaHxw";

let supabaseClient = null;
try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
} catch (e) {
    console.warn("Supabase client init note:", e);
}

function initSupabaseRealtime() {
    if (!supabaseClient) return;
    try {
        supabaseClient
            .channel('public-forum-posts')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'forum_posts' }, () => {
                renderForum();
            })
            .subscribe();
    } catch (err) {
        console.error("Realtime sync subscription error:", err);
    }
}

// ==========================================
// USER AUTHENTICATION & PARROT ID SYSTEM
// ==========================================

// Complete Hard Reset: Clear extra posts down to Post #1
if (!localStorage.getItem('parrot_hard_reset_v6_done')) {
    localStorage.removeItem('parrot_forum_posts');
    localStorage.setItem('parrot_hard_reset_v6_done', 'true');
}

const PARROT_SPECIES = [
    'Budgie', 'Cockatiel', 'Conure', 'Macaw', 'Cockatoo',
    'Lovebird', 'Amazon', 'Lorikeet', 'Quaker', 'Caique',
    'Eclectus', 'Parakeet', 'Pionus', 'Kakariki', 'Senegal',
    'Rosella', 'Kakapo', 'Kea', 'Lory', 'Poicephalus'
];

function generateParrotId(chosenSpecies) {
    const users = getRegisteredUsers();
    const species = chosenSpecies || PARROT_SPECIES[Math.floor(Math.random() * PARROT_SPECIES.length)];
    let newId;
    let exists;
    do {
        const randomNum = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
        newId = `#${species}-${randomNum}`;
        exists = users.some(u => u.parrotId === newId);
    } while (exists);
    return newId;
}

function getRegisteredUsers() {
    const saved = localStorage.getItem('parrot_wiki_users');
    if (saved) {
        try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
}

function saveRegisteredUsers(users) {
    localStorage.setItem('parrot_wiki_users', JSON.stringify(users));
}

function getCurrentUser() {
    const saved = localStorage.getItem('parrot_wiki_current_user');
    if (saved) {
        try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return null;
}

function setCurrentUser(user) {
    if (user) {
        localStorage.setItem('parrot_wiki_current_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('parrot_wiki_current_user');
    }
}

// 58-character Master Host Passphrase SHA-256 Hash (Owner)
// Passphrase: FeatheredFriends2025!SuperSecretParrotMasterHostKey#9982
const HOST_PASSWORD_HASH = "7b8676fa1f18ffbbad4906c1fc33b6b18b460caf267aa4583d5be146ae6c4878";

// 53-character Admin Passphrase SHA-256 Hash (Admin)
// Passphrase: ParrotAdminSecurity2025!FeatheredGuardianPassKey#4418
const ADMIN_PASSWORD_HASH = "4238c3309c4e49353a17cb7268049e7b6c0b0bbab81ae357fc0ba8dc8b561002";

async function sha256Hex(text) {
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toLowerCase();
}

function isHostAuthenticated() {
    return localStorage.getItem('parrot_host_authenticated') === 'true';
}

function isAdminAuthenticated() {
    return localStorage.getItem('parrot_admin_authenticated') === 'true';
}

function getInitialForumIdentity() {
    const hostMode = localStorage.getItem('parrot_forum_host_mode');
    if (isHostAuthenticated()) {
        if (hostMode === 'host' || hostMode === 'true') return 'host';
        if (hostMode === 'admin') return 'admin';
        if (hostMode === 'user') return 'user';
        return 'host';
    }
    if (isAdminAuthenticated()) {
        if (hostMode === 'admin' || hostMode === 'true') return 'admin';
        return 'user';
    }
    return 'user';
}

const forumState = {
    mode: 'normal', // 'normal' | 'test'
    identity: getInitialForumIdentity()
};

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Kid-Friendly Profanity Filter (Ages 8-12)
function containsInappropriateContent(text) {
    if (!text) return false;

    let normalized = text.toLowerCase();
    normalized = normalized
        .replace(/@/g, 'a')
        .replace(/\$/g, 's')
        .replace(/0/g, 'o')
        .replace(/1/g, 'i')
        .replace(/!/g, 'i')
        .replace(/3/g, 'e')
        .replace(/5/g, 's')
        .replace(/7/g, 't')
        .replace(/\+/g, 't');

    const collapsed = normalized.replace(/([a-z])[\s\.\-_,]+(?=[a-z])/g, '$1');
    const squashed = collapsed.replace(/(.)\1{2,}/g, '$1$1');

    const badPatterns = [
        /\b(fuck|fucking|fucker|fucked|fucks|stfu|wtf)\b/i,
        /\b(shit|shits|shitty|bullshit|horseshit)\b/i,
        /\b(bitch|bitches|bitching|bitchy)\b/i,
        /\b(ass|asses|asshole|assholes|dumbass|jackass|badass)\b/i,
        /\b(bastard|bastards|cunt|cunts|twat|twats|wanker|prick)\b/i,
        /\b(dick|dicks|cock|cocks|cocksucker|pussy|pussies)\b/i,
        /\b(whore|whores|slut|sluts|douche|douchebag)\b/i,
        /\b(fag|faggot|faggots|nigger|niggers|nigga|niggas|retard|retarded)\b/i,
        /\b(porn|porno|pornography|hentai|nsfw|nude|nudes|naked)\b/i,
        /\b(sex|sexy|horny|orgasm|masturbat\w*|penis|vagina|dildo|boobs|tits|titties)\b/i,
        /\b(nazi|hitler|swastika)\b/i,
        /\b(kys|kill\s+yourself|suicide)\b/i,
        /\b(cocaine|heroin|methamphetamine)\b/i
    ];

    for (const pattern of badPatterns) {
        if (pattern.test(normalized) || pattern.test(collapsed) || pattern.test(squashed)) {
            return true;
        }
    }
    return false;
}

// Retrieve posts from Supabase with Local Fallback
async function getStoredPosts() {
    const welcomePost = {
        id: 1,
        author: "👑 Website Host",
        isHost: true,
        isAdmin: false,
        isTest: false,
        text: "Welcome to the Feathered Friends Forum! 🦜 Share your parrot stories, care tips, questions, or just say hello!",
        timestamp: "Community Host"
    };

    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('forum_posts')
                .select('*')
                .order('id', { ascending: true });

            if (!error && data && data.length > 0) {
                return data.map(p => {
                    let timeFormatted = p.created_at ? (new Date(p.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' · ' + new Date(p.created_at).toLocaleDateString([], { month: 'short', day: 'numeric' })) : "Community Host";
                    return {
                        id: p.id,
                        author: p.author,
                        isHost: !!p.is_host,
                        isAdmin: !!p.is_admin,
                        isTest: !!p.is_test,
                        text: p.text,
                        timestamp: timeFormatted
                    };
                });
            }
        } catch (e) {
            console.warn("Supabase fetch note, using local posts:", e);
        }
    }

    const saved = localStorage.getItem('parrot_forum_posts');
    let posts = [];

    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            posts = parsed.filter(p => !p.author || !p.author.includes("881877"));
        } catch (e) {
            console.error('Error parsing stored posts:', e);
        }
    }

    const hasWelcome = posts.some(p => p.text && p.text.includes("Welcome to the Feathered Friends Forum!"));
    if (!hasWelcome) {
        posts.unshift(welcomePost);
    }

    posts.forEach((p, idx) => {
        p.id = idx + 1;
    });

    localStorage.setItem('parrot_forum_posts', JSON.stringify(posts));
    return posts;
}

function savePosts(posts) {
    localStorage.setItem('parrot_forum_posts', JSON.stringify(posts));
}

// Render Staff (Host & Admin) Controls in Settings Menu
function renderHostControls() {
    const groupEl = document.getElementById('host-controls-group');
    if (!groupEl) return;

    const currentUser = getCurrentUser();
    const currentId = currentUser ? currentUser.parrotId : 'Guest';
    const isHost = isHostAuthenticated();
    const isAdmin = isAdminAuthenticated();

    if (isHost) {
        groupEl.innerHTML = `
            <label class="settings-label">Author Identity:</label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="user" ${forumState.identity === 'user' ? 'checked' : ''}>
                <span>👤 Member (<span class="mini-id">${currentId}</span>)</span>
            </label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="host" ${forumState.identity === 'host' ? 'checked' : ''}>
                <span>👑 Website Host (Owner)</span>
            </label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="admin" ${forumState.identity === 'admin' ? 'checked' : ''}>
                <span>🛡️ Forum Admin</span>
            </label>
            <div class="host-status-box" style="margin-top:6px;">
                <div class="host-status-title">👑 Verified Owner Device</div>
                <button id="staff-lock-action" class="host-lock-link">🔒 Lock / Log Out</button>
            </div>
        `;
    } else if (isAdmin) {
        groupEl.innerHTML = `
            <label class="settings-label">Author Identity:</label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="user" ${forumState.identity === 'user' ? 'checked' : ''}>
                <span>👤 Member (<span class="mini-id">${currentId}</span>)</span>
            </label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="admin" ${forumState.identity === 'admin' ? 'checked' : ''}>
                <span>🛡️ Forum Admin</span>
            </label>
            <div class="admin-status-box" style="margin-top:6px;">
                <div class="host-status-title" style="color:#0277bd;">🛡️ Verified Admin Device</div>
                <button id="staff-lock-action" class="host-lock-link">🔒 Lock / Log Out</button>
            </div>
        `;
    } else {
        groupEl.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:6px;">
                <button id="host-unlock-trigger" class="host-unlock-btn">
                    <span>👑</span> <span>Owner / Host Unlock</span>
                </button>
                <button id="admin-unlock-trigger" class="host-unlock-btn">
                    <span>🛡️</span> <span>Admin Unlock</span>
                </button>
            </div>
        `;
    }

    const identityRadios = groupEl.querySelectorAll('input[name="author-identity"]');
    identityRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            forumState.identity = e.target.value;
            localStorage.setItem('parrot_forum_host_mode', e.target.value);
            updateAuthUI();
            renderForum();
        });
    });

    const lockBtn = document.getElementById('staff-lock-action');
    if (lockBtn) {
        lockBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            localStorage.removeItem('parrot_host_authenticated');
            localStorage.removeItem('parrot_admin_authenticated');
            localStorage.removeItem('parrot_forum_host_mode');
            forumState.identity = 'user';
            updateAuthUI();
            renderForum();
        });
    }

    const hostTrigger = document.getElementById('host-unlock-trigger');
    if (hostTrigger) {
        hostTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            openStaffModal('host');
        });
    }

    const adminTrigger = document.getElementById('admin-unlock-trigger');
    if (adminTrigger) {
        adminTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            openStaffModal('admin');
        });
    }
}

// Staff (Owner & Admin) Modal Handlers
let currentStaffModalTab = 'host'; // 'host' | 'admin'

function openStaffModal(tab = 'host') {
    const modal = document.getElementById('staff-auth-modal');
    const input = document.getElementById('staff-pass-input');
    const errorEl = document.getElementById('staff-auth-error');
    if (!modal) return;

    if (errorEl) errorEl.style.display = 'none';
    if (input) input.value = '';

    setStaffModalTab(tab);
    modal.style.display = 'flex';
    if (input) input.focus();
}

function closeStaffModal() {
    const modal = document.getElementById('staff-auth-modal');
    if (modal) modal.style.display = 'none';
}

function setStaffModalTab(tab) {
    currentStaffModalTab = tab;
    const tabHost = document.getElementById('tab-staff-host');
    const tabAdmin = document.getElementById('tab-staff-admin');
    const descEl = document.getElementById('staff-modal-desc');
    const titleEl = document.getElementById('staff-modal-title');
    const submitBtn = document.getElementById('staff-login-btn');
    const errorEl = document.getElementById('staff-auth-error');

    if (errorEl) errorEl.style.display = 'none';

    if (tab === 'host') {
        if (tabHost) tabHost.classList.add('active');
        if (tabAdmin) tabAdmin.classList.remove('active');
        if (titleEl) titleEl.textContent = '👑 Owner / Host Unlock';
        if (descEl) descEl.textContent = 'Enter the master passphrase to unlock verified Owner / Host posting privileges on this device.';
        if (submitBtn) submitBtn.textContent = 'Unlock Owner';
    } else {
        if (tabHost) tabHost.classList.remove('active');
        if (tabAdmin) tabAdmin.classList.add('active');
        if (titleEl) titleEl.textContent = '🛡️ Forum Admin Unlock';
        if (descEl) descEl.textContent = 'Enter the admin passphrase to unlock verified Admin moderator privileges on this device.';
        if (submitBtn) submitBtn.textContent = 'Unlock Admin';
    }
}

async function verifyAndUnlockStaff() {
    const input = document.getElementById('staff-pass-input');
    const errorEl = document.getElementById('staff-auth-error');
    if (!input) return;

    const val = input.value.trim();
    if (!val) {
        if (errorEl) {
            errorEl.textContent = '❗ Please enter the passphrase.';
            errorEl.style.display = 'block';
        }
        return;
    }

    const hashed = await sha256Hex(val);

    if (currentStaffModalTab === 'host') {
        if (hashed === HOST_PASSWORD_HASH) {
            localStorage.setItem('parrot_host_authenticated', 'true');
            localStorage.setItem('parrot_forum_host_mode', 'host');
            forumState.identity = 'host';
            closeStaffModal();
            updateAuthUI();
            renderForum();
        } else {
            if (errorEl) {
                errorEl.textContent = '❗ Incorrect Owner passphrase. Access denied.';
                errorEl.style.display = 'block';
            }
        }
    } else {
        if (hashed === ADMIN_PASSWORD_HASH) {
            localStorage.setItem('parrot_admin_authenticated', 'true');
            localStorage.setItem('parrot_forum_host_mode', 'admin');
            forumState.identity = 'admin';
            closeStaffModal();
            updateAuthUI();
            renderForum();
        } else {
            if (errorEl) {
                errorEl.textContent = '❗ Incorrect Admin passphrase. Access denied.';
                errorEl.style.display = 'block';
            }
        }
    }
}

// ==========================================
// USER AUTH MODAL & FLOW
// ==========================================

let currentAuthTab = 'signin'; // 'signin' | 'register'

function openAuthModal(tab = 'signin') {
    const modal = document.getElementById('auth-modal');
    const emailInput = document.getElementById('auth-email-input');
    const passInput = document.getElementById('auth-password-input');
    const errorEl = document.getElementById('auth-error-msg');
    const successEl = document.getElementById('auth-success-msg');

    if (!modal) return;

    if (errorEl) errorEl.style.display = 'none';
    if (successEl) successEl.style.display = 'none';
    if (passInput) passInput.value = '';

    setAuthTab(tab);
    modal.style.display = 'flex';
    if (emailInput) emailInput.focus();
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'none';
}

function setAuthTab(tab) {
    currentAuthTab = tab;
    const tabSignIn = document.getElementById('tab-auth-signin');
    const tabRegister = document.getElementById('tab-auth-register');
    const submitBtn = document.getElementById('auth-submit-btn');
    const speciesGroup = document.getElementById('auth-species-group');
    const humanVerifyGroup = document.getElementById('auth-human-verify-group');
    const humanCheckbox = document.getElementById('auth-human-checkbox');
    const errorEl = document.getElementById('auth-error-msg');
    const successEl = document.getElementById('auth-success-msg');

    if (errorEl) errorEl.style.display = 'none';
    if (successEl) successEl.style.display = 'none';
    if (humanCheckbox) humanCheckbox.checked = false;

    if (tab === 'signin') {
        if (tabSignIn) tabSignIn.classList.add('active');
        if (tabRegister) tabRegister.classList.remove('active');
        if (submitBtn) submitBtn.textContent = 'Sign In';
        if (speciesGroup) speciesGroup.style.display = 'none';
        if (humanVerifyGroup) humanVerifyGroup.style.display = 'none';
    } else {
        if (tabSignIn) tabSignIn.classList.remove('active');
        if (tabRegister) tabRegister.classList.add('active');
        if (submitBtn) submitBtn.textContent = 'Register Account';
        if (speciesGroup) speciesGroup.style.display = 'block';
        if (humanVerifyGroup) humanVerifyGroup.style.display = 'flex';
    }
}

function showAuthError(message, isUnavailable = false) {
    const errorEl = document.getElementById('auth-error-msg');
    const successEl = document.getElementById('auth-success-msg');
    if (successEl) successEl.style.display = 'none';
    if (!errorEl) return;
    errorEl.className = isUnavailable ? 'auth-error-alert unavailable' : 'auth-error-alert';
    errorEl.textContent = message;
    errorEl.style.display = 'block';
}

function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem('parrot_host_authenticated');
    localStorage.removeItem('parrot_admin_authenticated');
    localStorage.removeItem('parrot_forum_host_mode');
    forumState.identity = 'user';
    updateAuthUI();
    renderForum();
}

async function handleAuthSubmit() {
    const emailInput = document.getElementById('auth-email-input');
    const passInput = document.getElementById('auth-password-input');

    if (!emailInput || !passInput) return;

    const email = emailInput.value.trim();
    const password = passInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAuthError('❗ Please enter a valid email address.');
        return;
    }

    if (!password || password.length < 4) {
        showAuthError('❗ Password must be at least 4 characters long.');
        return;
    }

    const passHash = await sha256Hex(password);

    if (currentAuthTab === 'register') {
        // 1. Check Human Verification Checkbox
        const humanCheckbox = document.getElementById('auth-human-checkbox');
        if (!humanCheckbox || !humanCheckbox.checked) {
            showAuthError('❗ Please check the "I am a human bird lover" box to continue.');
            return;
        }

        // 2. Check for profanity in password
        if (containsInappropriateContent(password)) {
            showAuthError('❗ PASSWORD NOT ALLOWED! ❗');
            return;
        }

        const speciesSelect = document.getElementById('auth-species-select');
        const chosenSpecies = speciesSelect ? speciesSelect.value : 'Budgie';

        // 2. Try Supabase Cloud Registration
        if (supabaseClient) {
            try {
                // Check if email already exists
                const { data: existingEmail } = await supabaseClient
                    .from('user_accounts')
                    .select('email')
                    .eq('email', email)
                    .maybeSingle();

                if (existingEmail) {
                    showAuthError('❗ An account with this email already exists. Please Sign In.');
                    return;
                }

                // Check if password hash already taken
                const { data: existingPass } = await supabaseClient
                    .from('user_accounts')
                    .select('password_hash')
                    .eq('password_hash', passHash)
                    .maybeSingle();

                if (existingPass) {
                    showAuthError('❗ PASSWORD UNAVAILABLE! ❗', true);
                    return;
                }

                // Generate collision-free ID with cloud check
                let newParrotId;
                let idTaken = true;
                do {
                    const randomNum = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
                    newParrotId = `#${chosenSpecies}-${randomNum}`;
                    const { data: idCheck } = await supabaseClient
                        .from('user_accounts')
                        .select('parrot_id')
                        .eq('parrot_id', newParrotId)
                        .maybeSingle();
                    idTaken = !!idCheck;
                } while (idTaken);

                // Insert into Supabase
                const { data: inserted, error: insertError } = await supabaseClient
                    .from('user_accounts')
                    .insert([{
                        email: email,
                        password_hash: passHash,
                        parrot_id: newParrotId
                    }])
                    .select()
                    .single();

                if (!insertError && inserted) {
                    const userObj = { email: inserted.email, parrotId: inserted.parrot_id };
                    setCurrentUser(userObj);
                    closeAuthModal();
                    updateAuthUI();
                    await renderForum();
                    alert(`🎉 Welcome! You have successfully registered with ID: ${newParrotId}`);
                    return;
                }
            } catch (err) {
                console.warn("Supabase auth note, using local fallback:", err);
            }
        }

        // Local Storage Fallback
        const users = getRegisteredUsers();
        if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
            showAuthError('❗ An account with this email already exists. Please Sign In.');
            return;
        }
        if (users.some(u => u.passwordHash === passHash)) {
            showAuthError('❗ PASSWORD UNAVAILABLE! ❗', true);
            return;
        }

        const newParrotId = generateParrotId(chosenSpecies);
        const newUser = {
            email: email,
            passwordHash: passHash,
            parrotId: newParrotId,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        saveRegisteredUsers(users);
        setCurrentUser(newUser);

        closeAuthModal();
        updateAuthUI();
        await renderForum();
        alert(`🎉 Welcome! You have successfully registered with ID: ${newParrotId}`);
    } else {
        // Sign In Flow (Cloud & Local)
        if (supabaseClient) {
            try {
                const { data: userRecord } = await supabaseClient
                    .from('user_accounts')
                    .select('*')
                    .eq('email', email)
                    .eq('password_hash', passHash)
                    .maybeSingle();

                if (userRecord) {
                    const userObj = { email: userRecord.email, parrotId: userRecord.parrot_id };
                    setCurrentUser(userObj);
                    closeAuthModal();
                    updateAuthUI();
                    await renderForum();
                    return;
                } else {
                    showAuthError('❗ Invalid email or password. Please check your credentials.');
                    return;
                }
            } catch (err) {
                console.warn("Supabase signin note, using local fallback:", err);
            }
        }

        const users = getRegisteredUsers();
        const matchedUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === passHash);
        if (matchedUser) {
            setCurrentUser(matchedUser);
            closeAuthModal();
            updateAuthUI();
            await renderForum();
        } else {
            showAuthError('❗ Invalid email or password. Please check your credentials.');
        }
    }
}

// Update Access Gating & Corner Auth Widgets (Top-Left of Merch & Forum)
function updateAuthUI() {
    const merchAuthCorner = document.getElementById('merch-auth-corner');
    const forumAuthCorner = document.getElementById('forum-auth-corner');
    const currentUser = getCurrentUser();
    const isHost = isHostAuthenticated();
    const isAdmin = isAdminAuthenticated();

    const renderCornerHTML = () => {
        if (isHost && forumState.identity === 'host') {
            return `
                <div class="auth-user-pill">
                    <span>👑</span>
                    <span class="parrot-tag">Website Host</span>
                    <button class="auth-logout-btn btn-logout-action">Log Out</button>
                </div>
            `;
        } else if ((isHost || isAdmin) && forumState.identity === 'admin') {
            return `
                <div class="auth-user-pill admin-pill">
                    <span>🛡️</span>
                    <span class="parrot-tag">Forum Admin</span>
                    <button class="auth-logout-btn btn-logout-action">Log Out</button>
                </div>
            `;
        } else if (currentUser) {
            return `
                <div class="auth-user-pill">
                    <span>🦜</span>
                    <span class="parrot-tag">${currentUser.parrotId}</span>
                    <button class="auth-logout-btn btn-logout-action">Log Out</button>
                </div>
            `;
        } else {
            return `
                <button class="auth-corner-btn btn-auth-trigger">🔒 Sign In / Register</button>
            `;
        }
    };

    const cornerHTML = renderCornerHTML();
    if (merchAuthCorner) merchAuthCorner.innerHTML = cornerHTML;
    if (forumAuthCorner) forumAuthCorner.innerHTML = cornerHTML;

    // Attach listeners to all corner buttons across tabs
    document.querySelectorAll('.btn-auth-trigger').forEach(btn => {
        btn.addEventListener('click', () => openAuthModal('signin'));
    });
    document.querySelectorAll('.btn-logout-action').forEach(btn => {
        btn.addEventListener('click', handleLogout);
    });

    const guestBanner = document.getElementById('forum-guest-banner');
    const inputBox = document.getElementById('forum-input-box');

    const canPost = isHost || isAdmin || currentUser !== null;

    if (guestBanner && inputBox) {
        if (canPost) {
            guestBanner.style.display = 'none';
            inputBox.style.display = 'block';
        } else {
            guestBanner.style.display = 'flex';
            inputBox.style.display = 'none';
        }
    }

    const merchGuestAlert = document.getElementById('merch-guest-alert');
    if (merchGuestAlert) {
        merchGuestAlert.style.display = canPost ? 'none' : 'flex';
    }

    renderHostControls();
}

// ==========================================
// FORUM ANTI-SPAM & MODERATION RULES
// ==========================================

const POST_COOLDOWN_SECONDS = 10;

function validateForumPost(rawText, isStaff) {
    const trimmed = rawText.trim();

    // 1. Check for empty post
    if (trimmed.length === 0) {
        return { type: 'empty', message: '❗This message is empty. ❗' };
    }

    // 2. Kid-Friendly Profanity / Inappropriate Content Check
    if (containsInappropriateContent(rawText)) {
        return { type: 'profanity', message: '❗This message has inappropriate or profane content. ❗' };
    }

    // Staff (Host & Admin) are exempt from rate-limiting and formatting limits
    if (isStaff) return null;

    // 3. Post Cooldown Rate Limit (10 seconds)
    const now = Date.now();
    const lastTime = parseInt(sessionStorage.getItem('parrot_last_post_time') || '0', 10);
    const timePassed = Math.floor((now - lastTime) / 1000);
    if (timePassed < POST_COOLDOWN_SECONDS) {
        const waitSeconds = POST_COOLDOWN_SECONDS - timePassed;
        return {
            type: 'cooldown',
            message: `⏳ Please wait ${waitSeconds} second${waitSeconds > 1 ? 's' : ''} before squawking again! 🦜`
        };
    }

    // 4. Duplicate Message Blocker
    const lastText = sessionStorage.getItem('parrot_last_post_text') || '';
    if (lastText && lastText.toLowerCase() === trimmed.toLowerCase()) {
        return {
            type: 'spam',
            message: '❗ You just posted that exact message! Please share something new.'
        };
    }

    // 5. No more than 5 of the same character in a row (6+ is blocked)
    if (/(.)\1{5,}/iu.test(rawText)) {
        return {
            type: 'spam',
            message: '❗ Please avoid typing more than 5 of the same character in a row.'
        };
    }

    // 6. All Caps is Forbidden
    const lettersOnly = rawText.replace(/[^a-zA-Z]/g, '');
    if (lettersOnly.length >= 4 && lettersOnly === lettersOnly.toUpperCase()) {
        return {
            type: 'spam',
            message: "❗ Please don't shout in ALL CAPS! 🦜"
        };
    }

    // 7. Block URLs & External Links
    const urlPattern = /(https?:\/\/|www\.|\.com\b|\.net\b|\.org\b|\.io\b|\.xyz\b|\.co\b|\.gg\b|\.edu\b|discord\.gg|bit\.ly|t\.me)/i;
    if (urlPattern.test(rawText)) {
        return {
            type: 'spam',
            message: '❗ Posting external web links or URLs is not allowed on this forum.'
        };
    }

    return null;
}

// Staff Delete Forum Post Confirmation Modal Flow
let pendingPostToDelete = null; // { id, author, text }

function openDeleteModal(postId, postAuthor, postText) {
    pendingPostToDelete = { id: postId, author: postAuthor, text: postText };
    const modal = document.getElementById('delete-confirm-modal');
    const previewEl = document.getElementById('delete-post-preview');
    const authorEl = document.getElementById('delete-author-display');
    if (!modal) return;

    if (previewEl) {
        previewEl.textContent = `“${postText || ''}”`;
    }
    if (authorEl) {
        authorEl.textContent = `👤 Author: ${postAuthor || 'Unknown'}`;
    }
    modal.style.display = 'flex';
}

function closeDeleteModal() {
    pendingPostToDelete = null;
    const modal = document.getElementById('delete-confirm-modal');
    if (modal) modal.style.display = 'none';
}

// 1. Delete Only This Post
async function deleteSinglePost() {
    if (!pendingPostToDelete || !pendingPostToDelete.id) return;
    const postId = parseInt(pendingPostToDelete.id, 10);
    closeDeleteModal();

    let deleteError = null;
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient
                .from('forum_posts')
                .delete()
                .eq('id', postId);
            if (error) {
                console.error("Supabase delete error:", error);
                deleteError = error;
            }
        } catch (e) {
            console.error("Supabase delete error:", e);
            deleteError = e;
        }
    }

    // Also remove from local storage cache
    const saved = localStorage.getItem('parrot_forum_posts');
    if (saved) {
        try {
            let parsed = JSON.parse(saved);
            parsed = parsed.filter(p => parseInt(p.id, 10) !== postId);
            savePosts(parsed);
        } catch (e) {}
    }

    await renderForum();

    if (deleteError) {
        alert("⚠️ Cloud Delete Notice:\nYour cloud database blocked the delete because of database security rules.\n\nPlease run this 1 SQL line in your Supabase SQL Editor:\n\nCREATE POLICY \"Allow public delete posts\" ON forum_posts FOR DELETE USING (true);");
    }
}

// 2. Delete ALL Posts From This User
async function deleteAllPostsFromUser() {
    if (!pendingPostToDelete || !pendingPostToDelete.author) return;
    const author = pendingPostToDelete.author;

    // Safety guard: Cannot bulk delete official Website Host welcome messages
    if (author === '👑 Website Host') {
        alert('❗ You cannot bulk delete official Website Host messages.');
        return;
    }

    if (!confirm(`💥 ARE YOU SURE?\n\nThis will permanently delete ALL messages posted by "${author}" across the entire forum!`)) {
        return;
    }

    closeDeleteModal();

    let deleteError = null;
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient
                .from('forum_posts')
                .delete()
                .eq('author', author)
                .neq('id', 1); // Never delete post #1
            if (error) {
                console.error("Supabase bulk delete error:", error);
                deleteError = error;
            }
        } catch (e) {
            console.error("Supabase bulk delete error:", e);
            deleteError = e;
        }
    }

    // Also remove from local storage cache
    const saved = localStorage.getItem('parrot_forum_posts');
    if (saved) {
        try {
            let parsed = JSON.parse(saved);
            parsed = parsed.filter(p => parseInt(p.id, 10) === 1 || p.author !== author);
            savePosts(parsed);
        } catch (e) {}
    }

    await renderForum();

    if (deleteError) {
        alert("⚠️ Cloud Delete Notice:\nYour cloud database blocked the delete because of database security rules.\n\nPlease run this 1 SQL line in your Supabase SQL Editor:\n\nCREATE POLICY \"Allow public delete posts\" ON forum_posts FOR DELETE USING (true);");
    }
}

// Render Forum Feed
async function renderForum() {
    const postsContainer = document.getElementById('forum-posts-container');
    if (!postsContainer) return;

    const posts = await getStoredPosts();
    postsContainer.innerHTML = '';

    const isStaff = isHostAuthenticated() || isAdminAuthenticated();

    if (posts.length === 0) {
        postsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #777; background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow);">
                <div style="font-size: 2.2rem; margin-bottom: 8px;">🦜💬</div>
                <h3 style="color: var(--primary); margin-bottom: 6px;">No posts yet!</h3>
                <p style="font-size: 0.95rem;">Be the first bird lover to post a message above.</p>
            </div>
        `;
        return;
    }

    // Render in reverse chronological order: newest post on top, post #1 at the bottom
    [...posts].reverse().forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'forum-post-card';
        
        let authorHTML = `<span class="post-author-tag">${escapeHtml(post.author)}</span>`;
        if (post.isHost) {
            authorHTML = `<span class="post-author-tag host-badge">👑 Website Host</span>`;
        } else if (post.isAdmin) {
            authorHTML = `<span class="post-author-tag admin-badge">🛡️ Forum Admin</span>`;
        }

        const testTagHTML = post.isTest
            ? `<span class="post-test-tag">🧪 Test Message</span>`
            : '';

        // Default Welcome post (#1) is completely protected from deletion
        const isWelcomePost = (post.id === 1) || (post.isHost && post.text && post.text.includes("Welcome to the Feathered Friends Forum!"));
        const deleteBtnHTML = (isStaff && !isWelcomePost) ? `
            <button class="post-delete-btn" data-post-id="${post.id}" data-post-author="${escapeHtml(post.author)}" data-post-text="${escapeHtml(post.text)}" title="Delete options for Staff">🗑️ Delete</button>
        ` : '';

        postCard.innerHTML = `
            <div class="forum-post-header">
                <div class="forum-post-meta-left">
                    <span class="post-number-tag">#${post.id}</span>
                    ${authorHTML}
                    ${testTagHTML}
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="post-time-tag">${escapeHtml(post.timestamp)}</span>
                    ${deleteBtnHTML}
                </div>
            </div>
            <div class="forum-post-body">${escapeHtml(post.text)}</div>
        `;
        postsContainer.appendChild(postCard);
    });

    // Attach delete listeners
    postsContainer.querySelectorAll('.post-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-post-id');
            const author = btn.getAttribute('data-post-author');
            const text = btn.getAttribute('data-post-text');
            if (id) openDeleteModal(id, author, text);
        });
    });
}

function showForumError(type, message) {
    const errorEl = document.getElementById('forum-error-msg');
    if (!errorEl) return;
    errorEl.className = `forum-error-message ${type}-error`;
    errorEl.textContent = message;
    errorEl.style.display = 'block';
}

function clearForumError() {
    const errorEl = document.getElementById('forum-error-msg');
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
    }
}

async function submitForumPost() {
    const currentUser = getCurrentUser();
    const isHostActive = (forumState.identity === 'host' && isHostAuthenticated());
    const isAdminActive = (forumState.identity === 'admin' && (isHostAuthenticated() || isAdminAuthenticated()));
    const isStaff = isHostActive || isAdminActive;

    if (!currentUser && !isStaff) {
        openAuthModal('signin');
        return;
    }

    const inputEl = document.getElementById('forum-input');
    if (!inputEl) return;

    const rawText = inputEl.value;
    const trimmed = rawText.trim();

    // Validate anti-spam & safety rules
    const validationError = validateForumPost(rawText, isStaff);
    if (validationError) {
        showForumError(validationError.type, validationError.message);
        return;
    }

    // Clear any active error
    clearForumError();

    const isTest = forumState.mode === 'test';
    let authorHandle = currentUser ? currentUser.parrotId : 'Guest';
    if (isHostActive) authorHandle = '👑 Website Host';
    if (isAdminActive) authorHandle = '🛡️ Forum Admin';

    // Record rate-limiting tracker for non-staff
    if (!isStaff) {
        sessionStorage.setItem('parrot_last_post_time', Date.now().toString());
        sessionStorage.setItem('parrot_last_post_text', trimmed);
    }

    // Try Supabase insert
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient
                .from('forum_posts')
                .insert([{
                    author: authorHandle,
                    text: trimmed,
                    is_host: isHostActive,
                    is_admin: isAdminActive,
                    is_test: isTest
                }]);

            if (!error) {
                inputEl.value = '';
                await renderForum();
                return;
            }
        } catch (err) {
            console.warn("Supabase post error, using local fallback:", err);
        }
    }

    // Local Storage Fallback
    const posts = await getStoredPosts();
    const nextId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const now = new Date();
    const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' · ' + now.toLocaleDateString([], { month: 'short', day: 'numeric' });

    const newPost = {
        id: nextId,
        author: authorHandle,
        isHost: isHostActive,
        isAdmin: isAdminActive,
        isTest: isTest,
        text: trimmed,
        timestamp: timeFormatted
    };

    posts.push(newPost);
    savePosts(posts);

    inputEl.value = '';
    await renderForum();
}

function updateForumInputMode() {
    const inputEl = document.getElementById('forum-input');
    const submitBtn = document.getElementById('forum-submit-btn');
    if (!inputEl || !submitBtn) return;

    if (forumState.mode === 'test') {
        inputEl.placeholder = "🧪 [Test Mode] Type a test message here...";
        inputEl.classList.add('test-mode');
        submitBtn.textContent = "Post Test";
    } else {
        inputEl.placeholder = "Write something here...";
        inputEl.classList.remove('test-mode');
        submitBtn.textContent = "New Post";
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderBirds(staticData.birds);
    renderCare(staticData.care);
    renderMerch(staticData.merch);
    renderFacts(staticData.facts);
    renderVideos(staticData.videos); 
    renderForum();
    updateAuthUI();
    initSupabaseRealtime();

    // Forum post listeners
    const submitBtn = document.getElementById('forum-submit-btn');
    const inputEl = document.getElementById('forum-input');

    if (submitBtn) {
        submitBtn.addEventListener('click', submitForumPost);
    }
    if (inputEl) {
        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitForumPost();
            }
        });
        inputEl.addEventListener('input', () => {
            clearForumError();
        });
    }

    // Guest Auth Triggers
    const forumGuestAuthBtn = document.getElementById('forum-guest-auth-btn');
    if (forumGuestAuthBtn) {
        forumGuestAuthBtn.addEventListener('click', () => openAuthModal('signin'));
    }

    const merchSignInBtn = document.getElementById('merch-sign-in-btn');
    if (merchSignInBtn) {
        merchSignInBtn.addEventListener('click', () => openAuthModal('signin'));
    }

    // User Auth Modal Listeners
    const authCloseBtn = document.getElementById('auth-modal-close-btn');
    const authCancelBtn = document.getElementById('auth-cancel-btn');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const tabSignIn = document.getElementById('tab-auth-signin');
    const tabRegister = document.getElementById('tab-auth-register');
    const authModal = document.getElementById('auth-modal');
    const authForm = document.getElementById('auth-form');

    if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);
    if (authCancelBtn) authCancelBtn.addEventListener('click', closeAuthModal);
    if (authSubmitBtn) authSubmitBtn.addEventListener('click', handleAuthSubmit);
    if (tabSignIn) tabSignIn.addEventListener('click', () => setAuthTab('signin'));
    if (tabRegister) tabRegister.addEventListener('click', () => setAuthTab('register'));
    if (authForm) {
        authForm.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAuthSubmit();
            }
        });
    }
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) closeAuthModal();
        });
    }

    // Forum settings menu listeners
    const settingsToggle = document.getElementById('forum-settings-toggle');
    const settingsMenu = document.getElementById('forum-settings-menu');

    if (settingsToggle && settingsMenu) {
        settingsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = settingsMenu.style.display === 'block';
            settingsMenu.style.display = isOpen ? 'none' : 'block';
        });

        document.addEventListener('click', (e) => {
            if (!settingsMenu.contains(e.target) && e.target !== settingsToggle) {
                settingsMenu.style.display = 'none';
            }
        });
    }

    // Mode Radio Listeners (Post Something vs Test Message)
    const postTypeRadios = document.querySelectorAll('input[name="post-type"]');
    postTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            forumState.mode = e.target.value;
            updateForumInputMode();
        });
    });

    // Staff (Host & Admin) Modal Listeners
    const staffModalCloseBtn = document.getElementById('staff-modal-close-btn');
    const staffCancelBtn = document.getElementById('staff-cancel-btn');
    const staffLoginBtn = document.getElementById('staff-login-btn');
    const tabStaffHost = document.getElementById('tab-staff-host');
    const tabStaffAdmin = document.getElementById('tab-staff-admin');
    const staffPassInput = document.getElementById('staff-pass-input');
    const staffModal = document.getElementById('staff-auth-modal');

    if (staffModalCloseBtn) staffModalCloseBtn.addEventListener('click', closeStaffModal);
    if (staffCancelBtn) staffCancelBtn.addEventListener('click', closeStaffModal);
    if (staffLoginBtn) staffLoginBtn.addEventListener('click', verifyAndUnlockStaff);
    if (tabStaffHost) tabStaffHost.addEventListener('click', () => setStaffModalTab('host'));
    if (tabStaffAdmin) tabStaffAdmin.addEventListener('click', () => setStaffModalTab('admin'));
    if (staffPassInput) {
        staffPassInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                verifyAndUnlockStaff();
            }
        });
    }
    if (staffModal) {
        staffModal.addEventListener('click', (e) => {
            if (e.target === staffModal) closeStaffModal();
        });
    }

    // Delete Moderation Modal Listeners
    const deleteModalCloseBtn = document.getElementById('delete-modal-close-btn');
    const deleteCancelBtn = document.getElementById('delete-cancel-btn');
    const deleteSingleBtn = document.getElementById('delete-single-btn');
    const deleteAllUserBtn = document.getElementById('delete-all-user-btn');
    const deleteModal = document.getElementById('delete-confirm-modal');

    if (deleteModalCloseBtn) deleteModalCloseBtn.addEventListener('click', closeDeleteModal);
    if (deleteCancelBtn) deleteCancelBtn.addEventListener('click', closeDeleteModal);
    if (deleteSingleBtn) deleteSingleBtn.addEventListener('click', deleteSinglePost);
    if (deleteAllUserBtn) deleteAllUserBtn.addEventListener('click', deleteAllPostsFromUser);
    if (deleteModal) {
        deleteModal.addEventListener('click', (e) => {
            if (e.target === deleteModal) closeDeleteModal();
        });
    }

    updateForumInputMode();
});

// Tab Switching
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabLinks.forEach(btn => btn.classList.remove('active'));
        link.classList.add('active');
        
        tabContents.forEach(content => content.classList.remove('active'));
        const targetTab = document.getElementById(link.getAttribute('data-tab'));
        if (targetTab) {
            targetTab.classList.add('active');
        }
    });
});

// Bird Filters
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
            renderBirds(staticData.birds);
        } else if (filter === 'beginner') {
            renderBirds(staticData.birds.filter(b => b.beginner_score >= 4));
        } else if (filter === 'talker') {
            renderBirds(staticData.birds.filter(b => (b.talking || '').includes('Good') || (b.talking || '').includes('Excellent')));
        }
    });
});