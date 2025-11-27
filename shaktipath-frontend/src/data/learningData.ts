
import type { LearningPath, Course, Assignment, Badge } from '../types';
import { smartphoneLessons as en_sm, computerLessons as en_comp, englishLessons as en_eng, freelanceLessons as en_free, moneyLessons as en_mon } from './content/en/foundational';
import { smartphoneLessons as hi_sm, computerLessons as hi_comp, englishLessons as hi_eng, freelanceLessons as hi_free, moneyLessons as hi_mon } from './content/hi/foundational';
import { smartphoneLessons as mr_sm, computerLessons as mr_comp, englishLessons as mr_eng, freelanceLessons as mr_free, moneyLessons as mr_mon } from './content/mr/foundational';

import { canvaLessons as en_canva, whatsappLessons as en_wa, reelsLessons as en_reels, gbpLessons as en_gbp } from './content/en/digitalMarketing';
import { canvaLessons as mr_canva, whatsappLessons as mr_wa, reelsLessons as mr_reels, gbpLessons as mr_gbp } from './content/mr/digitalMarketing';

import { dataEntryLessons as en_data, researchLessons as en_res, adminLessons as en_admin } from './content/en/virtualAssistant';
import { dataEntryLessons as mr_data, researchLessons as mr_res, adminLessons as mr_admin } from './content/mr/virtualAssistant';

import { aiBasicsLessons as en_aib, chatPromptingLessons as en_chat, aiToolsLessons as en_tools } from './content/en/aiSkills';
import { aiBasicsLessons as mr_aib, chatPromptingLessons as mr_chat, aiToolsLessons as mr_tools } from './content/mr/aiSkills';


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
const getFoundationalContent = (lang: string) => {
    if (lang === 'hi') return { sm: hi_sm, comp: hi_comp, eng: hi_eng, free: hi_free, mon: hi_mon };
    if (lang === 'mr') return { sm: mr_sm, comp: mr_comp, eng: mr_eng, free: mr_free, mon: mr_mon };
    return { sm: en_sm, comp: en_comp, eng: en_eng, free: en_free, mon: en_mon };
}

const getDigitalMarketingContent = (lang: string) => {
    if (lang === 'mr') return { canva: mr_canva, wa: mr_wa, reels: mr_reels, gbp: mr_gbp };
    // Fallback to English for Hindi for now (or add Hindi files later)
    return { canva: en_canva, wa: en_wa, reels: en_reels, gbp: en_gbp };
}

const getVAContent = (lang: string) => {
    if (lang === 'mr') return { data: mr_data, res: mr_res, admin: mr_admin };
    return { data: en_data, res: en_res, admin: en_admin };
}

const getAIContent = (lang: string) => {
    if (lang === 'mr') return { aib: mr_aib, chat: mr_chat, tools: mr_tools };
    return { aib: en_aib, chat: en_chat, tools: en_tools };
}

// --- DYNAMIC COURSE GENERATOR ---
export const getLearningPaths = (lang: string = 'en'): LearningPath[] => {
    const foundationalContent = getFoundationalContent(lang);
    const dmContent = getDigitalMarketingContent(lang);
    const vaContent = getVAContent(lang);
    const aiContent = getAIContent(lang);

    // Foundational
    const course_smartphone: Course = { id: 'c_found_1', titleKey: 'course_smartphone_title', descriptionKey: 'course_smartphone_desc', icon: '📱', lessons: foundationalContent.sm, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };
    const course_computer: Course = { id: 'c_found_2', titleKey: 'course_computer_title', descriptionKey: 'course_computer_desc', icon: '💻', lessons: foundationalContent.comp, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '💻') };
    const course_english: Course = { id: 'c_found_3', titleKey: 'course_english_title', descriptionKey: 'course_english_desc', icon: '🗣️', lessons: foundationalContent.eng, assignment: createAssignment('foundational'), badge: createBadge('eng', 'foundational', '🗣️') };
    const course_freelance: Course = { id: 'c_found_4', titleKey: 'course_freelance_title', descriptionKey: 'course_freelance_desc', icon: '🌍', lessons: foundationalContent.free, assignment: createAssignment('foundational'), badge: createBadge('free', 'foundational', '🌍') };
    const course_money: Course = { id: 'c_found_5', titleKey: 'course_money_title', descriptionKey: 'course_money_desc', icon: '💰', lessons: foundationalContent.mon, assignment: createAssignment('foundational'), badge: createBadge('mon', 'foundational', '💰') };

    // Digital Marketing
    const canvaAssignmentObj: Assignment = {
        titleKey: 'assignment_canva_title',
        descriptionKey: 'assignment_canva_desc',
        submissionFormat: lang === 'mr' ? "3 फाइल्स" : "3 Files",
        reviewCriteria: [
            { nameKey: 'assignment_criteria_1_name', descriptionKey: 'assignment_criteria_1_desc', maxScore: 30 },
            { nameKey: 'assignment_criteria_2_name', descriptionKey: 'assignment_criteria_2_desc', maxScore: 40 },
            { nameKey: 'assignment_criteria_3_name', descriptionKey: 'assignment_criteria_3_desc', maxScore: 30 }
        ]
    };
    const canvaBadgeObj: Badge = { id: 'badge-canva-1', nameKey: 'badge_canva_name', icon: '🎨' };
    
    const course_canva: Course = { id: 'c1', titleKey: 'course_canva_title', descriptionKey: 'course_canva_desc', icon: '🎨', lessons: dmContent.canva, assignment: canvaAssignmentObj, badge: canvaBadgeObj };
    const course_whatsapp: Course = { id: 'c2', titleKey: 'course_whatsapp_title', descriptionKey: 'course_whatsapp_desc', icon: '💬', lessons: dmContent.wa, badge: {id: 'b2', nameKey: 'badge_whatsapp_name', icon: '💬'} };
    const course_reels: Course = { id: 'c3', titleKey: 'course_reels_title', descriptionKey: 'course_reels_desc', icon: '🎬', lessons: dmContent.reels, badge: {id: 'b3', nameKey: 'badge_cc_name', icon: '🎬'} };
    const course_gbp: Course = { id: 'c4', titleKey: 'course_google_profile_title', descriptionKey: 'course_google_profile_desc', icon: '🗺️', lessons: dmContent.gbp, badge: {id: 'b4', nameKey: 'badge_gbp_name', icon: '🗺️'} };

    // Virtual Assistant
    const vaAssignment: Assignment = {
        titleKey: 'assignment_va_title',
        descriptionKey: 'assignment_va_desc',
        submissionFormat: "3 Screenshots",
        reviewCriteria: [
            { nameKey: 'assignment_va_crit1_name', descriptionKey: 'assignment_va_crit1_desc', maxScore: 40 },
            { nameKey: 'assignment_va_crit2_name', descriptionKey: 'assignment_va_crit2_desc', maxScore: 30 },
            { nameKey: 'assignment_va_crit3_name', descriptionKey: 'assignment_va_crit3_desc', maxScore: 30 }
        ]
    };
    const vaBadge: Badge = { id: 'badge-va-1', nameKey: 'badge_va_name', icon: '💼' };

    const course_data: Course = { id: 'c_va_1', titleKey: 'course_data_entry_title', descriptionKey: 'course_data_entry_desc', icon: '📊', lessons: vaContent.data, assignment: vaAssignment, badge: vaBadge };
    const course_research: Course = { id: 'c_va_2', titleKey: 'course_research_title', descriptionKey: 'course_research_desc', icon: '🔍', lessons: vaContent.res, assignment: vaAssignment, badge: vaBadge };
    const course_admin: Course = { id: 'c_va_3', titleKey: 'course_admin_title', descriptionKey: 'course_admin_desc', icon: '📅', lessons: vaContent.admin, assignment: vaAssignment, badge: vaBadge };

    // AI Skills
    const aiAssignment: Assignment = {
        titleKey: 'assignment_ai_title',
        descriptionKey: 'assignment_ai_desc',
        submissionFormat: "3 Screenshots",
        reviewCriteria: [
            { nameKey: 'assignment_ai_crit1_name', descriptionKey: 'assignment_ai_crit1_desc', maxScore: 40 },
            { nameKey: 'assignment_ai_crit2_name', descriptionKey: 'assignment_ai_crit2_desc', maxScore: 30 },
            { nameKey: 'assignment_ai_crit3_name', descriptionKey: 'assignment_ai_crit3_desc', maxScore: 30 }
        ]
    };
    const aiBadge: Badge = { id: 'badge-ai-1', nameKey: 'badge_ai_name', icon: '🤖' };

    const course_ai_basics: Course = { id: 'c_ai_1', titleKey: 'course_ai_basics_title', descriptionKey: 'course_ai_basics_desc', icon: '🧠', lessons: aiContent.aib, assignment: aiAssignment, badge: aiBadge };
    const course_prompting: Course = { id: 'c_ai_2', titleKey: 'course_chatbots_title', descriptionKey: 'course_chatbots_desc', icon: '💬', lessons: aiContent.chat, assignment: aiAssignment, badge: aiBadge };
    const course_ai_tools: Course = { id: 'c_ai_3', titleKey: 'course_ai_tools_title', descriptionKey: 'course_ai_tools_desc', icon: '🛠️', lessons: aiContent.tools, assignment: aiAssignment, badge: aiBadge };

    // Return Paths
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

export const learningPaths = getLearningPaths('en');
