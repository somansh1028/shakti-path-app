
import type { Lesson } from '../../../types';

export const contentWritingLessons: Lesson[] = [
    {
        id: 'cw_l1',
        title: 'What is Content Writing?',
        duration: 10,
        content: [
            { type: 'paragraph', text: "Content writing is not like writing an essay for school. In school, you write to get marks. In content writing, you write to help a business sell or inform. It must be simple, clear, and useful to the reader." },
            { type: 'video', text: "Zp_RWLJe5zY" },           
            { type: 'heading', text: "The Core Difference" },
            { type: 'list', text: "School: 'The nutritious benefits of the apple fruit.' (Formal) | Content: 'An apple a day keeps the doctor away.' (Conversational)" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write a 3-line introduction about your favorite local food spot. Don't use big words. Write as if you are telling a friend." }
        ],
        quiz: {
            id: 'q_cw_1',
            question: "Content writing is meant to...",
            options: [{ id: 'a', text: "Impress the teacher" }, { id: 'b', text: "Inform or Sell to a reader" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l2',
        title: 'The Golden Rule: Clarity',
        duration: 15,
        content: [
            { type: 'paragraph', text: "The internet is busy. People don't read; they scan. If your sentences are long and hard, they will leave. Use the K.I.S.S. rule: Keep It Simple, Stupid. Use short words ('use' instead of 'utilize', 'buy' instead of 'purchase')." },
            { type: 'video', text: "kUWTHt6fNOo" },
            { type: 'heading', text: "Example" },
            { type: 'paragraph', text: "Bad: 'We provide facilitation of food consumption solutions.' -> Good: 'We deliver food.'" },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Take a long sentence | Cut out extra words (very, really, just) | Make it short" }
        ],
        quiz: {
            id: 'q_cw_2',
            question: "Which sentence is better for the web?",
            options: [{ id: 'a', text: "Acquire our products immediately." }, { id: 'b', text: "Buy now." }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l3',
        title: 'Headlines & Hooks',
        duration: 20,
        content: [
            { type: 'paragraph', text: "80% of people only read the headline. If the headline is boring, the article dies. A 'Hook' stops them from scrolling. Use Numbers ('5 ways to...'), Questions ('Are you making this mistake?'), or 'How-to' guides." },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Write 3 headlines for a YouTube video about 'Making Tea' | Use a Number | Use a Question | Use 'How To'" },
            { type: 'paragraph', text: "Example: 'The Secret Ingredient for Perfect Chai' vs 'How to make tea'." }
        ],
        quiz: {
            id: 'q_cw_3',
            question: "What is the job of a headline?",
            options: [{ id: 'a', text: "To explain everything" }, { id: 'b', text: "To make them click/read" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l4',
        title: 'Social Media Captions',
        duration: 15,
        content: [
            { type: 'paragraph', text: "On Instagram or Facebook, you are selling a feeling. Structure your caption: 1. Hook (First line must be catchy), 2. Value/Story (Why should they care?), 3. CTA (Call to Action - tell them what to do)." },
            { type: 'video', text: "fC9sbrN33To" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write a caption for a photo of a handmade Saree. Hook: 'Look elegant in seconds.' CTA: 'DM for price.'" }
        ],
        quiz: {
            id: 'q_cw_4',
            question: "CTA stands for...",
            options: [{ id: 'a', text: "Call To Action" }, { id: 'b', text: "Call The Aunt" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cw_l5',
        title: 'Writing for the Web (Blogs)',
        duration: 20,
        content: [
            { type: 'paragraph', text: "When writing articles or blogs, structure is king. Use Headings (H1, H2) to break up text. Use Bullet points for lists. Keep paragraphs short (2-3 lines max). No one likes a wall of text." },
            { type: 'video', text: "t29PYnr0le" },
            { type: 'video', text: "Qf-lW5AnTVU" },
            { type: 'video', text: "-SeN8HdroDE" },
            { type: 'heading', text: "Action" },
            { type: 'checklist', text: "Create an outline for '5 Benefits of Yoga' | Write the H1 (Title) | Write 5 H2 subheadings" }
        ],
        quiz: {
            id: 'q_cw_5',
            question: "Long paragraphs are...",
            options: [{ id: 'a', text: "Good for the web" }, { id: 'b', text: "Hard to read on phones" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l6',
        title: 'The Art of Editing',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Your first draft is always messy. That is okay. Writing is creating; Editing is cleaning. Read your text ALOUD. If you stumble, the reader will stumble. Fix it. Remove 'fluff' words." },
            { type: 'video', text: "mqEAg7ndtng" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Take an old email or message you wrote. Rewrite it to be 50% shorter but clearer." }
        ],
        quiz: {
            id: 'q_cw_6',
            question: "Best way to find mistakes?",
            options: [{ id: 'a', text: "Read it aloud" }, { id: 'b', text: "Read it fast" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cw_l7',
        title: 'Writing with AI',
        duration: 15,
        content: [
            { type: 'paragraph', text: "AI (like ChatGPT) is your assistant, not your replacement. Use it to brainstorm ideas ('Give me 10 blog topics about Sarees') or fix grammar. Do not copy-paste directly; add your human touch and local examples." },
            { type: 'video', text: "h9y2AJG64jg" },
            { type: 'heading', text: "Try it now" },
            { type: 'checklist', text: "Ask AI for 5 blog ideas | Pick one | Write the first paragraph yourself" }
        ],
        quiz: {
            id: 'q_cw_7',
            question: "AI should be used to...",
            options: [{ id: 'a', text: "Do all the work" }, { id: 'b', text: "Brainstorm and assist" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l8',
        title: 'Building a Portfolio',
        duration: 15,
        content: [
            { type: 'paragraph', text: "Clients don't care about degrees; they care about samples. You don't need a real job to have samples. Write 5 mock articles/posts for imaginary brands. Put them in a Google Folder. That is your portfolio." },
            { type: 'video', text: "LjGsFfVk-Jk" },
            { type: 'heading', text: "Mini Task" },
            { type: 'paragraph', text: "Write a 'Service Description' for yourself. E.g., 'I write engaging Instagram posts for small businesses. 10 posts for ₹500.'" }
        ],
        quiz: {
            id: 'q_cw_8',
            question: "A portfolio shows...",
            options: [{ id: 'a', text: "Your age" }, { id: 'b', text: "Your past work samples" }],
            correctOptionId: 'b'
        }
    }
];
