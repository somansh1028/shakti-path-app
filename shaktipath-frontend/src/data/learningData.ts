
import type { LearningPath, Course, Assignment, Badge, CourseMetadata } from '../types';
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

    // Smartphone Course Metadata
    const smMetadata: CourseMetadata = {
        audience: { titleKey: 'course_sm_audience_title', textKey: 'course_sm_audience_text' },
        outcomes: {
            titleKey: 'course_sm_outcomes_title',
            itemsKeys: [
                'course_sm_outcome_1', 'course_sm_outcome_2', 'course_sm_outcome_3',
                'course_sm_outcome_4', 'course_sm_outcome_5', 'course_sm_outcome_6',
                'course_sm_outcome_7'
            ]
        },
        format: {
            titleKey: 'course_sm_format_title',
            subtitleKey: 'course_sm_format_subtitle',
            itemsKeys: [
                'course_sm_format_1', 'course_sm_format_2', 'course_sm_format_3',
                'course_sm_format_4', 'course_sm_format_5'
            ]
        }
    };

    // Computer Course Metadata
    const compMetadata: CourseMetadata = {
        audience: { titleKey: 'course_comp_audience_title', textKey: 'course_comp_audience_text' },
        outcomes: {
            titleKey: 'course_comp_outcomes_title',
            itemsKeys: [
                'course_comp_outcome_1', 'course_comp_outcome_2', 'course_comp_outcome_3',
                'course_comp_outcome_4', 'course_comp_outcome_5', 'course_comp_outcome_6',
                'course_comp_outcome_7'
            ]
        },
        format: {
            titleKey: 'course_comp_format_title',
            subtitleKey: 'course_comp_format_subtitle',
            itemsKeys: [
                'course_comp_format_1', 'course_comp_format_2', 'course_comp_format_3',
                'course_comp_format_4', 'course_comp_format_5'
            ]
        }
    };

    // English Course Metadata
    const engMetadata: CourseMetadata = {
        audience: { titleKey: 'course_english_audience_title', textKey: 'course_english_audience_text' },
        outcomes: {
            titleKey: 'course_english_outcomes_title',
            itemsKeys: [
                'course_english_outcome_1', 'course_english_outcome_2', 'course_english_outcome_3',
                'course_english_outcome_4', 'course_english_outcome_5', 'course_english_outcome_6',
                'course_english_outcome_7'
            ]
        },
        format: {
            titleKey: 'course_english_format_title',
            subtitleKey: 'course_english_format_subtitle',
            itemsKeys: [
                'course_english_format_1', 'course_english_format_2', 'course_english_format_3',
                'course_english_format_4', 'course_english_format_5'
            ]
        }
    };

    // Freelancing Course Metadata
    const freelanceMetadata: CourseMetadata = {
        audience: { titleKey: 'course_freelance_audience_title', textKey: 'course_freelance_audience_text' },
        outcomes: {
            titleKey: 'course_freelance_outcomes_title',
            itemsKeys: [
                'course_freelance_outcome_1', 'course_freelance_outcome_2', 'course_freelance_outcome_3',
                'course_freelance_outcome_4', 'course_freelance_outcome_5'
            ]
        },
        format: {
            titleKey: 'course_freelance_format_title',
            subtitleKey: 'course_freelance_format_subtitle',
            itemsKeys: [
                'course_freelance_format_1', 'course_freelance_format_2', 'course_freelance_format_3',
                'course_freelance_format_4'
            ]
        }
    };

    // Money Course Metadata
    const moneyMetadata: CourseMetadata = {
        audience: { titleKey: 'course_money_audience_title', textKey: 'course_money_audience_text' },
        outcomes: {
            titleKey: 'course_money_outcomes_title',
            itemsKeys: [
                'course_money_outcome_1', 'course_money_outcome_2', 'course_money_outcome_3',
                'course_money_outcome_4', 'course_money_outcome_5', 'course_money_outcome_6'
            ]
        },
        format: {
            titleKey: 'course_money_format_title',
            subtitleKey: 'course_money_format_subtitle',
            itemsKeys: [
                'course_money_format_1', 'course_money_format_2', 'course_money_format_3',
                'course_money_format_4', 'course_money_format_5'
            ]
        }
    };

    // Freelancing Assignment
    const freelanceAssignment: Assignment = {
        titleKey: 'assignment_freelance_project_title',
        descriptionKey: 'assignment_freelance_project_desc',
        submissionFormat: "4 Screenshots",
        reviewCriteria: [
            { nameKey: 'assignment_freelance_crit1_name', descriptionKey: 'assignment_freelance_crit1_desc', maxScore: 25 },
            { nameKey: 'assignment_freelance_crit2_name', descriptionKey: 'assignment_freelance_crit2_desc', maxScore: 25 },
            { nameKey: 'assignment_freelance_crit3_name', descriptionKey: 'assignment_freelance_crit3_desc', maxScore: 25 },
            { nameKey: 'assignment_freelance_crit4_name', descriptionKey: 'assignment_freelance_crit4_desc', maxScore: 25 }
        ]
    };

    // Money Assignment
    const moneyAssignment: Assignment = {
        titleKey: 'assignment_money_title',
        descriptionKey: 'assignment_money_desc',
        submissionFormat: "4 Screenshots",
        reviewCriteria: [
            { nameKey: 'assignment_money_crit1_name', descriptionKey: 'assignment_money_crit1_desc', maxScore: 25 },
            { nameKey: 'assignment_money_crit2_name', descriptionKey: 'assignment_money_crit2_desc', maxScore: 25 },
            { nameKey: 'assignment_money_crit3_name', descriptionKey: 'assignment_money_crit3_desc', maxScore: 25 },
            { nameKey: 'assignment_money_crit4_name', descriptionKey: 'assignment_money_crit4_desc', maxScore: 25 }
        ]
    };

    // Foundational
    const course_smartphone: Course = { 
        id: 'c_found_1', 
        titleKey: 'course_smartphone_title', 
        descriptionKey: 'course_smartphone_desc', 
        icon: '📱', 
        lessons: foundationalContent.sm, 
        assignment: createAssignment('foundational'), 
        badge: createBadge('found', 'foundational', '🎓'),
        metadata: smMetadata
    };
    const course_computer: Course = { 
        id: 'c_found_2', 
        titleKey: 'course_computer_title', 
        descriptionKey: 'course_computer_desc', 
        icon: '💻', 
        lessons: foundationalContent.comp, 
        assignment: createAssignment('computer'), 
        badge: createBadge('found', 'foundational', '💻'),
        metadata: compMetadata
    };
    const course_english: Course = { 
        id: 'c_found_3', 
        titleKey: 'course_english_title', 
        descriptionKey: 'course_english_desc', 
        icon: '🗣️', 
        lessons: foundationalContent.eng, 
        assignment: createAssignment('english'), 
        badge: createBadge('eng', 'foundational', '🗣️'),
        metadata: engMetadata
    };
    const course_freelance: Course = { 
        id: 'c_found_4', 
        titleKey: 'course_freelance_title', 
        descriptionKey: 'course_freelance_desc', 
        icon: '🌍', 
        lessons: foundationalContent.free, 
        assignment: freelanceAssignment, 
        badge: createBadge('free', 'foundational', '🌍'),
        metadata: freelanceMetadata
    };
    const course_money: Course = { 
        id: 'c_found_5', 
        titleKey: 'course_money_title', 
        descriptionKey: 'course_money_desc', 
        icon: '💰', 
        lessons: foundationalContent.mon, 
        assignment: moneyAssignment, 
        badge: createBadge('mon', 'foundational', '💰'),
        metadata: moneyMetadata
    };

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
    const course_whatsapp: Course = { id: 'c2', titleKey: 'course_whatsapp_title', descriptionKey: 'course_whatsapp_desc', icon: '💬', lessons: dmContent.wa, assignment: createAssignment('wa'), badge: createBadge('wa', 'whatsapp', '💬') };
    const course_reels: Course = { id: 'c3', titleKey: 'course_reels_title', descriptionKey: 'course_reels_desc', icon: '🎬', lessons: dmContent.reels, assignment: createAssignment('cc'), badge: createBadge('cc', 'cc', '🎬') };
    const course_gbp: Course = { id: 'c4', titleKey: 'course_google_profile_title', descriptionKey: 'course_google_profile_desc', icon: '🗺️', lessons: dmContent.gbp, assignment: createAssignment('gbp'), badge: createBadge('gbp', 'gbp', '🗺️') };

    // VA
    const course_data: Course = { id: 'c_va_1', titleKey: 'course_data_entry_title', descriptionKey: 'course_data_entry_desc', icon: '📊', lessons: vaContent.data, assignment: createAssignment('va'), badge: createBadge('data', 'va', '📊') };
    const course_res: Course = { id: 'c_va_2', titleKey: 'course_research_title', descriptionKey: 'course_research_desc', icon: '🔍', lessons: vaContent.res, assignment: createAssignment('va'), badge: createBadge('res', 'va', '🔍') };
    const course_admin: Course = { id: 'c_va_3', titleKey: 'course_admin_title', descriptionKey: 'course_admin_desc', icon: '📅', lessons: vaContent.admin, assignment: createAssignment('va'), badge: createBadge('admin', 'va', '📅') };

    // AI
    const course_aib: Course = { id: 'c_ai_1', titleKey: 'course_ai_basics_title', descriptionKey: 'course_ai_basics_desc', icon: '🤖', lessons: aiContent.aib, assignment: createAssignment('ai'), badge: createBadge('ai', 'ai', '🤖') };
    const course_chat: Course = { id: 'c_ai_2', titleKey: 'course_chatbots_title', descriptionKey: 'course_chatbots_desc', icon: '💭', lessons: aiContent.chat, assignment: createAssignment('ai'), badge: createBadge('chat', 'ai', '💭') };
    const course_tools: Course = { id: 'c_ai_3', titleKey: 'course_ai_tools_title', descriptionKey: 'course_ai_tools_desc', icon: '🛠️', lessons: aiContent.tools, assignment: createAssignment('ai'), badge: createBadge('tools', 'ai', '🛠️') };

    return [
        {
            id: 'lp_found',
            titleKey: 'path_foundational_title',
            descriptionKey: 'path_foundational_desc',
            icon: '🌱',
            courses: [course_smartphone, course_computer, course_english, course_freelance, course_money],
        },
        {
            id: 'lp_digital_marketing',
            titleKey: 'path_digital_marketing_title',
            descriptionKey: 'path_digital_marketing_desc',
            icon: '📢',
            courses: [course_canva, course_whatsapp, course_reels, course_gbp],
        },
        {
            id: 'lp_va',
            titleKey: 'path_va_title',
            descriptionKey: 'path_va_desc',
            icon: '⌨️',
            courses: [course_data, course_res, course_admin],
        },
        {
            id: 'lp_local_biz',
            titleKey: 'path_local_biz_title',
            descriptionKey: 'path_local_biz_desc',
            icon: '🏘️',
            courses: [course_whatsapp, course_gbp, course_canva], // Reuse existing
        },
        {
            id: 'lp_ai',
            titleKey: 'path_ai_title',
            descriptionKey: 'path_ai_desc',
            icon: '✨',
            courses: [course_aib, course_chat, course_tools],
        },
    ];
};

export const learningPaths = getLearningPaths('en');
