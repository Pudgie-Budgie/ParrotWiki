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
        div.innerHTML = `
            ${item.image ? `<div class="card-img-wrapper"><img src="${item.image}" loading="lazy"></div>` : ''}
            <div class="card-content">
                <h3>${item.title}</h3>
                <div class="notes" style="margin-bottom:10px;">${item.type}</div>
                <div class="rich-text-content">${item.description}</div>
                <div style="margin-top: 15px;">
                    <button class="merch-action-btn" data-title="${escapeHtml(item.title)}">🛒 Buy / View Details</button>
                </div>
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
// USER AUTHENTICATION & PARROT ID SYSTEM
// ==========================================

// Complete Hard Reset: Log out host, wipe all account creation history, and reset to clean Guest state
if (!localStorage.getItem('parrot_hard_reset_v4_done')) {
    localStorage.removeItem('parrot_host_authenticated');
    localStorage.removeItem('parrot_forum_host_mode');
    localStorage.removeItem('parrot_forum_user_id');
    localStorage.removeItem('parrot_wiki_users');
    localStorage.removeItem('parrot_wiki_current_user');
    localStorage.removeItem('parrot_forum_posts');
    localStorage.setItem('parrot_hard_reset_v4_done', 'true');
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

// 58-character Master Host Passphrase SHA-256 Hash
// Passphrase: FeatheredFriends2025!SuperSecretParrotMasterHostKey#9982
const HOST_PASSWORD_HASH = "7b8676fa1f18ffbbad4906c1fc33b6b18b460caf267aa4583d5be146ae6c4878";

async function sha256Hex(text) {
    const msgBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toLowerCase();
}

function isHostAuthenticated() {
    return localStorage.getItem('parrot_host_authenticated') === 'true';
}

const forumState = {
    mode: 'normal', // 'normal' | 'test'
    identity: (isHostAuthenticated() && localStorage.getItem('parrot_forum_host_mode') === 'true') ? 'host' : 'user'
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

// Retrieve posts from localStorage, ensure Welcome Host post is present
function getStoredPosts() {
    const welcomePost = {
        id: 1,
        author: "👑 Website Host",
        isHost: true,
        isTest: false,
        text: "Welcome to the Feathered Friends Forum! 🦜 Share your parrot stories, care tips, questions, or just say hello!",
        timestamp: "Community Host"
    };

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

// Render Host Controls in Settings Menu
function renderHostControls() {
    const groupEl = document.getElementById('host-controls-group');
    if (!groupEl) return;

    const currentUser = getCurrentUser();
    const currentId = currentUser ? currentUser.parrotId : 'Guest';
    const authenticated = isHostAuthenticated();

    if (authenticated) {
        groupEl.innerHTML = `
            <label class="settings-label">Author Identity:</label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="user" ${forumState.identity === 'user' ? 'checked' : ''}>
                <span>👤 Member (<span class="mini-id">${currentId}</span>)</span>
            </label>
            <label class="settings-option">
                <input type="radio" name="author-identity" value="host" ${forumState.identity === 'host' ? 'checked' : ''}>
                <span>👑 Website Host</span>
            </label>
            <div class="host-status-box" style="margin-top:6px;">
                <div class="host-status-title">👑 Verified Host Device</div>
                <button id="host-lock-action" class="host-lock-link">🔒 Lock / Log Out Host</button>
            </div>
        `;

        const identityRadios = groupEl.querySelectorAll('input[name="author-identity"]');
        identityRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                forumState.identity = e.target.value;
                localStorage.setItem('parrot_forum_host_mode', e.target.value === 'host');
                updateAuthUI();
                renderForum();
            });
        });

        const lockBtn = document.getElementById('host-lock-action');
        if (lockBtn) {
            lockBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                localStorage.removeItem('parrot_host_authenticated');
                localStorage.setItem('parrot_forum_host_mode', 'false');
                forumState.identity = 'user';
                updateAuthUI();
                renderForum();
            });
        }
    } else {
        groupEl.innerHTML = `
            <button id="host-unlock-trigger" class="host-unlock-btn">
                <span>🔒</span> <span>Host Unlock</span>
            </button>
        `;

        const unlockTrigger = document.getElementById('host-unlock-trigger');
        if (unlockTrigger) {
            unlockTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                openHostModal();
            });
        }
    }
}

// Master Host Modal Handlers
function openHostModal() {
    const modal = document.getElementById('host-auth-modal');
    const input = document.getElementById('host-pass-input');
    const errorEl = document.getElementById('host-auth-error');
    if (!modal) return;

    if (errorEl) errorEl.style.display = 'none';
    if (input) input.value = '';
    modal.style.display = 'flex';
    if (input) input.focus();
}

function closeHostModal() {
    const modal = document.getElementById('host-auth-modal');
    if (modal) modal.style.display = 'none';
}

async function verifyAndUnlockHost() {
    const input = document.getElementById('host-pass-input');
    const errorEl = document.getElementById('host-auth-error');
    if (!input) return;

    const val = input.value.trim();
    if (!val) {
        if (errorEl) {
            errorEl.textContent = '❗ Please enter the master passphrase.';
            errorEl.style.display = 'block';
        }
        return;
    }

    const hashed = await sha256Hex(val);
    if (hashed === HOST_PASSWORD_HASH) {
        localStorage.setItem('parrot_host_authenticated', 'true');
        localStorage.setItem('parrot_forum_host_mode', 'true');
        forumState.identity = 'host';
        closeHostModal();
        updateAuthUI();
        renderForum();
    } else {
        if (errorEl) {
            errorEl.textContent = '❗ Incorrect passphrase. Access denied.';
            errorEl.style.display = 'block';
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
    const errorEl = document.getElementById('auth-error-msg');
    const successEl = document.getElementById('auth-success-msg');

    if (errorEl) errorEl.style.display = 'none';
    if (successEl) successEl.style.display = 'none';

    if (tab === 'signin') {
        if (tabSignIn) tabSignIn.classList.add('active');
        if (tabRegister) tabRegister.classList.remove('active');
        if (submitBtn) submitBtn.textContent = 'Sign In';
        if (speciesGroup) speciesGroup.style.display = 'none';
    } else {
        if (tabSignIn) tabSignIn.classList.remove('active');
        if (tabRegister) tabRegister.classList.add('active');
        if (submitBtn) submitBtn.textContent = 'Register Account';
        if (speciesGroup) speciesGroup.style.display = 'block';
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
    localStorage.setItem('parrot_forum_host_mode', 'false');
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

    const users = getRegisteredUsers();
    const passHash = await sha256Hex(password);

    if (currentAuthTab === 'register') {
        // 1. Check if email is already registered
        const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
        if (emailExists) {
            showAuthError('❗ An account with this email already exists. Please Sign In.');
            return;
        }

        // 2. Check for profanity in password
        if (containsInappropriateContent(password)) {
            showAuthError('❗ PASSWORD NOT ALLOWED! ❗');
            return;
        }

        // 3. Check if password is unavailable / taken by another user
        const passwordTaken = users.some(u => u.passwordHash === passHash);
        if (passwordTaken) {
            showAuthError('❗ PASSWORD UNAVAILABLE! ❗', true);
            return;
        }

        // 4. Create new registered user with chosen parrot species
        const speciesSelect = document.getElementById('auth-species-select');
        const chosenSpecies = speciesSelect ? speciesSelect.value : 'Budgie';
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
        renderForum();
        alert(`🎉 Welcome! You have successfully registered with ID: ${newParrotId}`);
    } else {
        // Sign In Flow
        const matchedUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === passHash);
        if (matchedUser) {
            setCurrentUser(matchedUser);
            closeAuthModal();
            updateAuthUI();
            renderForum();
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
    const hostActive = isHostAuthenticated() && forumState.identity === 'host';

    const renderCornerHTML = () => {
        if (hostActive) {
            return `
                <div class="auth-user-pill">
                    <span>👑</span>
                    <span class="parrot-tag">Website Host</span>
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

    const canPost = hostActive || currentUser !== null;

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

// Render Forum Feed
function renderForum() {
    const postsContainer = document.getElementById('forum-posts-container');
    if (!postsContainer) return;

    const posts = getStoredPosts();
    postsContainer.innerHTML = '';

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
        
        const authorHTML = post.isHost
            ? `<span class="post-author-tag host-badge">👑 Website Host</span>`
            : `<span class="post-author-tag">${escapeHtml(post.author)}</span>`;

        const testTagHTML = post.isTest
            ? `<span class="post-test-tag">🧪 Test Message</span>`
            : '';

        postCard.innerHTML = `
            <div class="forum-post-header">
                <div class="forum-post-meta-left">
                    <span class="post-number-tag">#${post.id}</span>
                    ${authorHTML}
                    ${testTagHTML}
                </div>
                <span class="post-time-tag">${escapeHtml(post.timestamp)}</span>
            </div>
            <div class="forum-post-body">${escapeHtml(post.text)}</div>
        `;
        postsContainer.appendChild(postCard);
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

function submitForumPost() {
    const currentUser = getCurrentUser();
    const isHost = (forumState.identity === 'host' && isHostAuthenticated());

    if (!currentUser && !isHost) {
        openAuthModal('signin');
        return;
    }

    const inputEl = document.getElementById('forum-input');
    if (!inputEl) return;

    const rawText = inputEl.value;
    const trimmed = rawText.trim();

    // 1. Check for empty post
    if (trimmed.length === 0) {
        showForumError('empty', '❗This message is empty. ❗');
        return;
    }

    // 2. Check for profanity / inappropriate content
    if (containsInappropriateContent(rawText)) {
        showForumError('profanity', '❗This message has inappropriate or profane content. ❗');
        return;
    }

    // 3. Clear any active error
    clearForumError();

    // 4. Create new post with ascending sequence number
    const posts = getStoredPosts();
    const nextId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const now = new Date();
    const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' · ' + now.toLocaleDateString([], { month: 'short', day: 'numeric' });

    const isTest = forumState.mode === 'test';
    const authorHandle = isHost ? '👑 Website Host' : currentUser.parrotId;

    const newPost = {
        id: nextId,
        author: authorHandle,
        isHost: isHost,
        isTest: isTest,
        text: trimmed,
        timestamp: timeFormatted
    };

    posts.push(newPost);
    savePosts(posts);

    inputEl.value = '';
    renderForum();
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

    // Host Modal Listeners
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const hostCancelBtn = document.getElementById('host-cancel-btn');
    const hostLoginBtn = document.getElementById('host-login-btn');
    const hostPassInput = document.getElementById('host-pass-input');
    const hostModal = document.getElementById('host-auth-modal');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeHostModal);
    if (hostCancelBtn) hostCancelBtn.addEventListener('click', closeHostModal);
    if (hostLoginBtn) hostLoginBtn.addEventListener('click', verifyAndUnlockHost);
    if (hostPassInput) {
        hostPassInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                verifyAndUnlockHost();
            }
        });
    }
    if (hostModal) {
        hostModal.addEventListener('click', (e) => {
            if (e.target === hostModal) closeHostModal();
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