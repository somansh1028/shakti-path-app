
import type { Lesson } from '../../../types';

// --- CANVA LESSONS ---
export const canvaLessons: Lesson[] = [
    { 
        id: 'l0', title: 'Watch: How Canva Works', duration: 5, 
        content: [
            { type: 'paragraph', text: "Before we start designing, watch this short video to see what you can do with Canva on your phone." }, 
            { type: 'video', text: "yWJp7gQqCQ8" }, 
            { type: 'heading', text: "Key Takeaways" }, 
            { type: 'list', text: "Canva has thousands of free templates | You can change text and colors in seconds | It works perfectly on your phone" }
        ] 
    },
    { 
        id: 'l1', title: 'Welcome to Canva on Your Phone', duration: 10, 
        content: [
            { type: 'paragraph', text: "Design from your pocket. Today is your first tiny step to making posts for yourself or small businesses. You don't need a degree, just your phone." }, 
            { type: 'heading', text: "Today's Goal" },
            { type: 'list', text: "1. Open Canva and sign in. | 2. Pick the right size for a post. | 3. Type your first line of text." },
            { type: 'heading', text: "Do it with me" },
            { type: 'checklist', text: "Open the Canva app | Sign in or create a free account | Tap 'Create design' → 'Instagram Post' (Square) | Tap 'Text' → 'Add heading' | Type: '[Your Name] · Dreamer'" },
            { type: 'heading', text: "Mini Assignment: Your First Design" },
            { type: 'paragraph', text: "Create a simple post with your Name + One Word that describes you. Use any background color you love. Save it to your phone!" }
        ], 
        quiz: { 
            id: 'q_l1', question: "Canva is mainly for...", 
            options: [{ id: 'a', text: "Reading news" }, { id: 'b', text: "Making designs" }, { id: 'c', text: "Making phone calls" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l2', title: '3 Simple Rules of Beautiful Design', duration: 15, 
        content: [
            { type: 'paragraph', text: "No big theories. Just 3 secrets professionals use daily to make things look good." }, 
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
            id: 'q_l2', question: "Which color combination has better contrast?", 
            options: [{ id: 'a', text: "Yellow text on White" }, { id: 'b', text: "White text on Dark Purple" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l3', title: 'Templates That Do the Hard Work', duration: 15, 
        content: [
            { type: 'paragraph', text: "Designers don't start from zero. You don't have to either. Templates save time and teach you good layouts." }, 
            { type: 'heading', text: "Step 1: Search" },
            { type: 'paragraph', text: "Open Canva. Tap 'Templates'. Search for 'sale', 'motivation', or 'small business'." },
            { type: 'heading', text: "Step 2: Make it Yours" },
            { type: 'checklist', text: "Change ALL text to your own words | Change at least one color | Replace the photo with yours or a free one" },
            { type: 'heading', text: "Mini Assignment: My First Template" },
            { type: 'paragraph', text: "Choose a template for a shop, a club, or a cause. Customize the text, color, and image so it looks unique." }
        ], 
        quiz: { 
            id: 'q_l3', question: "Using templates is cheating. True or False?", 
            options: [{ id: 'a', text: "True" }, { id: 'b', text: "False. They are a starting point." }, { id: 'c', text: "Only for experts" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l4', title: 'Magic Design: Layouts in Seconds', duration: 20, 
        content: [
            { type: 'paragraph', text: "Stuck on layout? Let AI suggest designs for you. You describe the idea, AI shows ready-made posts." }, 
            { type: 'heading', text: "Try these prompts" },
            { type: 'list', text: "'Bakery sale this weekend' | 'Motivational quote for girls' | 'Free health camp invitation'" },
            { type: 'heading', text: "Generate & Customise" },
            { type: 'checklist', text: "Open Magic Design / AI Design | Choose Instagram Post | Paste your prompt | Pick a layout | Change brand name, colors, and fonts" },
            { type: 'heading', text: "Mini Assignment: AI Snack Post" },
            { type: 'paragraph', text: "Use AI to design a post for homemade snacks/food. Customise the text, color, and contact info." }
        ], 
        quiz: { 
            id: 'q_l4', question: "What is the best prompt for AI design?", 
            options: [{ id: 'a', text: "Make something" }, { id: 'b', text: "Instagram post for Diwali sweets sale, bright Indian colors." }, { id: 'c', text: "Any post" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l5', title: 'Magic Write: Captions & Hooks with AI', duration: 20, 
        content: [
            { type: 'paragraph', text: "Words feel hard? Let AI suggest, you polish. AI gives ideas, you edit the voice, you make the final call." }, 
            { type: 'heading', text: "3 Caption Styles" },
            { type: 'list', text: "1. Hook + Info + Action | 2. Problem + Promise | 3. Tiny Story" },
            { type: 'heading', text: "Draft and Edit" },
            { type: 'checklist', text: "Generate a caption with Magic Write | Replace hard words with simple ones | Add one local detail or emoji" },
            { type: 'heading', text: "Mini Assignment: Caption Clinic" },
            { type: 'paragraph', text: "Pick one of your designs. Create 2 AI captions. Edit them into 1 final caption that sounds like YOU." }
        ], 
        quiz: { 
            id: 'q_l5', question: "A great caption sounds like...", 
            options: [{ id: 'a', text: "A robot" }, { id: 'b', text: "A real person talking" }, { id: 'c', text: "A dictionary" }], 
            correctOptionId: 'b' 
        } 
    },
    { 
        id: 'l6', title: 'AI Images & Photo Glow-Up', duration: 20, 
        content: [
            { type: 'paragraph', text: "No fancy camera needed. AI and simple edits are enough. You have two options: Clean a real photo OR Generate an AI illustration." }, 
            { type: 'heading', text: "Option 1: Clean a Real Photo" },
            { type: 'checklist', text: "Take photo of an item | Upload to Canva | Remove background (if possible) | Pick a simple background color" },
            { type: 'heading', text: "Option 2: AI Illustration" },
            { type: 'checklist', text: "Open AI Image tool | Paste a prompt (e.g. 'girl designing on phone') | Choose 'Flat' or 'Illustration' style | Insert into design" },
            { type: 'heading', text: "Mini Assignment: Before & After" },
            { type: 'paragraph', text: "Create a post with your item. Show the messy 'before' and the clean 'after' design." }
        ], 
        quiz: { 
            id: 'q_l6', question: "When should you prefer a real photo over AI?", 
            options: [{ id: 'a', text: "When selling a real product you made" }, { id: 'b', text: "Never" }, { id: 'c', text: "Always" }], 
            correctOptionId: 'a' 
        } 
    },
    { 
        id: 'l7', title: 'Your First AI-Powered Campaign Post', duration: 25, 
        content: [
            { type: 'paragraph', text: "Today we combine layout, image, and caption into one full post. Choose a topic: Small Business, School Club, or Social Cause." }, 
            { type: 'heading', text: "Design Steps" },
            { type: 'checklist', text: "Use Magic Design for layout | Add real or AI image | Apply contrast & alignment | Use Magic Write for caption | Add Date/Offer/Action" },
            { type: 'heading', text: "Mini Assignment: Campaign Post" },
            { type: 'paragraph', text: "Create one full post for your chosen topic. Make it good enough to share in a WhatsApp group." }
        ], 
        quiz: { 
            id: 'q_l7', question: "A campaign post must answer:", 
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
            id: 'q_l8', question: "For a vertical Story/Status, you should:", 
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
            id: 'q_l9', question: "Planning 3 connected posts is better than 1 random post.", 
            options: [{ id: 'a', text: "True" }, { id: 'b', text: "False" }, { id: 'c', text: "It doesn't matter" }], 
            correctOptionId: 'a' 
        } 
    }
];

// --- WHATSAPP BUSINESS LESSONS ---
export const whatsappLessons: Lesson[] = [
    {
        id: 'wa_l0', title: 'Watch: Why WhatsApp Business?', duration: 5,
        content: [
            { type: 'paragraph', text: "Learn how WhatsApp Business helps you manage orders and look professional." },
            { type: 'video', text: "YI2qPPP-3OY?start=206" },
            { type: 'heading', text: "Key Takeaways" },
            { type: 'list', text: "Separate your business chats from personal ones | Automatically show your products | Reply to customers even when you sleep" }
        ]
    },
    {
        id: 'wa_l1', title: 'Setting Up the App', duration: 10,
        content: [
            { type: 'paragraph', text: "First, get the right app. It's different from normal WhatsApp." },
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

// --- REELS / CAPCUT LESSONS ---
export const reelsLessons: Lesson[] = [
    {
        id: 'cc_l0', title: 'Watch: Easy Viral Reels', duration: 5,
        content: [
            { type: 'paragraph', text: "Short videos are the best way to grow today. See what you can create from your phone." },
            { type: 'video', text: "LTXpNz_ymrs" },
            { type: 'heading', text: "Key Takeaways" },
            { type: 'list', text: "CapCut is free and powerful | Music makes or breaks your video | Transitions keep people watching" }
        ]
    },
    {
        id: 'cc_l1', title: 'Getting Started', duration: 15,
        content: [
            { type: 'paragraph', text: "Let's open the studio in your pocket." },
            { type: 'heading', text: "First Steps" },
            { type: 'checklist', text: "Download CapCut | Open and tap 'New Project' | Select a video from your gallery | Understand the 'Timeline' (bottom bar)" }
        ],
        quiz: {
            id: 'q_cc_1', question: "The area where you edit clips is called...",
            options: [{ id: 'a', text: "Playground" }, { id: 'b', text: "Timeline" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_l2', title: 'Trimming & Splitting', duration: 20,
        content: [
            { type: 'paragraph', text: "Cut the boring parts. Keep it fast!" },
            { type: 'heading', text: "Cutting Video" },
            { type: 'checklist', text: "Tap the video strip | Move the white line to where you want to cut | Tap 'Split' | Delete the bad part" }
        ],
        quiz: {
            id: 'q_cc_2', question: "If a video is too long, you should...",
            options: [{ id: 'a', text: "Split and delete extra parts" }, { id: 'b', text: "Post it as is" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_l3', title: 'Adding Music', duration: 15,
        content: [
            { type: 'paragraph', text: "Music sets the mood." },
            { type: 'heading', text: "Soundtrack" },
            { type: 'checklist', text: "Tap 'Audio' > 'Sounds' | Pick a trending song | Drag it to match the start of your video" }
        ],
        quiz: {
            id: 'q_cc_3', question: "Why is music important?",
            options: [{ id: 'a', text: "It keeps the viewer engaged" }, { id: 'b', text: "It makes the file smaller" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cc_l4', title: 'Text & Auto Captions', duration: 15,
        content: [
            { type: 'paragraph', text: "Many watch without sound. Text is mandatory." },
            { type: 'heading', text: "Adding Text" },
            { type: 'checklist', text: "Tap 'Text' | 'Auto Captions' > Start | Watch AI write your words | Correct any spelling mistakes" }
        ],
        quiz: {
            id: 'q_cc_4', question: "Auto captions help when...",
            options: [{ id: 'a', text: "Video is too bright" }, { id: 'b', text: "Viewers have sound off" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cc_l5', title: 'Transitions', duration: 10,
        content: [
            { type: 'paragraph', text: "Move from one clip to another smoothly." },
            { type: 'heading', text: "Smooth Moves" },
            { type: 'checklist', text: "Find the white box between two clips | Tap it | Choose 'Pull In' or 'Blink' | Keep duration short (0.5s)" }
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
            { type: 'heading', text: "Change Speed" },
            { type: 'checklist', text: "Tap a clip | Tap 'Speed' | 'Normal' > 2x (Fast) or 0.5x (Slow Mo)" }
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
            { type: 'heading', text: "Enhance Look" },
            { type: 'checklist', text: "Tap 'Effects' > 'Video Effects' | Try 'Diamond Zoom' or 'Sparkle' | Tap 'Adjust' to fix brightness" }
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
            { type: 'checklist', text: "Check your captions | Ensure music ends with video | Tap '1080p' top right | Export!" }
        ],
        quiz: {
            id: 'q_cc_9', question: "Before exporting...",
            options: [{ id: 'a', text: "Check music and captions" }, { id: 'b', text: "Close the app" }],
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
