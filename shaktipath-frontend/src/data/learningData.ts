
import type { LearningPath, Course, Assignment, Badge } from '../types';
import { smartphoneLessons as en_sm, computerLessons as en_comp, englishLessons as en_eng, freelanceLessons as en_free, moneyLessons as en_mon } from './content/en/foundational';
import { smartphoneLessons as hi_sm, computerLessons as hi_comp, englishLessons as hi_eng, freelanceLessons as hi_free, moneyLessons as hi_mon } from './content/hi/foundational';
import { canvaLessons, whatsappLessons, reelsLessons, gbpLessons } from './content/en/digitalMarketing';
import { dataEntryLessons, researchLessons, adminLessons } from './content/en/virtualAssistant';
import { aiBasicsLessons, chatPromptingLessons, aiToolsLessons } from './content/en/aiSkills';

// --- Helpers for Metadata ---
const createAssignment = (key: string, format: string = '3 Screenshots'): Assignment => ({
    titleKey: `assignment_${key}_title`,
    descriptionKey: `assignment_${key}_desc`,
    submissionFormat: format,
    reviewCriteria: [
        { nameKey: `assignment_${key}_crit1_name`, descriptionKey: `assignment_${key}_crit1_desc`, maxScore: 40 },
        { nameKey: `assignment_${key}_crit2_name`, descriptionKey: `assignment_${key}_crit2_desc`, maxScore: 30 },
        { nameKey: `assignment_${key}_crit3_name`, descriptionKey: `assignment_${key}_crit3_desc`, maxScore: 30 },
    ]
});

const createBadge = (id: string, key: string, icon: string): Badge => ({
    id: `badge-${id}-1`,
    nameKey: `badge_${key}_name`,
    icon: icon
});

// --- CONTENT SELECTOR ---
// Currently only Foundational has Hindi translations for demo.
// Others fallback to English constants.
const getFoundationalContent = (lang: string) => {
    if (lang === 'hi') {
        return { sm: hi_sm, comp: hi_comp, eng: hi_eng, free: hi_free, mon: hi_mon };
    }
    return { sm: en_sm, comp: en_comp, eng: en_eng, free: en_free, mon: en_mon };
}

// --- DYNAMIC COURSE GENERATOR ---
export const getLearningPaths = (lang: string = 'en'): LearningPath[] => {
    const foundationalContent = getFoundationalContent(lang);

    // Foundational
    const course_smartphone: Course = { id: 'c_found_1', titleKey: 'course_smartphone_title', descriptionKey: 'course_smartphone_desc', icon: '📱', lessons: foundationalContent.sm, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };
    const course_computer: Course = { id: 'c_found_2', titleKey: 'course_computer_title', descriptionKey: 'course_computer_desc', icon: '💻', lessons: foundationalContent.comp, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '💻') };
    const course_english: Course = { id: 'c_found_3', titleKey: 'course_english_title', descriptionKey: 'course_english_desc', icon: '🗣️', lessons: foundationalContent.eng, assignment: createAssignment('foundational'), badge: createBadge('eng', 'foundational', '🗣️') };
    const course_freelance: Course = { id: 'c_found_4', titleKey: 'course_freelance_title', descriptionKey: 'course_freelance_desc', icon: '🌍', lessons: foundationalContent.free, assignment: createAssignment('foundational'), badge: createBadge('free', 'foundational', '🌍') };
    const course_money: Course = { id: 'c_found_5', titleKey: 'course_money_title', descriptionKey: 'course_money_desc', icon: '💰', lessons: foundationalContent.mon, assignment: createAssignment('foundational'), badge: createBadge('mon', 'foundational', '💰') };

    // Digital Marketing (English only for now, easily extendable)
    const canvaAssignmentObj: Assignment = {
        title: "Create 3 Social Media Posts",
        description: "Complete the final project by designing three social media posts for a fictional 'Seema's Salon'. Upload your designs as PNG or JPG files for AI review.",
        submissionFormat: "3 PNG/JPG Files",
        reviewCriteria: [
            { name: "Brand Consistency", description: "Do the posts use a consistent color scheme, font, and logo placement?", maxScore: 30 },
            { name: "Visual Appeal", description: "Are the posts visually balanced, easy to read, and attractive?", maxScore: 40 },
            { name: "Message Clarity", description: "Is the offer or message in each post clear and easy to understand?", maxScore: 30 }
        ]
    };
    const canvaBadgeObj: Badge = { id: 'badge-canva-1', name: 'Social Design Starter', icon: '🎨' };
    
    // Note: Using direct text for titles/descriptions for English content modules to match the new file structure
    const course_canva: Course = { id: 'c1', title: 'Canva for Small Business', description: 'Design social media posts that bring customers.', icon: '🎨', lessons: canvaLessons, assignment: canvaAssignmentObj, badge: canvaBadgeObj };
    const course_whatsapp: Course = { id: 'c2', title: 'WhatsApp Business for Shops', description: 'Setup a professional presence to manage orders.', icon: '💬', lessons: whatsappLessons, badge: {id: 'b2', name: 'Digital Shopkeeper', icon: '💬'} };
    const course_reels: Course = { id: 'c3', title: 'Reels/Shorts Editing with CapCut', description: 'Create engaging short videos for social media.', icon: '🎬', lessons: reelsLessons, badge: {id: 'b3', name: 'Reel Director', icon: '🎬'} };
    const course_gbp: Course = { id: 'c4', title: 'Google Business Profile Setup', description: 'Get your customers found on Google Maps & Search.', icon: '🗺️', lessons: gbpLessons, badge: {id: 'b4', name: 'Local Map Star', icon: '🗺️'} };

    // Virtual Assistant
    const vaAssignment: Assignment = {
        title: "Virtual Assistant Task",
        description: "Perform a simulated VA task. Upload screenshots of: 1. A clean spreadsheet, 2. A research summary doc, 3. A polite customer reply draft.",
        submissionFormat: "3 Screenshots",
        reviewCriteria: [
            { name: "Data Accuracy", description: "Is the spreadsheet data clean?", maxScore: 40 },
            { name: "Research Skill", description: "Is the summary accurate?", maxScore: 30 },
            { name: "Communication", description: "Is the tone polite?", maxScore: 30 }
        ]
    };
    const vaBadge: Badge = { id: 'badge-va-1', name: 'VA Pro', icon: '💼' };

    const course_data: Course = { id: 'c_va_1', title: 'Data Entry & Spreadsheets', description: 'Google Sheets basics and data cleaning.', icon: '📊', lessons: dataEntryLessons, assignment: vaAssignment, badge: vaBadge };
    const course_research: Course = { id: 'c_va_2', title: 'Online Research', description: 'Finding info and simple reporting.', icon: '🔍', lessons: researchLessons, assignment: vaAssignment, badge: vaBadge };
    const course_admin: Course = { id: 'c_va_3', title: 'Admin Support', description: 'Email, calendar, and scheduling.', icon: '📅', lessons: adminLessons, assignment: vaAssignment, badge: vaBadge };

    // AI Skills
    const aiAssignment: Assignment = {
        title: "AI Assisted Project",
        description: "Use AI to solve a problem. Upload screenshots of: 1. Your prompt to the AI, 2. The useful output from AI, 3. How you applied it.",
        submissionFormat: "3 Screenshots",
        reviewCriteria: [
            { name: "Prompt Quality", description: "Was the prompt clear?", maxScore: 40 },
            { name: "AI Utility", description: "Did the AI provide value?", maxScore: 30 },
            { name: "Application", description: "Did you use the result effectively?", maxScore: 30 }
        ]
    };
    const aiBadge: Badge = { id: 'badge-ai-1', name: 'AI Explorer', icon: '🤖' };

    const course_ai_basics: Course = { id: 'c_ai_1', title: 'AI in Simple Terms', description: 'What is AI and what it isn\'t.', icon: '🧠', lessons: aiBasicsLessons, assignment: aiAssignment, badge: aiBadge };
    const course_prompting: Course = { id: 'c_ai_2', title: 'Using AI Chatbots', description: 'Asking good questions (prompting).', icon: '💬', lessons: chatPromptingLessons, assignment: aiAssignment, badge: aiBadge };
    const course_ai_tools: Course = { id: 'c_ai_3', title: 'AI in Daily Tools', description: 'AI in Canva, Docs, and more.', icon: '🛠️', lessons: aiToolsLessons, assignment: aiAssignment, badge: aiBadge };

    // Return Paths
    // Note: We use titleKey for top-level paths to keep them translatable via en.json/hi.json, 
    // but the courses inside use the direct titles defined above for English.
    return [
        { 
            id: 'lp_found', 
            titleKey: 'path_foundational_title', 
            descriptionKey: 'path_foundational_desc', 
            icon: '🌱', 
            courses: [course_smartphone, course_computer, course_english, course_freelance, course_money] 
        },
        { 
            id: 'lp_digital_marketing', 
            titleKey: 'path_digital_marketing_title', 
            descriptionKey: 'path_digital_marketing_desc', 
            icon: '🚀', 
            courses: [course_canva, course_whatsapp, course_reels, course_gbp] 
        },
        {
            id: 'lp_va',
            titleKey: 'path_va_title',
            descriptionKey: 'path_va_desc',
            icon: '💼',
            courses: [course_data, course_research, course_admin]
        },
        {
            id: 'lp_ai',
            titleKey: 'path_ai_title',
            descriptionKey: 'path_ai_desc',
            icon: '🤖',
            courses: [course_ai_basics, course_prompting, course_ai_tools]
        },
        {
            id: 'lp_local_biz',
            titleKey: 'path_local_biz_title',
            descriptionKey: 'path_local_biz_desc',
            icon: '🏪',
            courses: [course_gbp, course_whatsapp, course_canva] 
        }
    ];
};

// Fallback for older imports if any (deprecated)
export const learningPaths = getLearningPaths('en');
