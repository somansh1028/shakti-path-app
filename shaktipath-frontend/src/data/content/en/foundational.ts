
import type { Lesson } from '../../../types';

export const smartphoneLessons: Lesson[] = [
    {
        id: 'sm_l1', 
        title: 'Keys & Icons', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "The navigation bar is the steering wheel of your phone. It consists of three shapes at the bottom of your screen. 1. The Triangle (Back) acts like an 'Undo' button, taking you to the previous screen. 2. The Circle (Home) is your escape hatch; no matter where you are, it instantly takes you back to your main dashboard. 3. The Square (Recent Apps) shows you all the apps currently running, allowing you to switch between tasks like flipping through pages of a book. Mastering these three buttons is the first step to digital fluency." },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Identify the 3 main buttons | Understand their functions" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Tap the Triangle (Back) to go back | Tap the Circle (Home) to exit | Tap the Square (Recent) to see open apps" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Find the Home button on your phone. Press it. Then press the Recent button and close one app." }
        ],
        quiz: {
            id: 'q_sm_1', 
            question: "Which button takes you to the main screen?",
            options: [{ id: 'a', text: "Back button" }, { id: 'b', text: "Home button" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l2', 
        title: 'Settings & Brightness', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Your phone contains a control center called the 'Quick Settings' panel, usually hidden at the top of the screen. This panel gives you instant access to essential utilities like WiFi, Bluetooth, and Sound. A critical control here is 'Brightness'. High brightness consumes battery rapidly and can strain your eyes in dark environments. Conversely, low brightness saves battery but makes the screen illegible outdoors. Learning to adjust this dynamically is key to comfortable usage." },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "How to open settings | How to change brightness" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Swipe down from top | Slide the sun icon to change brightness | Turn on 'Eye Comfort' mode at night" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Set your brightness to 50%. Find and turn on 'Silent Mode' for 1 minute." }
        ],
        quiz: {
            id: 'q_sm_2', 
            question: "How do you open quick settings?",
            options: [{ id: 'a', text: "Swipe down from top" }, { id: 'b', text: "Swipe up from bottom" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l3', 
        title: 'WiFi & Data', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "The internet reaches your phone via two distinct pipes. 'Mobile Data' is provided by your SIM carrier (like Jio or Airtel) and connects you to cell towers. 'WiFi' connects your phone to a local broadband router; it offers high speed, lower cost, and stability, but only works within a short range." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Tap Settings > WiFi | Turn it ON | Select a network and enter password" }
        ],
        quiz: {
            id: 'q_sm_3', 
            question: "What is faster and cheaper for downloads?",
            options: [{ id: 'a', text: "WiFi" }, { id: 'b', text: "Mobile Data" }],
            correctOptionId: 'a'
        }
    }
];

export const computerLessons: Lesson[] = [
    {
        id: 'comp_l1', 
        title: 'Laptop vs Desktop', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Computers come in two form factors. A 'Desktop' is a modular system where the screen (Monitor), input devices (Keyboard/Mouse), and brain (CPU Tower) are separate. It requires constant power. A 'Laptop' is an all-in-one portable unit with a built-in battery." },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Types of computers | Parts of a computer" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Identify screen (Monitor) | Identify typing board (Keyboard) | Identify pointer tool (Mouse)" }
        ],
        quiz: {
            id: 'q_comp_1', 
            question: "A laptop is...",
            options: [{ id: 'a', text: "Portable" }, { id: 'b', text: "Fixed to desk" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l2', 
        title: 'Turning On/Off', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "A computer is not like a light bulb; it has a complex operating system that needs to 'Boot Up' (load) and 'Shut Down' (save and close). Cutting power directly can corrupt files. The 'Shut Down' command sends a signal to all running programs to close their tasks safely." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Press Power Button | Wait for screen | Click Start > Power > Shut Down" }
        ],
        quiz: {
            id: 'q_comp_2', 
            question: "To close computer...",
            options: [{ id: 'a', text: "Pull plug" }, { id: 'b', text: "Use Shut Down option" }],
            correctOptionId: 'b'
        }
    }
];

export const englishLessons: Lesson[] = [
    {
        id: 'eng_l1', 
        title: 'Greetings', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Greetings set the tone for communication. In a professional setting, time-based greetings ('Good Morning', 'Good Afternoon') show respect. 'Hello' is neutral, while 'Hi' is casual. The closing 'Goodbye' or 'Have a nice day' ensures a polite end." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Say 'Hello' to friends | Say 'Good Morning' to boss | Say 'Goodbye' when leaving" }
        ],
        quiz: {
            id: 'q_eng_1', 
            question: "Greeting for 9 AM?",
            options: [{ id: 'a', text: "Good Morning" }, { id: 'b', text: "Good Night" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l2', 
        title: 'Introduction', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "A professional introduction is your elevator pitch. It follows a simple structure: Identity (Name), Origin (City/Country), and Profession (Job/Role). Clarity is key." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Say 'My name is [Name]' | Say 'I live in [City]' | Smile while speaking" }
        ],
        quiz: {
            id: 'q_eng_2', 
            question: "My name ___ Riya.",
            options: [{ id: 'a', text: "am" }, { id: 'b', text: "is" }],
            correctOptionId: 'b'
        }
    }
];

export const freelanceLessons: Lesson[] = [
    {
        id: 'free_l1', 
        title: 'What is Online Work?', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Freelancing is a shift from 'selling your time' to 'selling a service'. Unlike an employee who gets paid to show up, a freelancer gets paid to deliver a result (a logo, a translation). It offers freedom but requires self-discipline." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Imagine working from home | You are your own boss | You must find clients" }
        ],
        quiz: {
            id: 'q_free_1', 
            question: "In freelancing, who is the boss?",
            options: [{ id: 'a', text: "You" }, { id: 'b', text: "The government" }],
            correctOptionId: 'a'
        }
    }
];

export const moneyLessons: Lesson[] = [
    {
        id: 'mon_l1', 
        title: 'Coins & Notes', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Financial literacy starts with recognizing value. Indian currency has distinct features to prevent counterfeiting. Security threads, watermarks, and latent images on high-value notes are designed for verification." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Look at a 500 note | Check the security thread | Check the watermark" }
        ],
        quiz: {
            id: 'q_mon_1', 
            question: "500 Rupee note color?",
            options: [{ id: 'a', text: "Stone Grey" }, { id: 'b', text: "Pink" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l2', 
        title: 'Counting', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Budgeting is the art of prioritizing. A 'Need' is essential for survival (Food, Medicine). A 'Want' is a desire (Cinema). Financial health comes from spending on Needs first and saving for Wants later." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Need: Food, Rent | Want: Cinema, New toy | Prioritize Needs" }
        ],
        quiz: {
            id: 'q_mon_2', 
            question: "Medicine is a...",
            options: [{ id: 'a', text: "Need" }, { id: 'b', text: "Want" }],
            correctOptionId: 'a'
        }
    }
];
