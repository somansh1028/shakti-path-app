




import type { Lesson } from '../../../types';

export const smartphoneLessons: Lesson[] = [
    {
        id: 'sm_l1', 
        title: 'Keys & Icons (Navigation Basics)', 
        duration: 8,
        content: [
            { type: 'paragraph', text: "Your phone has a simple way to move around — like learning the 3 basic steps of walking. Some phones use 3 buttons, and some use swipes (gestures). You will learn both." },
            { type: 'video', text: "0spySgHG8A4" },
            { type: 'heading', text: "Option A: 3-Button Navigation" },
            { type: 'list', text: "1. Back (Triangle) — goes to the previous screen. | 2. Home (Circle) — takes you to the main screen anytime. | 3. Recent Apps (Square) — shows all open apps so you can switch or close them." },
            { type: 'heading', text: "Option B: Gesture Navigation (No Buttons)" },
            { type: 'list', text: "Go Home: swipe up from bottom. | See open apps: swipe up and hold. | Go back: swipe from left or right edge." },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Android navigation buttons Marathi'" },
            { type: 'heading', text: "Try it now — Interactive Checklist" },
            { type: 'checklist', text: "Go to your Home screen | Open any app | Go back once | Open Recent Apps and close one app" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Open Calculator, then go to Home, then open Recent Apps and switch back to Calculator." }
        ],
        quiz: {
            id: 'q_sm_1', 
            question: "Which action takes you to the main screen?",
            options: [{ id: 'a', text: "Back" }, { id: 'b', text: "Home" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l2', 
        title: 'Touch, Typing & Voice Input', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Your phone understands: tap, double tap, long press, swipe, pinch. Typing is easier with suggestions and voice typing." },
            { type: 'video', text: "VBnDcogaTzY" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Use basic touch actions | Switch English/Marathi keyboard | Use voice typing" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Gboard Marathi typing'" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Long press an app icon | Pinch to zoom in/out in Photos | Open keyboard and switch language" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Type: 'My name is ____.' then try voice typing the same line." }
        ],
        quiz: {
            id: 'q_sm_2', 
            question: "What does long press do?",
            options: [{ id: 'a', text: "Nothing" }, { id: 'b', text: "Opens extra options" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l3', 
        title: 'Settings That Matter', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Settings help you make your phone comfortable and safe. Learn about Brightness, Sound, Language, and Font size." },
            { type: 'video', text: "_tfD_lKnVNs" },
            { type: 'heading', text: "Key Adjustments" },
            { type: 'list', text: "Brightness: Save battery or see better. | Sound: Ring, Vibrate, or Silent. | Language: Add English + Marathi." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Change brightness | Set language to English + Marathi if available" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Increase font size and check if reading feels easier." }
        ],
        quiz: {
            id: 'q_sm_3', 
            question: "To save battery, you should...",
            options: [{ id: 'a', text: "Lower brightness" }, { id: 'b', text: "Raise brightness" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l4', 
        title: 'WiFi & Data', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "WiFi saves money. Data is for when you're outside. Learn to connect to WiFi, turn mobile data on/off, and use Data Saver." },
            { type: 'video', text: "G8pOIStJE0A" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'WiFi connect kaise kare Marathi'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Connect to a WiFi network and open one YouTube video." }
        ],
        quiz: {
            id: 'q_sm_4', 
            question: "Which one is usually free or unlimited?",
            options: [{ id: 'a', text: "Mobile Data" }, { id: 'b', text: "WiFi" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l5', 
        title: 'Phone Care & Storage', 
        duration: 8,
        content: [
            { type: 'paragraph', text: "A full phone becomes slow. Learn to check storage, delete large files, and use an SD card if available." },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Phone storage khali kaise kare Marathi'" },
            { type: 'heading', text: "Action Plan" },
            { type: 'checklist', text: "Check available storage | Identify large files (videos)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Clear 100MB by deleting old videos you don’t need." }
        ],
        quiz: {
            id: 'q_sm_5', 
            question: "If phone is slow, check...",
            options: [{ id: 'a', text: "Battery color" }, { id: 'b', text: "Storage space" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l6', 
        title: 'App Basics', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Use Play Store for safe downloads. Learn to Install, Update, Check reviews, and Understand permissions." },
            { type: 'video', text: "C7kEEklJ4H8" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Play Store se app kaise download kare Marathi'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Update one app and notice the change." }
        ],
        quiz: {
            id: 'q_sm_6', 
            question: "Where should you download apps from?",
            options: [{ id: 'a', text: "Play Store" }, { id: 'b', text: "Random websites" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l7', 
        title: 'Internet Safety', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "Safety is skill, not fear. Learn about Screen lock, Strong PIN, Never sharing OTP, and Recognizing scams." },
            { type: 'video', text: "cgX2wgscZwE" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Online scam se kaise bache Marathi'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Set a screen lock (PIN or pattern)." }
        ],
        quiz: {
            id: 'q_sm_7', 
            question: "Should you share your OTP?",
            options: [{ id: 'a', text: "Yes, to bank" }, { id: 'b', text: "Never, to anyone" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l8', 
        title: 'WhatsApp for Work', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "WhatsApp is a common work tool in India. Learn Professional group behavior, Sending documents, and Voice notes." },
            { type: 'video', text: "SPIya6v3Ybk" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Send a PDF/photo to a practice group." }
        ],
        quiz: {
            id: 'q_sm_8', 
            question: "For official documents, send as...",
            options: [{ id: 'a', text: "Photo" }, { id: 'b', text: "Document" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l9', 
        title: 'Email for Work', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Email builds trust for jobs, NGOs, and formal communication. Learn to Create Gmail, Subject line, Greeting + closing, and Attach files." },
            { type: 'video', text: "x_Ah3NrPcu8" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Gmail use Marathi'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Draft an email applying for a small internship or workshop." }
        ],
        quiz: {
            id: 'q_sm_9', 
            question: "What is the 'Subject' line for?",
            options: [{ id: 'a', text: "Your name" }, { id: 'b', text: "Short summary of email" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l10', 
        title: 'Files & Folders', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Work becomes easy when files are organized. Learn about Downloads, Photos, Creating folders, and Renaming files." },
            { type: 'video', text: "xyh6sAJ4Wxo" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create folders: Work, School, Personal." }
        ],
        quiz: {
            id: 'q_sm_10', 
            question: "Where do downloaded files go?",
            options: [{ id: 'a', text: "Downloads folder" }, { id: 'b', text: "Nowhere" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l11', 
        title: 'Google Drive Basics', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "Drive keeps documents safe even if phone is lost. Learn to Create folder, Upload file, and Share link." },
            { type: 'video', text: "AcoNlNBtTlQ" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Google Drive folder banana Marathi'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Upload one photo into a Drive folder named ShaktiPath Practice." }
        ],
        quiz: {
            id: 'q_sm_11', 
            question: "If you lose your phone, are Drive files safe?",
            options: [{ id: 'a', text: "Yes" }, { id: 'b', text: "No" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l12', 
        title: 'Google Docs on Phone', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Docs lets you create simple resumes and applications. Learn to Create a document, Add title + bullet points, and Save to Drive." },
            { type: 'video', text: "H-rPbF1HLhs" },
            { type: 'heading', text: "Search Tip" },
            { type: 'paragraph', text: "Search on YouTube: 'Google Docs mobile Marathi'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a short 5-line bio about yourself." }
        ],
        quiz: {
            id: 'q_sm_12', 
            question: "What is Google Docs for?",
            options: [{ id: 'a', text: "Writing documents" }, { id: 'b', text: "Editing videos" }],
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
            { type: 'paragraph', text: "A computer helps you study, apply for opportunities, and create documents. There are two common types: Desktop (stays in one place, separate parts) and Laptop (all-in-one, portable)." },
            { type: 'video', text: "zbLNSJEgS08" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Identify parts of a desktop | Identify parts of a laptop | Understand where each is useful" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Point to the monitor | Locate the CPU | Find the keyboard | Find the mouse | If you have a laptop, find the touchpad" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write or say: 'Which computer do I use most — laptop or desktop? Why?'" }
        ],
        quiz: {
            id: 'q_comp_1', 
            question: "Which computer is easier to carry?",
            options: [{ id: 'a', text: "Desktop" }, { id: 'b', text: "Laptop" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l2', 
        title: 'Turning On/Off + Safe Shutdown', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "Turning on a computer is easy. Turning off correctly is just as important. Safe shutdown prevents file loss and keeps the system healthy. Never just pull the plug." },
            { type: 'video', text: "0UttU0Aw148" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Find the power button | Understand login basics | Shut down safely" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Press the power button | Wait for the screen to load | If needed, enter a PIN/password | Click the Start menu | Click Shut down" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Turn on → open Calculator → close it → shut down safely." }
        ],
        quiz: {
            id: 'q_comp_2', 
            question: "Which is the safest way to turn off a computer?",
            options: [{ id: 'a', text: "Press and hold power button" }, { id: 'b', text: "Use Shut down option" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l3', 
        title: 'Keyboard & Mouse Basics', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "The keyboard helps you type. The mouse helps you point, select, and open things. Mastering these inputs is the first step to computer literacy." },
            { type: 'video', text: "K_OYP4fYYbw" },
            { type: 'video', text: "xDzDBfq_H7k" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Left click, right click, double click | Scroll up and down | Important keys (Enter, Backspace, Space, Shift)" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Single-click an icon | Double-click an icon to open | Right-click and see options | Use the scroll wheel on any page" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Open Paint (or any drawing app). Draw a simple flower or box. Close the app." }
        ],
        quiz: {
            id: 'q_comp_3', 
            question: "Which action usually opens an app?",
            options: [{ id: 'a', text: "Single click" }, { id: 'b', text: "Double click" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l4', 
        title: 'Typing Practice (English-first)', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "Typing is a powerful skill for school and jobs. Start slow and focus on accuracy. Learn where your fingers should rest." },
            { type: 'video', text: "PLvq_lmbe4u0tTDy17dTX5K8a1wMOZbGAG&index=28" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Use Space, Enter, Backspace | Use Shift for capital letters | Type short sentences confidently" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Type your full name | Type your school/college name | Type your city/village | Use Shift to type one capital letter" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Type this: 'My name is _____. I live in _____. I want to learn computer skills.'" }
        ],
        quiz: {
            id: 'q_comp_4', 
            question: "Which key makes letters capital?",
            options: [{ id: 'a', text: "Enter" }, { id: 'b', text: "Shift" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l5', 
        title: 'Windows Basics — Desktop, Taskbar, Start Menu', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "The desktop is your main workspace. The taskbar shows open apps and quick icons. The Start menu helps you find apps and settings." },
            { type: 'video', text: "KfBDtvMag3o" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Recognize desktop, taskbar, Start | Open and close apps | Switch between apps" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Click the Start menu | Open Settings | Open Calculator | Minimize and maximize a window | Look at the taskbar to see open apps" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Open two apps (Calculator + Notepad). Switch between them using the taskbar." }
        ],
        quiz: {
            id: 'q_comp_5', 
            question: "Where do you usually click to find apps?",
            options: [{ id: 'a', text: "Start menu" }, { id: 'b', text: "Recycle Bin" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l6', 
        title: 'File & Folder Management', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "Folders keep your work organized. Files are the documents, photos, or notes inside folders. This is a core skill in foundational computer courses." },
            { type: 'video', text: "AfHJRPt144s" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Create a folder | Rename a file/folder | Copy, paste, delete safely" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Open File Explorer | Create a folder named My Work | Rename it to My Work 2025 | Create another folder named My Certificates" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create 3 folders: 1. School, 2. Work, 3. Personal" }
        ],
        quiz: {
            id: 'q_comp_6', 
            question: "What is a folder used for?",
            options: [{ id: 'a', text: "To organize files" }, { id: 'b', text: "To change internet speed" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l7', 
        title: 'Google docs Processing Basics', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "Word processing helps you create letters, resumes, and assignments. This skill is explicitly part of baseline computer literacy outcomes." },
            { type: 'video', text: "5wJOaZQhz_Y" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Create a new document | Use bold, underline, bullets | Save your work properly" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Open Word / Google Docs / LibreOffice Writer | Type a title: My Introduction | Write 4–5 lines | Add 3 bullet points | Save the file" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a 1-page document: 'My Skills and Goals'. Include 3 skills you already have and 3 skills you want to learn." }
        ],
        quiz: {
            id: 'q_comp_7', 
            question: "Which feature helps you list points neatly?",
            options: [{ id: 'a', text: "Bullets" }, { id: 'b', text: "Zoom" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l8', 
        title: 'Internet Basics + Safe Browsing', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "The internet helps you learn, apply, and communicate. Safe usage builds confidence. Always be careful about what you click." },
            { type: 'video', text: "FZSEkgPGspE" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Open a browser | Search for information | Recognize safe vs suspicious links" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Open a browser | Search: 'best study tips for students' | Open 1 result | Go back | Close the tab" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Search for a small career goal: 'basic typing jobs for students'. Write 2 things you learned." }
        ],
        quiz: {
            id: 'q_comp_8', 
            question: "What should you do if a link looks strange?",
            options: [{ id: 'a', text: "Click quickly" }, { id: 'b', text: "Avoid it" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l9', 
        title: 'Email for Work (Computer)', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "Email is used for schools, internships, and formal communication. Learning it supports national digital literacy goals." },
            { type: 'video', text: "vZB9Ipk9fpE" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Subject line | Professional greeting and closing | Attachments" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Open Gmail | Click Compose | Add a subject | Write 3–4 lines | Save as draft" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Draft an email to a teacher/mentor: Subject: Request for guidance. Body: 4–5 polite lines." }
        ],
        quiz: {
            id: 'q_comp_9', 
            question: "Why is the subject important?",
            options: [{ id: 'a', text: "It tells what the email is about" }, { id: 'b', text: "It adds emojis" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l10', 
        title: 'Printing + Saving as PDF', 
        duration: 8,
        content: [
            { type: 'paragraph', text: "Sometimes you need a printed copy. Often, you can save as PDF instead to send it professionally." },
            { type: 'video', text: "OvxaGKsklY0" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Print preview | Choose correct printer | Save a document as PDF" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Open any document | Click File → Print | Look at Print Preview | Select Save as PDF if available" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Save your 'My Introduction' document as a PDF." }
        ],
        quiz: {
            id: 'q_comp_10', 
            question: "What does Print Preview show?",
            options: [{ id: 'a', text: "How the document will look when printed" }, { id: 'b', text: "Your phone battery" }],
            correctOptionId: 'a'
        }
    }
];

export const englishLessons: Lesson[] = [
     {
        id: 'eng_l1', 
        title: 'Greetings', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "A greeting is your first impression. Even one correct English line helps you look confident and respectful." },
            { type: 'video', text: "WRRhLVSpRA" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Say hello politely | Use time-based greetings | Say goodbye" },
            { type: 'heading', text: "Key Words" },
            { type: 'list', text: "Hello / Hi | Good morning | Good afternoon | Good evening | Good night | Thank you | Bye / Goodbye" },
            { type: 'heading', text: "Try it now - Interactive Checklist" },
            { type: 'checklist', text: "Say: Hello | Say: Good morning | Say: Good evening | Say: Thank you | Say: Goodbye" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Greet two people today in English: 1. 'Good morning.' 2. 'Hello.'" }
        ],
        quiz: {
            id: 'q_eng_1', 
            question: "Which greeting is correct at 9 AM?",
            options: [{ id: 'a', text: "Good night" }, { id: 'b', text: "Good morning" }, { id: 'c', text: "Good evening" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l2', 
        title: 'Introduction', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "A good introduction is short and clear. You only need 2–3 simple lines." },
            { type: 'video', text: "n4gK-OHU_k" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Say your name | Say where you are from | Say your role (student/learner) | Use one polite closing line" },
            { type: 'heading', text: "Key Sentences" },
            { type: 'list', text: "My name is ____ . | I am from ____ . | I live in ____ . | I am a student. | I am learning English. | Nice to meet you." },
            { type: 'heading', text: "Try it now - Interactive Checklist" },
            { type: 'checklist', text: "Fill your name in the sentence 'My name is...' | Say it aloud 2 times | Fill your village/city in 'I am from...' | Say it aloud 2 times | Say: Nice to meet you" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Record a 10-second voice note: 'My name is ____. I am from ____. I am a student.'" }
        ],
        quiz: {
            id: 'q_eng_2', 
            question: "Which line tells your place?",
            options: [{ id: 'a', text: "I am from ____" }, { id: 'b', text: "Nice to meet you" }, { id: 'c', text: "Hello" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l3',
        title: 'Numbers, Dates & Time',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Numbers help you share phone numbers, age, and dates confidently." },
            { type: 'video', text: "ZkEnJeh8O5Q" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Say numbers 1–20 | Say your age | Say your phone number | Say today’s day/date" },
            { type: 'heading', text: "Key Sentences" },
            { type: 'list', text: "I am ____ years old. | My phone number is ____ . | Today is ____ . | The date is ____ ." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Say numbers 1 to 10 aloud | Say your age | Say your phone number slowly" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Tell a friend/teacher: 'My phone number is ____.'" }
        ],
        quiz: {
            id: 'q_eng_3',
            question: "Which sentence is correct?",
            options: [{ id: 'a', text: "My number phone is ____" }, { id: 'b', text: "My phone number is ____" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l4',
        title: 'Polite Requests',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Polite English makes people trust you." },
            { type: 'video', text: "mBaYJJvccOo" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Ask for help | Ask to repeat | Say you don’t understand" },
            { type: 'heading', text: "Key Sentences" },
            { type: 'list', text: "Please help me. | Can you repeat, please? | I don’t understand. | Thank you." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Say 'Please help me' | Say 'Can you repeat?' | Say 'Thank you'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Use one sentence today: 'Please help me.'" }
        ],
        quiz: {
            id: 'q_eng_4',
            question: "Which is most polite?",
            options: [{ id: 'a', text: "Help me" }, { id: 'b', text: "Please help me" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l5',
        title: 'WhatsApp/Phone English',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Short messages are common in real jobs." },
            { type: 'video', text: "Izmc9P2XK3I" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Write a simple greeting | Share time/availability | Say thank you" },
            { type: 'heading', text: "Message Templates" },
            { type: 'list', text: "Hello ma’am/sir. | I am ____ . | I will come at ____ . | Thank you." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Write this message draft: 'Hello ma’am. I am ____. I will come at 11 AM. Thank you.'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Send a practice message to a mentor/teacher (if appropriate)." }
        ],
        quiz: {
            id: 'q_eng_5',
            question: "Which line is a polite close?",
            options: [{ id: 'a', text: "Thank you" }, { id: 'b', text: "What?" }],
            correctOptionId: 'a'
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
