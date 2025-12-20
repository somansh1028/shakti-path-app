
import type { Lesson } from '../../../types';

// --- COURSE 1: ESSENTIAL OFFICE TOOLS ---
export const officeToolsLessons: Lesson[] = [
    {
        id: 'va_c1_l1', title: 'Google Docs Mastery', duration: 15,
        content: [
            { type: 'paragraph', text: "A Virtual Assistant must write professional letters and reports. Google Docs is free and works on phones. Learn to format text, add headings, and download as PDF." },
            { type: 'video', text: "1sU32Z8aE2g" }, // Learn More: Google Docs Complete (Hindi)
            { type: 'heading', text: "Action Plan" },
            { type: 'checklist', text: "Open Google Docs | Type a 1-page letter | Bold the title | Download as PDF" }
        ],
        quiz: {
            id: 'q_va_c1_1', question: "To send a document professionally, save it as...",
            options: [{ id: 'a', text: "PDF" }, { id: 'b', text: "Screenshot" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l2', title: 'Spreadsheets 101: The Grid', duration: 20,
        content: [
            { type: 'paragraph', text: "Every business uses data. Learn the basics of Rows, Columns, and Cells. This video explains Excel/Sheets from zero." },
            { type: 'video', text: "rdjg7d-0sTA" }, // Learn More: Excel for Beginners (Hindi)
            { type: 'heading', text: "Key Concepts" },
            { type: 'list', text: "Row (Horizontal) | Column (Vertical) | Cell (The box)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a sheet with 3 columns: Date, Item, Price." }
        ],
        quiz: {
            id: 'q_va_c1_2', question: "A vertical line in Excel is called...",
            options: [{ id: 'a', text: "Column" }, { id: 'b', text: "Row" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l3', title: 'Basic Formulas (Sum & Avg)', duration: 20,
        content: [
            { type: 'paragraph', text: "Don't use a calculator. Let the sheet do the math. Learn =SUM() and =AVERAGE()." },
            { type: 'video', text: "ZkQ4rV4y6T0" }, // My Support: Excel Formulas
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Enter 5 prices | Type =SUM(select cells) | Press Enter" }
        ],
        quiz: {
            id: 'q_va_c1_3', question: "Every formula starts with...",
            options: [{ id: 'a', text: "=" }, { id: 'b', text: "#" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l4', title: 'Data Cleaning', duration: 15,
        content: [
            { type: 'paragraph', text: "Clients often give messy data. Learn to remove duplicates, fix capitalization, and sort lists alphabetically." },
            { type: 'video', text: "O2G7k_l7yVk" }, // Satish Tech: Data Cleaning
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Select data | Data > Remove Duplicates | Data > Sort A-Z" }
        ],
        quiz: {
            id: 'q_va_c1_4', question: "If a name appears twice, you should...",
            options: [{ id: 'a', text: "Remove Duplicate" }, { id: 'b', text: "Delete everything" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l5', title: 'Google Forms for Surveys', duration: 15,
        content: [
            { type: 'paragraph', text: "Clients need to collect data from customers. Google Forms is the best tool. Learn to create a feedback form." },
            { type: 'video', text: "fK8O_1aEl9o" }, // Technology Gyan: Google Forms
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a form asking: Name, Email, and 'Are you happy?'" }
        ],
        quiz: {
            id: 'q_va_c1_5', question: "Google Forms responses go to...",
            options: [{ id: 'a', text: "Google Sheets" }, { id: 'b', text: "WhatsApp" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l6', title: 'PDF Tools (Merge & Split)', duration: 10,
        content: [
            { type: 'paragraph', text: "Sometimes you need to combine 3 PDFs into 1, or make a PDF smaller. Use free tools like IlovePDF." },
            { type: 'video', text: "PZgQ_6qD9NM" }, // Quick Hindi: PDF Tools
            { type: 'heading', text: "Tools" },
            { type: 'list', text: "Merge (Join files) | Compress (Make smaller) | Split (Take one page out)" }
        ],
        quiz: {
            id: 'q_va_c1_6', question: "To combine files, use...",
            options: [{ id: 'a', text: "Merge" }, { id: 'b', text: "Split" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l7', title: 'PowerPoint/Slides Basics', duration: 20,
        content: [
            { type: 'paragraph', text: "Clients ask for 'Pitch Decks'. Learn to make a simple 5-slide presentation with images and bullet points." },
            { type: 'video', text: "NtRk7_Qj1h0" }, // Learn More: PPT
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Make a slide about 'My Favorite Food' with 1 title, 3 points, and 1 image." }
        ],
        quiz: {
            id: 'q_va_c1_7', question: "A presentation consists of...",
            options: [{ id: 'a', text: "Slides" }, { id: 'b', text: "Sheets" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 2: EXECUTIVE ADMIN SUPPORT ---
export const adminSupportLessons: Lesson[] = [
    {
        id: 'va_c2_l1', title: 'Gmail Mastery & Inbox Zero', duration: 15,
        content: [
            { type: 'paragraph', text: "A VA manages the client's messy inbox. Learn to use Labels, Filters, and Starred messages to organize emails." },
            { type: 'video', text: "Xj3Wv5v6yZc" }, // Technology Gyan: Gmail Tricks
            { type: 'heading', text: "Techniques" },
            { type: 'list', text: "Label: Invoice, Urgent, Client | Filter: Auto-move newsletters to a folder" }
        ],
        quiz: {
            id: 'q_va_c2_1', question: "To organize emails, use...",
            options: [{ id: 'a', text: "Labels" }, { id: 'b', text: "Delete All" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l2', title: 'Professional Email Writing', duration: 12,
        content: [
            { type: 'paragraph', text: "Never send an email without a Subject Line. Learn formal tones (Dear Sir/Madam) vs casual tones (Hi Team)." },
            { type: 'video', text: "Eq3C_pGjI18" }, // TsMadaan: Email Etiquette
            { type: 'checklist', text: "Clear Subject Line | Salutation | Body | Call to Action | Sign-off" }
        ],
        quiz: {
            id: 'q_va_c2_2', question: "Best sign-off for business?",
            options: [{ id: 'a', text: "Regards" }, { id: 'b', text: "Bye bye" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l3', title: 'Google Calendar & Scheduling', duration: 20,
        content: [
            { type: 'paragraph', text: "You will manage the client's time. Learn to send 'Calendar Invites' with Zoom/Meet links attached." },
            { type: 'video', text: "mG14Q-U5F3Q" }, // My Support: Google Calendar
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a mock meeting invite for 'Weekly Review' on Friday at 4 PM." }
        ],
        quiz: {
            id: 'q_va_c2_3', question: "To invite someone, you need their...",
            options: [{ id: 'a', text: "Email Address" }, { id: 'b', text: "Home Address" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l4', title: 'Taking Meeting Minutes', duration: 15,
        content: [
            { type: 'paragraph', text: "In meetings, don't write everything. Write 'Decisions' and 'Action Items' (Who will do what by when)." },
            { type: 'video', text: "Xy_7_yQ_XvM" }, // Skillopedia: Meeting Minutes (English/Hindi mix)
            { type: 'heading', text: "Template" },
            { type: 'list', text: "Attendees | Key Discussion | Decisions Made | Next Steps (Action Items)" }
        ],
        quiz: {
            id: 'q_va_c2_4', question: "Minutes are...",
            options: [{ id: 'a', text: "Summary of meeting" }, { id: 'b', text: "Length of meeting" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l5', title: 'File Organization (Google Drive)', duration: 15,
        content: [
            { type: 'paragraph', text: "Never lose a file. Create a Folder structure: Year > Client > Project. Use clear names like '2024_Invoice_Dec.pdf'." },
            { type: 'video', text: "AcoNlNBtTlQ" }, // Marathi Tech: Drive (Marathi) - excellent for concept
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Create a 'Clients' folder | Create sub-folders for 2 mock clients" }
        ],
        quiz: {
            id: 'q_va_c2_5', question: "Best file name?",
            options: [{ id: 'a', text: "Invoice_Dec2024.pdf" }, { id: 'b', text: "File1.pdf" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l6', title: 'Travel Planning Basics', duration: 15,
        content: [
            { type: 'paragraph', text: "Your client says 'Book me a flight to Delhi'. You need to compare prices (MakeMyTrip/Skyscanner) and make an Itinerary PDF." },
            { type: 'video', text: "r4v2sZ3a2oU" }, // Ishan: Flight Booking
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Find 3 flights from Mumbai to Delhi. List their times and prices in a note." }
        ],
        quiz: {
            id: 'q_va_c2_6', question: "An Itinerary contains...",
            options: [{ id: 'a', text: "Flight & Hotel details" }, { id: 'b', text: "Food recipes" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 3: INTERNET RESEARCH ---
export const internetResearchLessons: Lesson[] = [
    {
        id: 'va_c3_l1', title: 'Advanced Google Search', duration: 12,
        content: [
            { type: 'paragraph', text: "Don't just search. Search smart. Use quotes \"\" for exact phrases and minus - to exclude words." },
            { type: 'video', text: "H4t1v6y_z3c" }, // Satish Tech: Google Search Tricks
            { type: 'list', text: "site:linkedin.com (Searches only LinkedIn) | filetype:pdf (Searches only PDF files)" }
        ],
        quiz: {
            id: 'q_va_c3_1', question: "To remove a word from search, use...",
            options: [{ id: 'a', text: "Minus (-)" }, { id: 'b', text: "Plus (+)" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c3_l2', title: 'Lead Generation (Finding Emails)', duration: 20,
        content: [
            { type: 'paragraph', text: "Clients need lists of businesses to contact. Learn to find 'Decision Makers' on LinkedIn and their emails." },
            { type: 'video', text: "O2G7k_l7yVk" }, // Use Data Entry video part regarding finding info
            { type: 'heading', text: "Process" },
            { type: 'list', text: "Search Company on Google | Go to 'About Us' or 'Contact' | Check LinkedIn" }
        ],
        quiz: {
            id: 'q_va_c3_2', question: "Best place to find professional profiles?",
            options: [{ id: 'a', text: "LinkedIn" }, { id: 'b', text: "TikTok" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c3_l3', title: 'Fact Checking & Sources', duration: 10,
        content: [
            { type: 'paragraph', text: "Don't send fake news. Always check the date of the article and the reputation of the website." },
            { type: 'heading', text: "Rules" },
            { type: 'list', text: "Check the date (Is it old?) | Check the domain (Is it .gov or .edu?) | Cross-verify on 2 sites" }
        ],
        quiz: {
            id: 'q_va_c3_3', question: "If an article is 5 years old...",
            options: [{ id: 'a', text: "Verify if info is still valid" }, { id: 'b', text: "Use it blindly" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c3_l4', title: 'Competitor Analysis', duration: 15,
        content: [
            { type: 'paragraph', text: "Your client wants to know what their rival is doing. Visit rival websites. Note their prices, offers, and social media posts." },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Pick 2 pizza shops in your city. Write down their cheapest pizza price and compare." }
        ],
        quiz: {
            id: 'q_va_c3_4', question: "Competitor Analysis helps...",
            options: [{ id: 'a', text: "Understand the market" }, { id: 'b', text: "Hack websites" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 4: CLIENT MANAGEMENT ---
export const clientMgmtLessons: Lesson[] = [
    {
        id: 'va_c4_l1', title: 'Proactive Attitude', duration: 10,
        content: [
            { type: 'paragraph', text: "Don't wait for orders. Suggest solutions. If a client says 'I need a flight', ask 'Do you also need a hotel?' This is being Proactive." },
            { type: 'video', text: "uG2aEh5kBvo" }, // TedX/Talk about attitude (General) or Hindi motivational
            { type: 'heading', text: "Mindset" },
            { type: 'paragraph', text: "Reactive: Waiting for instructions. Proactive: Solving problems before asked." }
        ],
        quiz: {
            id: 'q_va_c4_1', question: "If you see a mistake in the client's file...",
            options: [{ id: 'a', text: "Politely inform them" }, { id: 'b', text: "Ignore it" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c4_l2', title: 'Confidentiality & Passwords', duration: 12,
        content: [
            { type: 'paragraph', text: "You handle secrets. Never share client data. Use tools like LastPass to share passwords safely, never via WhatsApp text." },
            { type: 'heading', text: "Rules" },
            { type: 'list', text: "Use a Password Manager | Don't use public WiFi for bank work | Sign an NDA (Non-Disclosure Agreement)" }
        ],
        quiz: {
            id: 'q_va_c4_2', question: "Sharing client data with friends is...",
            options: [{ id: 'a', text: "Unprofessional & dangerous" }, { id: 'b', text: "Okay" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c4_l3', title: 'Handling Feedback', duration: 15,
        content: [
            { type: 'paragraph', text: "If a client says 'This is wrong', don't be sad. Say 'Thank you, I will fix it immediately'. Feedback makes you better." },
            { type: 'heading', text: "Reply Template" },
            { type: 'paragraph', text: "'Thank you for the feedback. I have understood the error and corrected it. Here is the new file.'" }
        ],
        quiz: {
            id: 'q_va_c4_3', question: "Feedback is...",
            options: [{ id: 'a', text: "An opportunity to improve" }, { id: 'b', text: "An insult" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c4_l4', title: 'Invoicing & Getting Paid', duration: 15,
        content: [
            { type: 'paragraph', text: "Work is useless without pay. Learn to make a simple PDF Invoice with your Name, UPI ID, Service List, and Total Amount." },
            { type: 'video', text: "tSj-s8q_2sM" }, // Generic Invoice making
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create an Invoice for ₹500 for 'Data Entry Services'." }
        ],
        quiz: {
            id: 'q_va_c4_4', question: "Always send invoice as...",
            options: [{ id: 'a', text: "PDF" }, { id: 'b', text: "Editable Word Doc" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 5: AI POWERED VA ---
export const aiVaLessons: Lesson[] = [
    {
        id: 'va_c5_l1', title: 'Writing Emails with AI', duration: 15,
        content: [
            { type: 'paragraph', text: "Use ChatGPT or Gemini to draft emails fast. Prompt: 'Write a polite email to a client asking for the missing files'." },
            { type: 'video', text: "sTeoJ_O0K7o" }, // Satish K: ChatGPT use
            { type: 'heading', text: "Try it" },
            { type: 'checklist', text: "Open AI Chat | Ask it to write a 'Leave Application' | Edit it to make it real" }
        ],
        quiz: {
            id: 'q_va_c5_1', question: "After AI writes an email...",
            options: [{ id: 'a', text: "Read and edit it" }, { id: 'b', text: "Send immediately" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c5_l2', title: 'Summarizing Long Text', duration: 10,
        content: [
            { type: 'paragraph', text: "Client sent a 10-page report? Paste it into AI and ask 'Summarize this in 5 bullet points'. Save hours of reading." },
            { type: 'heading', text: "Action" },
            { type: 'paragraph', text: "Paste a news article into AI and ask for a summary." }
        ],
        quiz: {
            id: 'q_va_c5_2', question: "AI helps you...",
            options: [{ id: 'a', text: "Read faster" }, { id: 'b', text: "Sleep more" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c5_l3', title: 'Grammar & Polish', duration: 10,
        content: [
            { type: 'paragraph', text: "Not confident in English? Write your broken sentence in AI and ask 'Fix the grammar'. It is the best teacher." },
            { type: 'heading', text: "Example" },
            { type: 'paragraph', text: "Input: 'I go market yesterday.' -> AI: 'I went to the market yesterday.'" }
        ],
        quiz: {
            id: 'q_va_c5_3', question: "AI can fix...",
            options: [{ id: 'a', text: "Grammar mistakes" }, { id: 'b', text: "Broken printer" }],
            correctOptionId: 'a'
        }
    }
];
