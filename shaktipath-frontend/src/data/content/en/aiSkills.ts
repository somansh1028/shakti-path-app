
import type { Lesson } from '../../../types';

// --- AI BASICS LESSONS ---
export const aiBasicsLessons: Lesson[] = [
    {
        id: 'aib_l1', title: 'Magic on Phone', duration: 10,
        content: [
            { type: 'paragraph', text: "Artificial Intelligence (AI) is not future magic; it is present-day math. It is software that mimics human cognition. When your phone unlocks by recognizing your face, that is Computer Vision. When Maps routes you around traffic, that is Predictive AI." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Face unlock? That is AI. | Voice search? That is AI. | YouTube suggestions? That is AI." }
        ],
        quiz: {
            id: 'q_aib_1', question: "Is Face Unlock AI?",
            options: [{ id: 'a', text: "Yes" }, { id: 'b', text: "No" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'aib_l2', title: 'What is AI?', duration: 15,
        content: [
            { type: 'paragraph', text: "Traditional computers follow explicit rules ('If A, do B'). AI uses 'Machine Learning' to find patterns in data. You show it a million photos of cats, and it learns what a cat 'looks' like. It is a prediction machine." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "It is computer code | It learns from examples | It can see, hear, and write" }
        ],
        quiz: {
            id: 'q_aib_2', question: "AI is...",
            options: [{ id: 'a', text: "Software" }, { id: 'b', text: "A person" }],
            correctOptionId: 'a'
        }
    }
];

// --- PROMPT ENGINEERING LESSONS ---
export const chatPromptingLessons: Lesson[] = [
    {
        id: 'chat_l1', title: 'Prompting 101', duration: 15,
        content: [
            { type: 'paragraph', text: "Chatting with AI is a skill called 'Prompt Engineering'. Think of the AI as a very smart but literal intern. If you say 'Write an email', it will write a generic one. If you say 'Write a polite email to a angry client', it will write a perfect one. The secret is: Context + Task + Tone." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Be specific | Give examples | Ask for format" }
        ],
        quiz: {
            id: 'q_chat_1', question: "Better prompt?",
            options: [{ id: 'a', text: "Write a short email" }, { id: 'b', text: "Write stuff" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'chat_l2', title: 'Context Setting', duration: 15,
        content: [
            { type: 'paragraph', text: "You can assign a 'Persona' to the AI. Telling it 'Act as a Senior Marketing Manager' or 'Act as a Primary School Teacher' drastically changes its output. The AI accesses different parts of its training data to match the vocabulary and expertise of the role." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Tell AI: 'You are a teacher' | Explain the situation" }
        ],
        quiz: {
            id: 'q_chat_2', question: "Context helps AI...",
            options: [{ id: 'a', text: "Give better answers" }, { id: 'b', text: "Run faster" }],
            correctOptionId: 'a'
        }
    }
];

// --- AI TOOLS LESSONS ---
export const aiToolsLessons: Lesson[] = [
    {
        id: 'tool_l1', title: 'AI in Docs', duration: 15,
        content: [
            { type: 'paragraph', text: "Writing is being revolutionized. Google Docs now features 'Help me write'. You can type a rough bullet list of ideas, and the AI will expand it into a polished formal letter. It conquers the 'Blank Page Syndrome'." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Use 'Help me write' | Rephrase sentences" }
        ],
        quiz: {
            id: 'q_tool_1', question: "AI in Docs helps...",
            options: [{ id: 'a', text: "Write text" }, { id: 'b', text: "Cook" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'tool_l2', title: 'AI in Sheets', duration: 20,
        content: [
            { type: 'paragraph', text: "Spreadsheet formulas are complex languages. AI acts as a translator. In Google Sheets, you can simply ask 'Write a formula to sum column A if column B says Paid'. The AI writes the code for you." },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Ask 'Help me organize' | Generate formulas" }
        ],
        quiz: {
            id: 'q_tool_2', question: "AI can write formulas?",
            options: [{ id: 'a', text: "Yes" }, { id: 'b', text: "No" }],
            correctOptionId: 'a'
        }
    }
];
