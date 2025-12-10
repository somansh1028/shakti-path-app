




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

        title: 'What is Freelancing?',

        duration: 12,

        content: [

            { type: 'paragraph', text: "Freelancing means you do small projects for clients and get paid per task, not monthly salary. You are not an employee. You are a service provider." },
            { type: 'video', text: "fqR9IIKWXZo" },
            { type: 'heading', text: "Think of it like this:" },
            { type: 'paragraph', text: "A nearby tailor stitches clothes for different people. A freelancer does digital work for different people." },
            { type: 'heading', text: "Freelancing is good for you because:" },
            { type: 'list', text: "You can start with a phone. | You can work from home. | You can learn slowly. | You can earn even while studying." },
            { type: 'heading', text: "Examples of simple freelancing work (phone-friendly)" },
            { type: 'list', text: "Making posters for local shops using Canva | Writing short WhatsApp/Instagram captions | Basic data entry | Marathi ↔ English translation of small texts | Voice-over in Marathi for short videos | Helping a small business manage WhatsApp inquiries" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "What freelancing means | How freelancing is different from a job | What beginners can do with a smartphone" },
            { type: 'heading', text: "Try it now: Interactive Checklist" },
            { type: 'checklist', text: "Say this line loudly: 'I can take small projects and earn.' | Think of 2 local businesses near you that might need help (shop, tuition class, salon, dairy, tailor). | Open your Notes app and write their names." },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write 3 services you might enjoy doing (e.g., Typing, Poster Making)." }

        ],

        quiz: {

            id: 'q_free_1',

            question: "Freelancing means:",

            options: [{ id: 'a', text: "One company monthly salary" }, { id: 'b', text: "Doing tasks for different clients" }],

            correctOptionId: 'b'

        }

    },

    {

        id: 'free_l2',
        title: 'Choose a Skill',
        duration: 15,
        content: [
            { type: 'paragraph', text: "To start freelancing, you don’t need big English or coding. You need one small skill you can practice daily. For Maharashtra rural girls, the best beginner skills are those that Need only a phone, Are useful for local businesses, and Can be done in Marathi + simple English." },
            { type: 'video', text: "D8JcZM0l45U" },
            { type: 'heading', text: "Top beginner skills with strong local demand" },
            { type: 'list', text: "1. Canva Poster & Reel Thumbnail Maker (Shops, coaching classes) | 2. WhatsApp Business Helper (Replying to customers) | 3. Basic Social Media Assistant (Posting photos) | 4. Data Entry / Form Filling (Simple typing) | 5. Marathi Voice-over / Script Reading | 6. Marathi ↔ English Translation (Small)" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "How to pick one skill | Which skills have real demand near you | How to avoid choosing an overly difficult skill first" },
            { type: 'heading', text: "Try it now: Interactive Checklist" },
            { type: 'list', text: "1. Canva Poster Maker (for shops/classes) | 2. WhatsApp Business Helper | 3. Basic Data Entry | 4. Marathi Voice-over | 5. Marathi to English Translation (Small)" },
            { type: 'heading', text: "Action Plan" },
            { type: 'checklist', text: "Choose ONE skill from the list | Tell yourself: 'I will practice this for 15 minutes daily' | Write your chosen skill in Notes" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Pick your #1 main skill and #2 backup skill." }

        ],

        quiz: {

            id: 'q_free_2',
            question: "Best first skill for phone-only beginners?",
            options: [{ id: 'a', text: "Advanced coding" }, { id: 'b', text: "Canva + social media" }],
            correctOptionId: 'b'

        }

    },

    {

        id: 'free_l3',
        title: 'Your Freelancing Toolkit',
        duration: 15,

        content: [

            { type: 'paragraph', text: "Before you find clients, you need a clean digital setup. This makes you look trustworthy. Organize your phone for work." },
            { type: 'video', text: "3Y4cFuvVI80" },
            { type: 'video', text: "hT0foxwjNSE" },
            { type: 'heading', text: "Must-have Apps" },
            { type: 'list', text: "Gmail (Professional email) | Google Drive (Store work) | Google Docs (Simple portfolio) | WhatsApp (Client chat) | Canva (Design)" },
            { type: 'heading', text: "Folder Rule" },
            { type: 'paragraph', text: "Create a main folder 'Freelancing' in Google Drive. Inside it, add: Portfolio, Client Work, Certificates." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Open Google Drive | Create folder 'Freelancing' | Add subfolders" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a simple email signature in Gmail: Name, Skill, City." }

        ],

        quiz: {
            id: 'q_free_3',
            question: "Why is Google Drive important?",
            options: [{ id: 'a', text: "For playing games" }, { id: 'b', text: "To store and share work neatly" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'free_l4',
        title: 'Find Work Safely',
        duration: 15,
        content: [
            { type: 'paragraph', text: "You can find work locally or on platforms. Start local for speed. Platforms like Fiverr.com or UpWork.com are good for safe 'Work from Home' Freelancing." },
            { type: 'video', text: "drifssJkmZ0" },
            { type: 'heading', text: "Start Local" },
            { type: 'paragraph', text: "Approach Tuition teachers, Medical shops, or Beauty parlours. Offer a simple package (e.g., '10 posters for ₹500')." },
            { type: 'heading', text: "Online: Fiverr" },
            { type: 'paragraph', text: "Great for beginners in India. Search for 'Work from Home' Freelancing'. It is free to apply." },
            { type: 'heading', text: "Safety Rule" },
            { type: 'paragraph', text: "If anyone asks for a registration fee or training fee to give you a job, it is a scam. Avoid." },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Draft a WhatsApp message for a local shop offering your service." }

        ],

        quiz: {
            id: 'q_free_4',
            question: "Is it true you must pay to apply on Fiverr.com or Upwork.com?",
            options: [{ id: 'a', text: "True" }, { id: 'b', text: "False" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'free_l5',
        title: 'Deliver, Talk, Pay',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Many beginners lose clients not because of skill, but because of poor communication. You only need simple, polite English sentences." },
            { type: 'video', text: "-5XpOmLYRkE" },
            { type: 'heading', text: "Simple Sentences" },
            { type: 'list', text: "'Thank you for the opportunity.' | 'I will share the first draft by tomorrow.' | 'Please share the details.' | 'Here is the final file. Thank you!'" },
            { type: 'heading', text: "Payment Basics" },
            { type: 'paragraph', text: "For local clients, use UPI. Share your QR code politely. Always confirm deadlines before starting." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Write a 2-line message to a client | Decide your first starter price (e.g., ₹200)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create your service rule: 'I will deliver in ___ days with ___ revisions.'" }
        ],
        quiz: {
            id: 'q_free_5',
            question: "Best way to build trust with clients?",
            options: [{ id: 'a', text: "Late replies" }, { id: 'b', text: "Clear timelines + polite communication" }],
            correctOptionId: 'b'
        }
    }
];

export const moneyLessons: Lesson[] = [
    {
        id: 'mon_l1',
        title: 'Money Mindset for Freelancers',
        duration: 12,
        content: [
            { type: 'paragraph', text: "Freelancing is not only skill, it is also money discipline. When you earn small amounts regularly, your confidence grows. But if money is not managed, even good income can disappear. This lesson helps you think like a smart earner: track money, plan small goals, and stay safe with digital payments." },
            { type: 'video', text: "Kh_fUDcTeNU" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "What 'income' means for freelancers | Why tracking money is power | A simple rule to start saving" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Think of 1 skill you can sell (typing, design, teaching) | Imagine you earn ₹500 this week | Write 2 things you will use it for: Need (गरज) vs Save (बचत)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Open Notes on your phone and write: 'My first weekly earning goal is ₹____ and I will save ₹____.'" }
        ],
        quiz: {
            id: 'q_mon_1',
            question: "Why should a freelancer track income and expenses?",
            options: [{ id: 'a', text: "To show off" }, { id: 'b', text: "To plan and save" }, { id: 'c', text: "Because apps say so" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l2',
        title: 'Income, Expenses, Needs vs Wants',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Income is the money you earn. Expenses are the money you spend. To grow, you must know the difference between needs and wants. This simple habit helps you avoid stress and build savings." },
            { type: 'video', text: "iWsQY6Ha4OE" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Income vs Expense | Needs vs Wants | How small leaks reduce savings" },
            { type: 'heading', text: "Try it now: Interactive Checklist" },
            { type: 'checklist', text: "Write today's small expenses (even ₹10-₹20 items) | Mark each item: Need (गरज) or Want (इच्छा)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "For 3 days, note every expense in your phone Notes. At the end of day 3, total them." }
        ],
        quiz: {
            id: 'q_mon_2',
            question: "Which is a 'Need'?",
            options: [{ id: 'a', text: "Fancy earphones" }, { id: 'b', text: "Medicines" }, { id: 'c', text: "Extra shopping" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l3',
        title: 'Simple Budgeting (Weekly + Monthly)',
        duration: 15,
        content: [
            { type: 'paragraph', text: "A budget is a simple comparison of income and expenses. If your income is more than expenses, you have a surplus. If expenses are more, you have a deficit. The goal is to move your life slowly toward surplus. Budgeting should be done regularly — weekly first, then monthly." },
            { type: 'video', text: "RcQi5SHYaf0" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "What is a budget | How to make a 10-minute weekly budget | Simple saving formula" },
            { type: 'heading', text: "Try it now: Interactive Checklist" },
            { type: 'checklist', text: "Write: Weekly income = ₹____ | Weekly expenses = ₹____ | Weekly saving goal = ₹____" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Use this simple rule: Saving = Income – Expenses. Write your own example with real numbers." }
        ],
        quiz: {
            id: 'q_mon_3',
            question: "If income is ₹700 and expenses are ₹600, you have:",
            options: [{ id: 'a', text: "Deficit" }, { id: 'b', text: "Surplus" }, { id: 'c', text: "Loan" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l4',
        title: 'Saving & Emergency Fund',
        duration: 12,
        content: [
            { type: 'paragraph', text: "Saving creates safety. Even ₹10–₹20 daily can become meaningful. An emergency fund is money kept for sudden needs like illness, travel, or phone repair. Start small. The important part is consistency." },
            { type: 'video', text: "saAyROxeLwg" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Why saving matters | Emergency fund meaning | Simple goal setting" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Pick 1 goal: New phone, Course fee, or Family support | Decide total goal amount ₹____ | Decide monthly saving ₹____" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a small 'Emergency' folder in your notes. Write 3 situations where you will use this money." }
        ],
        quiz: {
            id: 'q_mon_4',
            question: "Emergency fund is for:",
            options: [{ id: 'a', text: "Festivals" }, { id: 'b', text: "Random shopping" }, { id: 'c', text: "Sudden urgent needs" }],
            correctOptionId: 'c'
        }
    },
    {
        id: 'mon_l5',
        title: 'Getting Paid: Bank + UPI Basics',
        duration: 15,
        content: [
            { type: 'paragraph', text: "To do freelancing work, you should be able to receive money safely. Most clients in India pay using UPI or bank transfer. You can create a UPI ID, receive money through QR, and check transaction history." },
            { type: 'video', text: "51TM2IwzzIg" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "How freelancers receive payments | UPI ID and QR basics | Checking payment history" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Open your UPI app | Find UPI ID | Find QR Code | Check Transaction History" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a sample message you can send to a client: 'Hello, please pay ₹____ to my UPI: ______. Thank you.'" }
        ],
        quiz: {
            id: 'q_mon_5',
            question: "What is a QR code used for?",
            options: [{ id: 'a', text: "To take selfies" }, { id: 'b', text: "To receive or pay money easily" }, { id: 'c', text: "To download games" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l6',
        title: 'UPI Safety & Scam Protection',
        duration: 12,
        content: [
            { type: 'paragraph', text: "Many new users get tricked by fake calls and messages. The most important rule: You enter your UPI PIN only to send money, not to receive money. If someone asks for PIN/OTP to 'receive' money, it is a scam." },
            { type: 'video', text: "MGC0r1Ou4hg" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "The golden UPI safety rules | Common scam tricks | What to do if you feel unsure" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Never share: UPI PIN, OTP, Bank password | Verify: Name shown before paying, Amount typed before confirming" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write this sentence in your notes: 'My UPI PIN is private. I never share it with anyone.'" }
        ],
        quiz: {
            id: 'q_mon_6',
            question: "A person says: 'Share your UPI PIN to receive money.' Is it true?",
            options: [{ id: 'a', text: "True" }, { id: 'b', text: "False (Scam)" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l7',
        title: 'Pricing, Quotation & Invoices',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Freelancers must price their work clearly. A simple way is to charge per task or per hour. Always confirm price before starting. A basic invoice makes you look professional and helps you track earnings." },
            { type: 'video', text: "EJY3gl0QtGw" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Simple pricing methods | How to send a quotation | What an invoice includes" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Choose one: Per task price or Per hour price | Write: 'My price for this work is ₹____.'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a sample invoice in Google Docs: Name, Service, Date, Amount, UPI ID. Take a screenshot." }
        ],
        quiz: {
            id: 'q_mon_7',
            question: "Why is an invoice useful?",
            options: [{ id: 'a', text: "It looks fancy" }, { id: 'b', text: "It helps track income and builds trust" }, { id: 'c', text: "It is only for big companies" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l8',
        title: 'Growing Legally: PAN, Tax Awareness & GST',
        duration: 10,
        content: [
            { type: 'paragraph', text: "At the beginning stage, focus on skills, payments, and saving. As your income grows, you may need to use PAN and file an ITR with help from a trusted adult. GST is usually relevant only when your annual turnover crosses ₹20 lakh." },
            { type: 'video', text: "PLACEHOLDER_VIDEO_ID" },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Why basic legal awareness matters | When to ask for help | The idea of business growth stages" },
            { type: 'heading', text: "Interactive Checklist" },
            { type: 'checklist', text: "Write: 'Right now, my focus is skill + safe payments.' | Write: 'If my income grows a lot, I will ask for tax help.'" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Talk to a parent/guardian about: 'What will we do if my freelancing income becomes big?'" }
        ],
        quiz: {
            id: 'q_mon_8',
            question: "GST is usually needed only when:",
            options: [{ id: 'a', text: "You earn ₹200" }, { id: 'b', text: "You grow into a larger business (₹20L+)" }, { id: 'c', text: "You open any app" }],
            correctOptionId: 'b'
        }
    }
];

