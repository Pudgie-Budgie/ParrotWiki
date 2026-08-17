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

// 3. 文化与文学
    culture: [
        {
            title: "FORUM COMING SOON",
            type: "Forum Space",
            image: null,
            description: "We will soon have a forum and merch shop. Note: Merch is not open for sale yet."
        },
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
// 3. Render Culture
function renderCulture(data) {
    const grid = document.getElementById('culture-grid');
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
            </div>
        `;
        grid.appendChild(div);
    });
}

// 4. Render Facts
function renderFacts(data) {
    const grid = document.getElementById('facts-grid');
    grid.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'fact-card';
        div.innerHTML = `<p>${item.content}</p>`;
        grid.appendChild(div);
    });
}

// ==========================================
// EVENT LISTENERS
// ==========================================

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderBirds(staticData.birds);
    renderCare(staticData.care);
    renderCulture(staticData.culture);
    renderFacts(staticData.facts);
    // 新增这一行
    renderVideos(staticData.videos); 
});

// Tab Switching
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabLinks.forEach(btn => btn.classList.remove('active'));
        link.classList.add('active');
        
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(link.getAttribute('data-tab')).classList.add('active');
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

// 5. Render Videos
function renderVideos(data) {
    const grid = document.getElementById('video-grid');
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