
import type { Lesson } from '../../../types';

// --- CONTENT CREATION LESSONS ---
export const contentCreationLessons: Lesson[] = [
    {
        id: 'cc_biz_1', title: 'Know Your Business & Audience', duration: 10,
        content: [
            { type: 'paragraph', text: "Before making any poster or reel, you must be clear about three things: Who is the business? Who are the customers? What is the goal?" },
            { type: 'video', text: "cOHTSncXDic" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "How to describe a local business in one line | How to imagine a simple 'customer profile' | How to choose 1–2 clear goals for content" },
            { type: 'heading', text: "Try it now – Interactive Checklist" },
            { type: 'checklist', text: "What do they sell? | Who comes there most often? | What would this shop want more of? (visits / calls / orders)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write 3 short lines: Business description, Customer description, and Main Goal." }
        ],
        quiz: {
            id: 'q_cc_biz_1', question: "Which is the best content goal for a new mehendi artist?",
            options: [{ id: 'a', text: "Get 1,000 likes from random people" }, { id: 'b', text: "Get 10 booking enquiries for Diwali" }, { id: 'c', text: "Post 3 times a day" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_biz_2', title: 'Content Buckets & Pillars', duration: 15,
        content: [
            { type: 'paragraph', text: "Big brands and small businesses both use content pillars. Your content should rotate between 5 buckets: Education, Offer, Story, Trust, and Festival." },
            { type: 'video', text: "3f84PKzraLk" },
            { type: 'heading', text: "5 Content Buckets" },
            { type: 'list', text: "Education / Tips | Offer / Promotion | Story / Behind the Scenes | Trust / Testimonial | Festival / Culture" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Think of one Education idea | Think of one Offer idea | Think of one Trust idea" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a simple list: 'My 3 main pillars for this shop are...'" }
        ],
        quiz: {
            id: 'q_cc_biz_2', question: "Which of these is a 'Trust / Testimonial' post?",
            options: [{ id: 'a', text: "20% off only today!" }, { id: 'b', text: "Rashmi tai says: 'This tiffin tastes like home.'" }, { id: 'c', text: "How to store rotis." }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_biz_3', title: 'Hooks, Captions & CTAs', duration: 12,
        content: [
            { type: 'paragraph', text: "A good post has three parts: Hook (grabs attention), Body (info), and CTA (tells people what to do next)." },
            { type: 'video', text: "BKpJ24XerLE" },
            { type: 'heading', text: "Examples" },
            { type: 'list', text: "Hook: 'Tired of oily canteen food?' | CTA: 'Call now to book your slot.'" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Write 1 hook line in Marathi/Hinglish | Write 2 simple info lines | Write 1 CTA line" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Fill this template: [HOOK] + [Benefit line] + [CTA]." }
        ],
        quiz: {
            id: 'q_cc_biz_3', question: "Which is the strongest CTA for a festive offer?",
            options: [{ id: 'a', text: "Nice offer for you." }, { id: 'b', text: "Limited slots, call now to book." }, { id: 'c', text: "We are on Instagram." }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_biz_4', title: 'Weekly & Festival Calendar', duration: 15,
        content: [
            { type: 'paragraph', text: "Plan content in advance so you’re not stressed. Start tiny: 2–3 posts per week are enough. Add extra posts for festivals." },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "How to plan a weekly schedule | How to plug in pillars | Marking important festivals" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Decide posting days (e.g. Mon, Wed, Sat) | Assign a bucket to each day" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Draw a tiny table with Day, Bucket, and Idea for one week." }
        ],
        quiz: {
            id: 'q_cc_biz_4', question: "For a new small business, which plan is realistic?",
            options: [{ id: 'a', text: "3 quality posts per week" }, { id: 'b', text: "5–6 posts every day" }, { id: 'c', text: "1 post every 2 months" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_biz_5', title: 'Match Content to Channels', duration: 12,
        content: [
            { type: 'paragraph', text: "Don’t try to be everywhere. For local shops, focus on: Instagram (visuals), WhatsApp (direct connection), and Google Business Profile (search)." },
            { type: 'video', text: "9WVGLqiHVuk" },
            { type: 'heading', text: "Adapting Content" },
            { type: 'list', text: "Education tip → IG Reel | Offer → WhatsApp Status | Store Photo → GBP Update" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Take one idea | Write how you'll show it on Instagram | Write how you'll show it on WhatsApp" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a mapping: Idea -> IG Format -> WhatsApp Format -> GBP Format." }
        ],
        quiz: {
            id: 'q_cc_biz_5', question: "Which channel helps new people nearby find a shop?",
            options: [{ id: 'a', text: "WhatsApp private chat" }, { id: 'b', text: "Google Business Profile" }, { id: 'c', text: "SMS" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_biz_6', title: 'Repurposing Ideas', duration: 15,
        content: [
            { type: 'paragraph', text: "Good creators repurpose – they take one strong idea and express it in many formats instead of starting from zero every time." },
            { type: 'video', text: "UZ-4nLFJjVM" },
            { type: 'heading', text: "Example: 'Fresh Tiffin'" },
            { type: 'list', text: "Reel: Making roti | Canva: Menu card | Status: 'Order now' text | GBP: Photo of lunch box" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Choose 1 strong idea | Write how it becomes a Reel | Write how it becomes a Poster" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "List 3 'Big Ideas' for a shop that can be reused every week." }
        ],
        quiz: {
            id: 'q_cc_biz_6', question: "Repurposing content means:",
            options: [{ id: 'a', text: "Copy-pasting exact image everywhere" }, { id: 'b', text: "Turning one idea into different formats" }, { id: 'c', text: "Posting once a year" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_biz_7', title: 'Analytics & Safety', duration: 10,
        content: [
            { type: 'paragraph', text: "Watch your numbers to see what works. Also, protect yourself from online abuse. Your safety is more important than engagement." },
            { type: 'video', text: "HfCijj6Ddu8" },
            { type: 'heading', text: "What to check" },
            { type: 'list', text: "Views, Likes, Comments | Ask 'Why did this work?'" },
            { type: 'heading', text: "Safety Rules" },
            { type: 'list', text: "Delete/Block abusive comments | Never argue with trolls | Report serious threats" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write a simple weekly review template: Best post, Why it worked, What to avoid." }
        ],
        quiz: {
            id: 'q_cc_biz_7', question: "A comment is rude. What should you do?",
            options: [{ id: 'a', text: "Fight in comments" }, { id: 'b', text: "Ignore, delete, block" }, { id: 'c', text: "Do whatever they say" }],
            correctOptionId: 'b'
        }
    }
];

// --- CANVA LESSONS ---
export const canvaLessons: Lesson[] = [
    { 
        id: 'l0', title: 'Watch: How Canva Works', duration: 5, 
        content: [
            { type: 'paragraph', text: "Before we start designing, watch this short video to see what you can do with Canva on your phone." }, 
            { type: 'video', text: "yWJp7gQqCQ8?start=0000&end=2320"},
            { type: 'heading', text: "Key Takeaways" }, 
            { type: 'list', text: "Canva has thousands of free templates | You can change text and colors in seconds | It works perfectly on your phone" }
        ] 
    },
    { 
        id: 'l1', title: 'Welcome to Canva on Your Phone', duration: 10, 
        content: [
            { type: 'paragraph', text: "Design from your pocket. Today is your first tiny step to making posts for yourself or small businesses. You don't need a degree, just your phone." }, 
            { type: 'video', text: "yWJp7gQqCQ8?start=2321&end=4010"},
            { type: 'heading', text: "Today's Goal" },
            { type: 'list', text: "1. Open Canva and sign in. | 2. Pick the right size for a post. | 3. Type your first line of text." },
            { type: 'heading', text: "Do it with me" },
            { type: 'checklist', text: "Open the Canva app | Sign in or create a free account | Tap 'Create design' → 'Instagram Post' (Square) | Tap 'Text' → 'Add heading' | Type: '[Your Name] · Dreamer'" },
            { type: 'heading', text: "Mini Assignment: Your First Design" },
            { type: 'paragraph', text: "Create a simple post with your Name + One Word that describes you. Use any background color you love. Save it to your phone!" }
        ], 
        quiz: { 
            id: 'q_canva_1', question: "Canva is mainly for...", 
            options: [{ id: 'a', text: "Reading news" }, { id: 'b', text: "Making designs" }, { id: 'c', text: "Making phone calls" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l2', title: '3 Simple Rules of Beautiful Design', duration: 15, 
        content: [
            { type: 'paragraph', text: "No big theories. Just 3 secrets professionals use daily to make things look good." }, 
            { type: 'video', text: "yWJp7gQqCQ8?start=4015&end=4491"},
            { type: 'heading', text: "Rule 1: Contrast" },
            { type: 'paragraph', text: "Light text on dark background. Or dark text on light. Never 'light on light' or 'dark on dark'." },
            { type: 'heading', text: "Rule 2: Alignment" },
            { type: 'paragraph', text: "Line things up. Either Center everything OR Left Align everything. Don't mix them randomly." },
            { type: 'heading', text: "Rule 3: Breathing Space" },
            { type: 'paragraph', text: "Empty space is not 'wasted'. It makes your main message louder. Move things away from the edges." },
            { type: 'heading', text: "Clean This Design" },
            { type: 'checklist', text: "Fix colors for better contrast | Choose one alignment (center/left) | Move elements away from edges" },
            { type: 'heading', text: "Mini Assignment: One-Line Quote" },
            { type: 'paragraph', text: "Make 1 post with a short quote (e.g. 'Small steps. Big dreams.'). Apply the 3 rules: Strong contrast, neat alignment, and space." }
        ], 
        quiz: { 
            id: 'q_canva_2', question: "Which color combination has better contrast?", 
            options: [{ id: 'a', text: "Yellow text on White" }, { id: 'b', text: "White text on Dark Purple" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l3', title: 'Templates That Do the Hard Work', duration: 15, 
        content: [
            { type: 'paragraph', text: "Designers don't start from zero. You don't have to either. Templates save time and teach you good layouts." }, 
            { type: 'video', text: "yWJp7gQqCQ8?start=9534&end=10110"},
            { type: 'heading', text: "Step 1: Search" },
            { type: 'paragraph', text: "Open Canva. Tap 'Templates'. Search for 'sale', 'motivation', or 'small business'." },
            { type: 'heading', text: "Step 2: Make it Yours" },
            { type: 'checklist', text: "Change ALL text to your own words | Change at least one color | Replace the photo with yours or a free one" },
            { type: 'heading', text: "Mini Assignment: My First Template" },
            { type: 'paragraph', text: "Choose a template for a shop, a club, or a cause. Customize the text, color, and image so it looks unique." }
        ], 
        quiz: { 
            id: 'q_canva_3', question: "Using templates is cheating. True or False?", 
            options: [{ id: 'a', text: "True" }, { id: 'b', text: "False. They are a starting point." }, { id: 'c', text: "Only for experts" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l4', title: 'Magic Design: Layouts in Seconds', duration: 20, 
        content: [
            { type: 'paragraph', text: "Stuck on layout? Let AI suggest designs for you. You describe the idea, AI shows ready-made posts." }, 
            { type: 'video', text: "OoVA0nWcQAU"},
            { type: 'heading', text: "Try these prompts" },
            { type: 'list', text: "'Bakery sale this weekend' | 'Motivational quote for girls' | 'Free health camp invitation'" },
            { type: 'heading', text: "Generate & Customise" },
            { type: 'checklist', text: "Open Magic Design / AI Design | Choose Instagram Post | Paste your prompt | Pick a layout | Change brand name, colors, and fonts" },
            { type: 'heading', text: "Mini Assignment: AI Snack Post" },
            { type: 'paragraph', text: "Use AI to design a post for homemade snacks/food. Customise the text, color, and contact info." }
        ], 
        quiz: { 
            id: 'q_canva_4', question: "What is the best prompt for AI design?", 
            options: [{ id: 'a', text: "Make something" }, { id: 'b', text: "Instagram post for Diwali sweets sale, bright Indian colors." }, { id: 'c', text: "Any post" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l5', title: 'Magic Write: Captions & Hooks with AI', duration: 20, 
        content: [
            { type: 'paragraph', text: "Words feel hard? Let AI suggest, you polish. AI gives ideas, you edit the voice, you make the final call." }, 
            { type: 'video', text: "FtwSi7Fn3e4"},
            { type: 'heading', text: "3 Caption Styles" },
            { type: 'list', text: "1. Hook + Info + Action | 2. Problem + Promise | 3. Tiny Story" },
            { type: 'heading', text: "Draft and Edit" },
            { type: 'checklist', text: "Generate a caption with Magic Write | Replace hard words with simple ones | Add one local detail or emoji" },
            { type: 'heading', text: "Mini Assignment: Caption Clinic" },
            { type: 'paragraph', text: "Pick one of your designs. Create 2 AI captions. Edit them into 1 final caption that sounds like YOU." }
        ], 
        quiz: { 
            id: 'q_canva_5', question: "A great caption sounds like...", 
            options: [{ id: 'a', text: "A robot" }, { id: 'b', text: "A real person talking" }, { id: 'c', text: "A dictionary" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l6', title: 'AI Images & Photo Glow-Up', duration: 20, 
        content: [
            { type: 'paragraph', text: "No fancy camera needed. AI and simple edits are enough. You have two options: Clean a real photo OR Generate an AI illustration." }, 
            { type: 'video', text: "Rk_rkLQpDAc"},
            { type: 'heading', text: "Option 1: Clean a Real Photo" },
            { type: 'checklist', text: "Take photo of an item | Upload to Canva | Remove background (if possible) | Pick a simple background color" },
            { type: 'heading', text: "Option 2: AI Illustration" },
            { type: 'checklist', text: "Open AI Image tool | Paste a prompt (e.g. 'girl designing on phone') | Choose 'Flat' or 'Illustration' style | Insert into design" },
            { type: 'heading', text: "Mini Assignment: Before & After" },
            { type: 'paragraph', text: "Create a post with your item. Show the messy 'before' and the clean 'after' design." }
        ], 
        quiz: { 
            id: 'q_canva_6', question: "When should you prefer a real photo over AI?", 
            options: [{ id: 'a', text: "When selling a real product you made" }, { id: 'b', text: "Never" }, { id: 'c', text: "Always" }], 
            correctOptionId: 'a' 
        } 
    },
    { 
        id: 'l7', title: 'Your First AI-Powered Campaign Post', duration: 25, 
        content: [
            { type: 'paragraph', text: "Today we combine layout, image, and caption into one full post. Choose a topic: Small Business, School Club, or Social Cause." }, 
            { type: 'video', text: "6IrqN2diTmY"},
            { type: 'heading', text: "Design Steps" },
            { type: 'checklist', text: "Use Magic Design for layout | Add real or AI image | Apply contrast & alignment | Use Magic Write for caption | Add Date/Offer/Action" },
            { type: 'heading', text: "Mini Assignment: Campaign Post" },
            { type: 'paragraph', text: "Create one full post for your chosen topic. Make it good enough to share in a WhatsApp group." }
        ], 
        quiz: { 
            id: 'q_canva_7', question: "A campaign post must answer:", 
            options: [{ id: 'a', text: "What color is the sky?" }, { id: 'b', text: "What? When? How to respond?" }, { id: 'c', text: "Nothing" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l8', title: 'One Idea, Many Platforms', duration: 20, 
        content: [
            { type: 'paragraph', text: "Share everywhere smartly. One idea can be a Square Post (Feed) or a Tall Post (Story/Status)." }, 
            { type: 'heading', text: "Size Basics" },
            { type: 'paragraph', text: "Square = Feed post. Tall = Story/Status. Both can show the same idea." },
            { type: 'heading', text: "Turn Post into Story" },
            { type: 'checklist', text: "Copy your campaign post | Change to tall size | Enlarge main text | Remove extra small text | Add clear CTA (e.g., 'DM Us')" },
            { type: 'heading', text: "Mini Assignment: Remix Your Design" },
            { type: 'paragraph', text: "Create 2 versions of your campaign: 1 Feed Post + 1 Story/Status." }
        ], 
        quiz: { 
            id: 'q_canva_8', question: "For a vertical Story/Status, you should:", 
            options: [{ id: 'a', text: "Use tiny text" }, { id: 'b', text: "Have one big, clear message" }, { id: 'c', text: "Put no text at all" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l9', title: 'Mini Content Plan & Final Challenge', duration: 30, 
        content: [
            { type: 'paragraph', text: "You're ready to think like a social media manager. A designer plans a few connected posts that work together." }, 
            { type: 'heading', text: "The 3-Post Plan" },
            { type: 'list', text: "Post 1: Story / Motivation | Post 2: Product / Result | Post 3: Offer / Reminder" },
            { type: 'heading', text: "Creation Checklist" },
            { type: 'checklist', text: "Create Post 1 (Story) | Create Post 2 (Result) | Create Post 3 (Offer + Action) | Use Canva + at least 1 AI tool for each" },
            { type: 'heading', text: "Final Assignment: 3-Post Portfolio" },
            { type: 'paragraph', text: "Complete your 3 posts. Ensure they use the same colors/fonts. Submit them for your final badge!" }
        ], 
        quiz: { 
            id: 'q_canva_9', question: "Planning 3 connected posts is better than 1 random post.", 
            options: [{ id: 'a', text: "True" }, { id: 'b', text: "False" }, { id: 'c', text: "It doesn't matter" }], 
            correctOptionId: 'a' 
        } 
    }
];

// --- WHATSAPP BUSINESS LESSONS ---
export const whatsappLessons: Lesson[] = [
    {
        id: 'wa_l0', title: 'Watch: What is WhatsApp Business?', duration: 5,
        content: [
            { type: 'paragraph', text: "Learn how WhatsApp Business helps you manage orders and look professional." },
            { type: 'video', text: "ZBOtWyOuVgU" },
            { type: 'heading', text: "Key Takeaways" },
            { type: 'list', text: "Separate your business chats from personal ones | Automatically show your products | Reply to customers even when you sleep" }
        ]
    },
    {
        id: 'wa_l1', title: 'Setting Up the App', duration: 10,
        content: [
            { type: 'paragraph', text: "First, get the right app. It's different from normal WhatsApp." },
            { type: 'video', text: "2_Wp22JjCKU" },
            { type: 'heading', text: "Installation Steps" },
            { type: 'checklist', text: "Backup your chats in normal WhatsApp if using same number | Download 'WhatsApp Business' from Play Store | Register with your number" }
        ],
        quiz: {
            id: 'q_wa_1', question: "WhatsApp Business is...",
            options: [{ id: 'a', text: "A game" }, { id: 'b', text: "A professional tool for shops" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'wa_l2', title: 'Your Professional Profile', duration: 15,
        content: [
            { type: 'paragraph', text: "Your profile is your shop's digital signboard." },
            { type: 'video', text: "vqqOD4pFzGs" },
            { type: 'heading', text: "Profile Setup" },
            { type: 'checklist', text: "Add a clear logo or shop photo | Write a short description of what you sell | Add your exact address so people can find you" }
        ],
        quiz: {
            id: 'q_wa_2', question: "What is the best photo for your profile?",
            options: [{ id: 'a', text: "Your clear Logo or Shop Front" }, { id: 'b', text: "Selfie with friends" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'wa_l3', title: 'Setting Business Hours', duration: 10,
        content: [
            { type: 'paragraph', text: "Tell customers when you are open so they don't expect replies at 2 AM." },
            { type: 'video', text: "vqqOD4pFzGs" },
            { type: 'heading', text: "Set Timings" },
            { type: 'checklist', text: "Go to Business Tools > Business Profile | Tap 'Schedule' | Select 'Open for selected hours' | Set your shop timings" }
        ],
        quiz: {
            id: 'q_wa_3', question: "Why set business hours?",
            options: [{ id: 'a', text: "To manage customer expectations" }, { id: 'b', text: "To stop using WhatsApp" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'wa_l4', title: 'Your First Catalog Item', duration: 20,
        content: [
            { type: 'paragraph', text: "The Catalog is your digital menu. No need to send 50 photos to every customer." },
            { type: 'video', text: "vqqOD4pFzGs" },
            { type: 'heading', text: "Add Products" },
            { type: 'checklist', text: "Go to Business Tools > Catalog | Tap 'Add new item' | Upload 1-3 good photos | Add Name, Price, and Description" }
        ],
        quiz: {
            id: 'q_wa_4', question: "Where do customers see your products?",
            options: [{ id: 'a', text: "Only in your Status" }, { id: 'b', text: "In your Catalog profile button" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'wa_l5', title: 'Sharing Your Shop Link', duration: 5,
        content: [
            { type: 'paragraph', text: "Send your entire shop to a customer in one click." },
            { type: 'heading', text: "Share Catalog" },
            { type: 'checklist', text: "Open your Catalog | Tap the Link icon (top right) | Copy Link or 'Send via WhatsApp' | Send to a friend to test" }
        ],
        quiz: {
            id: 'q_wa_5', question: "You can share...",
            options: [{ id: 'a', text: "Single items or whole catalog" }, { id: 'b', text: "Only photos" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'wa_l6', title: 'Greeting & Away Messages', duration: 15,
        content: [
            { type: 'paragraph', text: "Be polite automatically. Welcome new customers instantly." },
            { type: 'video', text: "hwu3wq73Czw" },
            { type: 'heading', text: "Automation" },
            { type: 'checklist', text: "Tools > Greeting Message | Turn on 'Send greeting' | Write: 'Namaste! Welcome to [Shop Name]. How can we help?'" }
        ],
        quiz: {
            id: 'q_wa_6', question: "When is a greeting message sent?",
            options: [{ id: 'a', text: "Every time you reply" }, { id: 'b', text: "To new customers or after 14 days inactivity" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'wa_l7', title: 'Quick Replies for Speed', duration: 10,
        content: [
            { type: 'paragraph', text: "Stop typing 'My UPI number is...' 10 times a day." },
            { type: 'video', text: "W8pNT9i5qH4" },
            { type: 'heading', text: "Setup Shortcuts" },
            { type: 'checklist', text: "Tools > Quick Replies | Tap + | Shortcut: /pay | Message: 'Here is our UPI ID: abc@upi. Thank you!' | Save" }
        ],
        quiz: {
            id: 'q_wa_7', question: "What triggers a quick reply?",
            options: [{ id: 'a', text: "Typing '/'" }, { id: 'b', text: "Typing '#'" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'wa_l8', title: 'Using Labels', duration: 10,
        content: [
            { type: 'paragraph', text: "Who paid? Who is new? Use colored tags to remember." },
            { type: 'video', text: "0NnCvjHceMg" },
            { type: 'heading', text: "Organize Chats" },
            { type: 'checklist', text: "Long press a chat | Tap 'Labels' tag icon | Select 'New Order' or 'Payment Pending' | See all labels in Menu later" }
        ],
        quiz: {
            id: 'q_wa_8', question: "Labels help you...",
            options: [{ id: 'a', text: "Organize chats by status" }, { id: 'b', text: "Change chat colors" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'wa_l9', title: 'Final Setup Review', duration: 10,
        content: [
            { type: 'paragraph', text: "You are ready! Let's check everything one last time." },
            { type: 'heading', text: "Checklist" },
            { type: 'checklist', text: "Check profile photo | Check catalog has 1+ item | Check greeting message is on | You are ready to launch!" }
        ],
        quiz: {
            id: 'q_wa_9', question: "Before launching...",
            options: [{ id: 'a', text: "Check everything" }, { id: 'b', text: "Do nothing" }],
            correctOptionId: 'a'
        }
    }
];

// --- REELS / VN EDITOR LESSONS ---
export const reelsLessons: Lesson[] = [
    {
        id: 'cc_l0', title: 'Watch: Easy Viral Reels with VN', duration: 5,
        content: [
            { type: 'paragraph', text: "Short videos are the best way to grow today. See what you can create from your phone." },
            { type: 'video', text: "j2A2_ebZd6E?start=0000&end=480"},
            { type: 'heading', text: "Key Takeaways" },
            { type: 'list', text: "VN Editor is free and has NO Watermark | Music makes or breaks your video | Transitions keep people watching" }
        ]
    },
    {
        id: 'cc_l1', title: 'Getting Started', duration: 15,
        content: [
            { type: 'paragraph', text: "Let's open the studio in your pocket (VN Editor)." },
            { type: 'heading', text: "First Steps" },
            { type: 'checklist', text: "Download VN Video Editor | Open and tap blue '+' (New Project) | Select a video from your gallery | Understand the 'Timeline' (bottom bar)" }
        ],
        quiz: {
            id: 'q_cc_1', question: "The area where you edit clips is called...",
            options: [{ id: 'a', text: "Playground" }, { id: 'b', text: "Timeline" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_l2', title: 'Splitting & Trimming', duration: 20,
        content: [
            { type: 'paragraph', text: "Cut the boring parts. Keep it fast!" },
            { type: 'video', text: "j2A2_ebZd6E?start=821&end=1124"},
            { type: 'heading', text: "Cutting Video" },
            { type: 'checklist', text: "Tap the video strip | Move the white line to where you want to cut | Tap 'Split' (Scissors icon) | Delete the bad part" }
        ],
        quiz: {
            id: 'q_cc_2', question: "If a video is too long, you should...",
            options: [{ id: 'a', text: "Split and delete extra parts" }, { id: 'b', text: "Post it as is" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_l3', title: 'Extracting & Adding Sound/Music', duration: 15,
        content: [
            { type: 'paragraph', text: "You will learn how to extract audio from another Youtube Vidoe and add it your own video" },
            { type: 'video', text: "j2A2_ebZd6E?start=1126&end=1326"},
            { type: 'heading', text: "Soundtrack" },
            { type: 'checklist', text: "Tap blue Music icon (top of timeline) > 'Music' | Pick a trending song | Drag it to match the start of your video" }
        ],
        quiz: {
            id: 'q_cc_3', question: "Why is music important?",
            options: [{ id: 'a', text: "It keeps the viewer engaged" }, { id: 'b', text: "It makes the file smaller" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_l4', title: 'Text & Titles', duration: 15,
        content: [
            { type: 'paragraph', text: "Many watch without sound. Text is mandatory." },
            { type: 'video', text: "j2A2_ebZd6E?start=1470&end=1718"},
            { type: 'heading', text: "Adding Text" },
            { type: 'checklist', text: "Tap 'T' icon (Text) | Choose 'Standard' or a style | Type your headline | Place it safely away from edges" }
        ],
        quiz: {
            id: 'q_cc_4', question: "Text helps when...",
            options: [{ id: 'a', text: "Video is too bright" }, { id: 'b', text: "Viewers have sound off" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_l5', title: 'Transitions', duration: 10,
        content: [
            { type: 'paragraph', text: "Move from one clip to another smoothly." },
            { type: 'video', text: "j2A2_ebZd6E?start=2746&end=3090"},
            { type: 'heading', text: "Smooth Moves" },
            { type: 'checklist', text: "Find the '+' icon between two clips | Tap it | Choose 'Zoom' or 'Dissolve' | Keep duration short (0.5s)" }
        ],
        quiz: {
            id: 'q_cc_5', question: "A good transition is...",
            options: [{ id: 'a', text: "Short and smooth" }, { id: 'b', text: "5 seconds long" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_l6', title: 'Speed Control', duration: 15,
        content: [
            { type: 'paragraph', text: "Fast for boring parts, slow for cool parts." },
            { type: 'video', text: "j2A2_ebZd6E?start=3415&end=3667"},
            { type: 'heading', text: "Change Speed" },
            { type: 'checklist', text: "Tap a clip | Tap 'Speed' | Use 'Regular' for simple speed or 'Curve' for advanced effects" }
        ],
        quiz: {
            id: 'q_cc_6', question: "To show a long process quickly, use...",
            options: [{ id: 'a', text: "Slow motion" }, { id: 'b', text: "Fast forward (2x or more)" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_l7', title: 'Filters & Effects', duration: 10,
        content: [
            { type: 'paragraph', text: "Make the colors pop." },
            { type: 'video', text: "qQdcYdFM17k?start=1698&end=1765"},
            { type: 'heading', text: "Enhance Look" },
            { type: 'checklist', text: "Tap 'Filter' to change colors | Tap 'FX' to add cool effects like Jitter or Zoom In" }
        ],
        quiz: {
            id: 'q_cc_7', question: "Filters change the...",
            options: [{ id: 'a', text: "Look and color of video" }, { id: 'b', text: "Audio volume" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_l8', title: 'Viral Strategy', duration: 20,
        content: [
            { type: 'paragraph', text: "A great video needs a hook." },
            { type: 'video', text: "L6loyJBtHK0"}, 
            { type: 'heading', text: "Hook the Viewer" },
            { type: 'checklist', text: "Start with action or a question | Don't say 'Hello friends' for 5 seconds | Get straight to the point" }
        ],
        quiz: {
            id: 'q_cc_8', question: "What is a hook?",
            options: [{ id: 'a', text: "A fishing tool" }, { id: 'b', text: "The first 3 seconds that grab attention" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_l9', title: 'Final Export', duration: 10,
        content: [
            { type: 'paragraph', text: "Ready to ship?" },
            { type: 'heading', text: "Save Video" },
            { type: 'checklist', text: "Check your spelling | Ensure music ends with video | Tap Blue Arrow (Top Right) | Export!" }
        ],
        quiz: {
            id: 'q_cc_9', question: "Before exporting...",
            options: [{ id: 'a', text: "Check music and text" }, { id: 'b', text: "Close the app" }],
            correctOptionId: 'a'
        }
    }
];


// --- GOOGLE BUSINESS PROFILE LESSONS ---
export const gbpLessons: Lesson[] = [
    {
        id: 'gbp_l0', title: 'Watch: Get Found on Maps', duration: 5,
        content: [
            { type: 'paragraph', text: "Why do customers trust shops on Google Maps? Watch this." },
            { type: 'video', text: "Aakyl2dY2S8" },
            { type: 'heading', text: "Why it matters" },
            { type: 'list', text: "Customers search 'near me' every day | It is free advertising | Reviews build trust instantly" }
        ]
    },
    {
        id: 'gbp_l1', title: 'Claiming vs Creating', duration: 15,
        content: [
            { type: 'paragraph', text: "Is your shop already there?" },
            { type: 'heading', text: "Find or Create" },
            { type: 'checklist', text: "Search your shop name on Google Maps | If it appears, tap 'Claim this business' | If not, search 'Google Business Profile' > 'Manage Now'" }
        ],
        quiz: {
            id: 'q_gbp_1', question: "If your shop is already on Maps...",
            options: [{ id: 'a', text: "Ignore it" }, { id: 'b', text: "Claim it to control the info" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'gbp_l2', title: 'Name & Category', duration: 10,
        content: [
            { type: 'paragraph', text: "Be specific so Google knows who to show you to." },
            { type: 'heading', text: "Basic Info" },
            { type: 'checklist', text: "Use the exact shop name (e.g. 'Riya Beauty Parlour') | Choose the correct category (e.g. 'Beauty Salon' not just 'Store')" }
        ],
        quiz: {
            id: 'q_gbp_2', question: "Which category is better?",
            options: [{ id: 'a', text: "General Store" }, { id: 'b', text: "Women's Clothing Store (Specific)" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'gbp_l3', title: 'Address & Pin', duration: 15,
        content: [
            { type: 'paragraph', text: "Pin it exactly right." },
            { type: 'heading', text: "Location" },
            { type: 'checklist', text: "Enter address | Drag the red pin on the map to your shop's door | Add service areas if you deliver" }
        ],
        quiz: {
            id: 'q_gbp_3', question: "Why drag the pin?",
            options: [{ id: 'a', text: "For fun" }, { id: 'b', text: "So customers find the exact door" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'gbp_l4', title: 'Verification', duration: 20,
        content: [
            { type: 'paragraph', text: "Google needs to know you are real." },
            { type: 'heading', text: "Prove it's yours" },
            { type: 'checklist', text: "Choose verification method (Video call, Phone code, or Postcard) | Follow instructions exactly | Wait for the code" }
        ],
        quiz: {
            id: 'q_gbp_4', question: "Without verification...",
            options: [{ id: 'a', text: "Your profile won't show publicly" }, { id: 'b', text: "Everything works fine" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'gbp_l5', title: 'Photos that Sell', duration: 15,
        content: [
            { type: 'paragraph', text: "People eat with their eyes." },
            { type: 'heading', text: "Upload Photos" },
            { type: 'checklist', text: "Add Logo | Add Cover Photo (Outside view) | Add 3-5 Interior photos | Add Team photos" }
        ],
        quiz: {
            id: 'q_gbp_5', question: "Which photo is most important?",
            options: [{ id: 'a', text: "A selfie" }, { id: 'b', text: "Outside view (so people recognize it)" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'gbp_l6', title: 'Getting Reviews', duration: 15,
        content: [
            { type: 'paragraph', text: "5 stars = Trust." },
            { type: 'heading', text: "Build Trust" },
            { type: 'checklist', text: "Ask happy customers: 'Can you give us a 5-star rating?' | Share your review link via WhatsApp | Reply to every review" }
        ],
        quiz: {
            id: 'q_gbp_6', question: "If you get a bad review...",
            options: [{ id: 'a', text: "Reply politely and offer to fix it" }, { id: 'b', text: "Delete your account" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'gbp_l7', title: 'Updates & Offers', duration: 10,
        content: [
            { type: 'paragraph', text: "Keep it fresh." },
            { type: 'heading', text: "Post Updates" },
            { type: 'checklist', text: "Use 'Add Update' | Post about new stock, festivals, or discounts | Add a photo to every update" }
        ],
        quiz: {
            id: 'q_gbp_7', question: "Updates help you...",
            options: [{ id: 'a', text: "Look active and attract customers" }, { id: 'b', text: "Waste time" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'gbp_l8', title: 'Q&A and Messaging', duration: 10,
        content: [
            { type: 'paragraph', text: "Answer before they ask." },
            { type: 'heading', text: "Talk to Customers" },
            { type: 'checklist', text: "Turn on 'Messaging' | Add FAQs in the Q&A section (e.g. 'Do you have parking?', 'Yes')" }
        ],
        quiz: {
            id: 'q_gbp_8', question: "Who can answer Q&A?",
            options: [{ id: 'a', text: "Anyone (Owner and Public)" }, { id: 'b', text: "Only Google" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'gbp_l9', title: 'Final Review', duration: 5,
        content: [
            { type: 'paragraph', text: "Is your digital shop open?" },
            { type: 'heading', text: "Launch Check" },
            { type: 'checklist', text: "Check Name, Hours, Phone | Ensure photos look good | Send link to a friend to test" }
        ],
        quiz: {
            id: 'q_gbp_9', question: "How to test the profile?",
            options: [{ id: 'a', text: "Send link to friends" }, { id: 'b', text: "Close your eyes" }],
            correctOptionId: 'a'
        }
    }
];
