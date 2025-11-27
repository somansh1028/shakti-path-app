
import type { Lesson } from '../../../types';

// --- DATA ENTRY LESSONS ---
export const dataEntryLessons: Lesson[] = [
    {
        id: 'data_l1', title: 'What is a Spreadsheet?', duration: 10,
        content: [
            { type: 'paragraph', text: "A spreadsheet is a digital grid used to organize, calculate, and analyze data. Imagine a notebook that can do math automatically. It is the standard tool for business data—from inventory lists to financial budgets. Understanding spreadsheets is the most requested skill for entry-level office jobs." },
            { type: 'heading', text: "What you will learn" },
            { type: 'list', text: "Concept of grids | Uses of sheets" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Imagine you are a shopkeeper. Write down 3 things you would list in a sheet (e.g., Item, Price)." }
        ],
        quiz: {
            id: 'q_data_1', question: "Spreadsheet is for...",
            options: [{ id: 'a', text: "Data & Numbers" }, { id: 'b', text: "Painting" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l2', title: 'Opening Sheets', duration: 15,
        content: [
            { type: 'paragraph', text: "Google Sheets is a cloud-based spreadsheet tool. 'Cloud-based' means your files live on the internet, not just your device. This allows you to access your work from any phone or computer and ensures you never lose data if your device breaks." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Download 'Google Sheets' app | Open App | Tap '+' to create new" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Create a new sheet and name it 'My Practice Sheet'." }
        ],
        quiz: {
            id: 'q_data_2', question: "Does it save?",
            options: [{ id: 'a', text: "Auto save" }, { id: 'b', text: "Manual only" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l3', title: 'The Grid', duration: 15,
        content: [
            { type: 'paragraph', text: "Spreadsheets use a coordinate system. Vertical lines are 'Columns' (labeled A, B, C). Horizontal lines are 'Rows' (labeled 1, 2, 3). The intersection is a 'Cell' (e.g., A1, C5). Every piece of data lives in a specific cell address." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Find Column A (Vertical) | Find Row 1 (Horizontal) | Find Cell A1" }
        ],
        quiz: {
            id: 'q_data_3', question: "Vertical line is...",
            options: [{ id: 'a', text: "Column" }, { id: 'b', text: "Row" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l4', title: 'Typing Data', duration: 20,
        content: [
            { type: 'paragraph', text: "Data entry requires precision. You select a cell and type. Input can be 'Text' (Words), 'Numeric' (Values for math), or 'Formula' (Instructions)." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Tap a cell | Type text or number | Press Enter/Tick" },
            { type: 'paragraph', text: "Mini Task: Type 'Apple' in A1 and '50' in B1." }
        ],
        quiz: {
            id: 'q_data_4', question: "To change text...",
            options: [{ id: 'a', text: "Double tap" }, { id: 'b', text: "Shake phone" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l5', title: 'Resizing', duration: 15,
        content: [
            { type: 'paragraph', text: "Data doesn't always fit standard boxes. If a name is too long, it might look cut off. Resizing columns ensures all data is visible." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Tap column letter (top) | Drag edge to make wider | Double tap edge to auto-fit" }
        ],
        quiz: {
            id: 'q_data_5', question: "If text is cut...",
            options: [{ id: 'a', text: "Widen column" }, { id: 'b', text: "Delete text" }],
            correctOptionId: 'a'
        }
    }
];

// --- ONLINE RESEARCH LESSONS ---
export const researchLessons: Lesson[] = [
    {
        id: 'res_l1', title: 'Search Basics', duration: 10,
        content: [
            { type: 'paragraph', text: "Google Search is an index of the web. To find information effectively, you must speak its language: 'Keywords'. Avoid conversational sentences. Distil it to core concepts." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Use quotes for exact phrases | Use minus sign to exclude words" },
            { type: 'paragraph', text: "Task: Search for 'best digital marketing courses' -free." }
        ],
        quiz: {
            id: 'q_res_1', question: "To exclude a word, use...",
            options: [{ id: 'a', text: "Minus sign" }, { id: 'b', text: "Plus sign" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'res_l2', title: 'Keywords', duration: 15,
        content: [
            { type: 'paragraph', text: "If the front door is locked, try the window. If your first search fails, iterate with synonyms. Expanding your vocabulary expands your search results." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Think of 3 words for your topic | Try searching with synonyms" }
        ],
        quiz: {
            id: 'q_res_2', question: "Keywords help you...",
            options: [{ id: 'a', text: "Find specific info" }, { id: 'b', text: "Write emails" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'res_l3', title: 'Verifying Sources', duration: 20,
        content: [
            { type: 'paragraph', text: "The internet is full of misinformation. Verify the source's credibility. Is it a known news outlet? A government site (.gov)? A university (.edu)? Check the date." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Check the URL | Check the author | Check the date" }
        ],
        quiz: {
            id: 'q_res_3', question: "A credible source is...",
            options: [{ id: 'a', text: "Trustworthy" }, { id: 'b', text: "Funny" }],
            correctOptionId: 'a'
        }
    }
];

// --- ADMIN SUPPORT LESSONS ---
export const adminLessons: Lesson[] = [
    {
        id: 'admin_l1', title: 'Email Etiquette', duration: 15,
        content: [
            { type: 'paragraph', text: "Email is the standard for formal business communication. It requires structure: A descriptive Subject Line, a polite Salutation, a concise Body, and a professional Sign-off." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Use clear subjects | Start with 'Dear...' | End with 'Best regards'" },
            { type: 'paragraph', text: "Task: Draft a professional email to a client." }
        ],
        quiz: {
            id: 'q_admin_1', question: "Subject line should be...",
            options: [{ id: 'a', text: "Clear and concise" }, { id: 'b', text: "Empty" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'admin_l2', title: 'Calendar Scheduling', duration: 20,
        content: [
            { type: 'paragraph', text: "An admin's job is to protect the client's time. When scheduling, avoid back-and-forth emails. Offer specific slots. Always be aware of Time Zones. Use Calendar Invites." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Create event | Add guests | Set reminders" }
        ],
        quiz: {
            id: 'q_admin_2', question: "To invite people...",
            options: [{ id: 'a', text: "Add guests" }, { id: 'b', text: "Shout loud" }],
            correctOptionId: 'a'
        }
    }
];
