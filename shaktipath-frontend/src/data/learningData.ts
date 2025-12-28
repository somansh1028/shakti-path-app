
import type { LearningPath, Course, Assignment, Badge, CourseMetadata } from '../types';
import { smartphoneLessons as en_sm, computerLessons as en_comp, englishLessons as en_eng, freelanceLessons as en_free, moneyLessons as en_mon } from './content/en/foundational';
import { smartphoneLessons as hi_sm, computerLessons as hi_comp, englishLessons as hi_eng, freelanceLessons as hi_free, moneyLessons as hi_mon } from './content/hi/foundational';
import { smartphoneLessons as mr_sm, computerLessons as mr_comp, englishLessons as mr_eng, freelanceLessons as mr_free, moneyLessons as mr_mon } from './content/mr/foundational';

import { contentCreationLessons as en_cc_biz, canvaLessons as en_canva, whatsappLessons as en_wa, reelsLessons as en_reels, gbpLessons as en_gbp } from './content/en/digitalMarketing';
// Fix: Import from the newly created file
import { contentCreationLessons as hi_cc_biz } from './content/hi/digitalMarketing';
import { contentCreationLessons as mr_cc_biz, canvaLessons as mr_canva, whatsappLessons as mr_wa, reelsLessons as mr_reels, gbpLessons as mr_gbp } from './content/mr/digitalMarketing';

import { contentWritingLessons as en_cw } from './content/en/contentWriting';
import { contentWritingLessons as mr_cw } from './content/mr/contentWriting';
// Hindi Import Placeholder
import { contentWritingLessons as hi_cw } from './content/hi/contentWriting';

// --- NEW VA IMPORTS (Correctly mapping to the new files) ---
import {
    officeToolsLessons as en_office,
    adminSupportLessons as en_admin,
    internetResearchLessons as en_res,
    clientMgmtLessons as en_client,
    aiVaLessons as en_aiva
} from './content/en/virtualAssistant';

import {
    dataEntryLessons as mr_office,
    adminLessons as mr_admin,
    researchLessons as mr_res,
    adminLessons_c4 as mr_client,
    adminLessons_c5 as mr_aiva
} from './content/mr/virtualAssistant';

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
    if (lang === 'mr') return { cc_biz: mr_cc_biz, canva: mr_canva, wa: mr_wa, reels: mr_reels, gbp: mr_gbp };
    // Fallback to English/Hindi mix if needed
    if (lang === 'hi') return { cc_biz: hi_cc_biz, canva: en_canva, wa: en_wa, reels: en_reels, gbp: en_gbp };
    return { cc_biz: en_cc_biz, canva: en_canva, wa: en_wa, reels: en_reels, gbp: en_gbp };
}

const getContentWritingContent = (lang: string) => {
    if (lang === 'mr') return { cw: mr_cw };
    if (lang === 'hi') return { cw: hi_cw };
    return { cw: en_cw };
}

// Updated VA Content Selector to handle 5 courses
const getVAContent = (lang: string) => {
    if (lang === 'mr') return {
        office: mr_office,
        admin: mr_admin,
        res: mr_res,
        client: mr_client,
        aiva: mr_aiva
    };
    // Default to English (and Hindi fallback for now)
    return {
        office: en_office,
        admin: en_admin,
        res: en_res,
        client: en_client,
        aiva: en_aiva
    };
}

const getAIContent = (lang: string) => {
    if (lang === 'mr') return { aib: mr_aib, chat: mr_chat, tools: mr_tools };
    return { aib: en_aib, chat: en_chat, tools: en_tools };
}

// --- DYNAMIC COURSE GENERATOR ---
export const getLearningPaths = (lang: string = 'en'): LearningPath[] => {
    const foundationalContent = getFoundationalContent(lang);
    const dmContent = getDigitalMarketingContent(lang);
    const cwContent = getContentWritingContent(lang);
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

    // 2. Digital Marketing
const ccMetadata: CourseMetadata = {
    audience: { titleKey: 'course_cc_audience_title', textKey: 'course_cc_audience_text' },
    outcomes: { titleKey: 'course_cc_outcomes_title', itemsKeys: ['course_cc_outcomes_1', 'course_cc_outcomes_2', 'course_cc_outcomes_3', 'course_cc_outcomes_4', 'course_cc_outcomes_5'] },
    format: { titleKey: 'course_cc_format_title', itemsKeys: ['course_cc_format_1', 'course_cc_format_2', 'course_cc_format_3'] }
};

const canvaMetadata: CourseMetadata = {
    audience: { titleKey: 'course_canva_audience_title', textKey: 'course_canva_audience_text' },
    outcomes: { titleKey: 'course_canva_outcomes_title', itemsKeys: ['course_canva_outcomes_1', 'course_canva_outcomes_2', 'course_canva_outcomes_3', 'course_canva_outcomes_4', 'course_canva_outcomes_5'] },
    format: { titleKey: 'course_canva_format_title', itemsKeys: ['course_canva_format_1', 'course_canva_format_2', 'course_canva_format_3'] }
};

const waMetadata: CourseMetadata = {
    audience: { titleKey: 'course_wa_audience_title', textKey: 'course_wa_audience_text' },
    outcomes: { titleKey: 'course_wa_outcomes_title', itemsKeys: ['course_wa_outcomes_1', 'course_wa_outcomes_2', 'course_wa_outcomes_3', 'course_wa_outcomes_4', 'course_wa_outcomes_5'] },
    format: { titleKey: 'course_wa_format_title', itemsKeys: ['course_wa_format_1', 'course_wa_format_2', 'course_wa_format_3'] }
};

const reelsMetadata: CourseMetadata = {
    audience: { titleKey: 'course_reels_audience_title', textKey: 'course_reels_audience_text' },
    outcomes: { titleKey: 'course_reels_outcomes_title', itemsKeys: ['course_reels_outcomes_1', 'course_reels_outcomes_2', 'course_reels_outcomes_3', 'course_reels_outcomes_4', 'course_reels_outcomes_5'] },
    format: { titleKey: 'course_reels_format_title', itemsKeys: ['course_reels_format_1', 'course_reels_format_2', 'course_reels_format_3'] }
};

const gbpMetadata: CourseMetadata = {
    audience: { titleKey: 'course_gbp_audience_title', textKey: 'course_gbp_audience_text' },
    outcomes: { titleKey: 'course_gbp_outcomes_title', itemsKeys: ['course_gbp_outcomes_1', 'course_gbp_outcomes_2', 'course_gbp_outcomes_3', 'course_gbp_outcomes_4', 'course_gbp_outcomes_5'] },
    format: { titleKey: 'course_gbp_format_title', itemsKeys: ['course_gbp_format_1', 'course_gbp_format_2', 'course_gbp_format_3'] }
};
    
    // --- VA COURSE METADATA ---
    const vaToolsMetadata: CourseMetadata = {
        audience: { titleKey: 'course_va_tools_audience_title', textKey: 'course_va_tools_audience_text' },
        outcomes: {
            titleKey: 'course_va_tools_outcomes_title',
            itemsKeys: [
                'course_va_tools_outcome_1', 'course_va_tools_outcome_2', 'course_va_tools_outcome_3',
                'course_va_tools_outcome_4', 'course_va_tools_outcome_5', 'course_va_tools_outcome_6'
            ]
        },
        format: {
            titleKey: 'course_va_tools_format_title',
            subtitleKey: 'course_va_tools_format_subtitle',
            itemsKeys: [
                'course_va_tools_format_1', 'course_va_tools_format_2', 'course_va_tools_format_3'
            ]
        }
    };

    const vaAdminMetadata: CourseMetadata = {
        audience: { titleKey: 'course_va_admin_audience_title', textKey: 'course_va_admin_audience_text' },
        outcomes: {
            titleKey: 'course_va_admin_outcomes_title',
            itemsKeys: [
                'course_va_admin_outcome_1', 'course_va_admin_outcome_2', 'course_va_admin_outcome_3',
                'course_va_admin_outcome_4', 'course_va_admin_outcome_5', 'course_va_admin_outcome_6'
            ]
        },
        format: {
            titleKey: 'course_va_admin_format_title',
            subtitleKey: 'course_va_admin_format_subtitle',
            itemsKeys: [
                'course_va_admin_format_1', 'course_va_admin_format_2', 'course_va_admin_format_3'
            ]
        }
    };

    const vaResMetadata: CourseMetadata = {
        audience: { titleKey: 'course_va_res_audience_title', textKey: 'course_va_res_audience_text' },
        outcomes: {
            titleKey: 'course_va_res_outcomes_title',
            itemsKeys: [
                'course_va_res_outcome_1', 'course_va_res_outcome_2', 'course_va_res_outcome_3',
                'course_va_res_outcome_4', 'course_va_res_outcome_5'
            ]
        },
        format: {
            titleKey: 'course_va_res_format_title',
            subtitleKey: 'course_va_res_format_subtitle',
            itemsKeys: [
                'course_va_res_format_1', 'course_va_res_format_2', 'course_va_res_format_3'
            ]
        }
    };

    const vaClientMetadata: CourseMetadata = {
        audience: { titleKey: 'course_va_client_audience_title', textKey: 'course_va_client_audience_text' },
        outcomes: {
            titleKey: 'course_va_client_outcomes_title',
            itemsKeys: [
                'course_va_client_outcome_1', 'course_va_client_outcome_2', 'course_va_client_outcome_3',
                'course_va_client_outcome_4', 'course_va_client_outcome_5'
            ]
        },
        format: {
            titleKey: 'course_va_client_format_title',
            subtitleKey: 'course_va_client_format_subtitle',
            itemsKeys: [
                'course_va_client_format_1', 'course_va_client_format_2', 'course_va_client_format_3'
            ]
        }
    };

    const vaAiMetadata: CourseMetadata = {
        audience: { titleKey: 'course_va_ai_audience_title', textKey: 'course_va_ai_audience_text' },
        outcomes: {
            titleKey: 'course_va_ai_outcomes_title',
            itemsKeys: [
                'course_va_ai_outcome_1', 'course_va_ai_outcome_2', 'course_va_ai_outcome_3',
                'course_va_ai_outcome_4'
            ]
        },
        format: {
            titleKey: 'course_va_ai_format_title',
            subtitleKey: 'course_va_ai_format_subtitle',
            itemsKeys: [
                'course_va_ai_format_1', 'course_va_ai_format_2', 'course_va_ai_format_3'
            ]
        }
    };

// 4. Content Writing Metadata
    const cwMetadata: CourseMetadata = {
        audience: { titleKey: 'course_cw_audience_title', textKey: 'course_cw_audience_text' },
        outcomes: { titleKey: 'course_cw_outcomes_title', itemsKeys: ['course_cw_outcome_1', 'course_cw_outcome_2', 'course_cw_outcome_3', 'course_cw_outcome_4', 'course_cw_outcome_5'] },
        format: { titleKey: 'course_cw_format_title', itemsKeys: ['course_cw_format_1', 'course_cw_format_2', 'course_cw_format_3'] }
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
            { nameKey: 'assignment_canva_crit1_name', descriptionKey: 'assignment_canva_crit1_desc', maxScore: 30 },
            { nameKey: 'assignment_canva_crit2_name', descriptionKey: 'assignment_canva_crit2_desc', maxScore: 40 },
            { nameKey: 'assignment_canva_crit3_name', descriptionKey: 'assignment_canva_crit3_desc', maxScore: 30 }
        ]
    };
    const canvaBadgeObj: Badge = { id: 'badge-canva-1', nameKey: 'badge_canva_name', icon: '🎨' };
    
        // Content Writing Assignment
    const cwAssignment: Assignment = {
        titleKey: 'assignment_cw_title',
        descriptionKey: 'assignment_cw_desc',
        submissionFormat: "1 Document (PDF/Image)",
        reviewCriteria: [
            { nameKey: 'assignment_cw_crit1_name', descriptionKey: 'assignment_cw_crit1_desc', maxScore: 40 },
            { nameKey: 'assignment_cw_crit2_name', descriptionKey: 'assignment_cw_crit2_desc', maxScore: 30 },
            { nameKey: 'assignment_cw_crit3_name', descriptionKey: 'assignment_cw_crit3_desc', maxScore: 30 }
        ]
    }; 

    // New Content Creation Course
    const course_content_creation: Course = {
        id: 'c_cc_1',
        titleKey: 'course_content_creation_title',
        descriptionKey: 'course_content_creation_desc',
        icon: '📝',
        lessons: dmContent.cc_biz,
        assignment: createAssignment('content_creation', '4 Images'),
        badge: createBadge('cc_biz', 'content_creation', '📝'),
        metadata: ccMetadata
    };

        const course_canva: Course = { 
        id: 'c1', 
        titleKey: 'course_canva_title', 
        descriptionKey: 'course_canva_desc', 
        icon: '🎨', 
        lessons: dmContent.canva, 
        assignment: canvaAssignmentObj, 
        badge: canvaBadgeObj,
        metadata: canvaMetadata
    };
    
    const course_whatsapp: Course = { 
        id: 'c2', 
        titleKey: 'course_whatsapp_title', 
        descriptionKey: 'course_whatsapp_desc', 
        icon: '💬', 
        lessons: dmContent.wa, 
        assignment: createAssignment('wa'), 
        badge: createBadge('wa', 'whatsapp', '💬'),
        metadata: waMetadata
    };
    
    const course_reels: Course = { 
        id: 'c3', 
        titleKey: 'course_reels_title', 
        descriptionKey: 'course_reels_desc', 
        icon: '🎬', 
        lessons: dmContent.reels, 
        assignment: createAssignment('cc'), 
        badge: createBadge('cc', 'cc', '🎬'),
        metadata: reelsMetadata
    };
    
    const course_gbp: Course = { 
        id: 'c4', 
        titleKey: 'course_google_profile_title', 
        descriptionKey: 'course_google_profile_desc', 
        icon: '🗺️', 
        lessons: dmContent.gbp, 
        assignment: createAssignment('gbp'), 
        badge: createBadge('gbp', 'gbp', '🗺️'),
        metadata: gbpMetadata
    };

    // Content Writing Course
    const course_cw: Course = {
        id: 'c_cw_1',
        titleKey: 'course_cw_title',
        descriptionKey: 'course_cw_desc',
        icon: '✍️',
        lessons: cwContent.cw,
        assignment: cwAssignment,
        badge: createBadge('cw', 'cw', '✍️'),
        metadata: cwMetadata
    };

    // --- NEW VIRTUAL ASSISTANT COURSES (5 Distinct Courses) ---
    const course_va_tools: Course = { 
        id: 'c_va_1', 
        titleKey: 'course_data_entry_title', 
        descriptionKey: 'course_data_entry_desc', 
        icon: '📊', 
        lessons: vaContent.office, 
        assignment: createAssignment('va', '1 PDF'), 
        badge: createBadge('data', 'va', '📊'),
        metadata: vaToolsMetadata
    };
    const course_va_admin: Course = { 
        id: 'c_va_2', 
        titleKey: 'course_admin_title', 
        descriptionKey: 'course_admin_desc', 
        icon: '📅', 
        lessons: vaContent.admin, 
        assignment: createAssignment('va', '1 Doc'), 
        badge: createBadge('admin', 'va', '📅'),
        metadata: vaAdminMetadata
    };
    const course_va_research: Course = { 
        id: 'c_va_3', 
        titleKey: 'course_research_title', 
        descriptionKey: 'course_research_desc', 
        icon: '🔍', 
        lessons: vaContent.res, 
        assignment: createAssignment('va', '1 Sheet'), 
        badge: createBadge('res', 'va', '🔍'),
        metadata: vaResMetadata
    };
    const course_va_client: Course = { 
        id: 'c_va_4', 
        titleKey: 'course_client_mgmt_title', 
        descriptionKey: 'course_client_mgmt_desc', 
        icon: '🤝', 
        lessons: vaContent.client, 
        assignment: createAssignment('va', '1 Invoice'), 
        badge: createBadge('client', 'va', '🤝'),
        metadata: vaClientMetadata
    };
    const course_va_ai: Course = { 
        id: 'c_va_5', 
        titleKey: 'course_ai_tools_title', 
        descriptionKey: 'course_ai_tools_desc', 
        icon: '🤖', 
        lessons: vaContent.aiva, 
        assignment: createAssignment('ai', '1 Email'), 
        badge: createBadge('ai_va', 'ai', '🤖'),
        metadata: vaAiMetadata
    };


    // AI Courses
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
            // Content Creation added first as per old structure logic
            courses: [course_content_creation, course_canva, course_whatsapp, course_reels, course_gbp],
        },
        {
            id: 'lp_content_writing',
            titleKey: 'path_content_writing_title',
            descriptionKey: 'path_content_writing_desc',
            icon: '✍️',
            courses: [course_cw], // Adding AI Basics and Chat as they are relevant
        },
        {
            id: 'lp_va',
            titleKey: 'path_va_title',
            descriptionKey: 'path_va_desc',
            icon: '⌨️',
            // Now includes the 5 specialized courses instead of the old 3
            courses: [course_va_tools, course_va_admin, course_va_research, course_va_client, course_va_ai],
        },
        {
            id: 'lp_local_biz',
            titleKey: 'path_local_biz_title',
            descriptionKey: 'path_local_biz_desc',
            icon: '🏘️',
            courses: [course_content_creation, course_whatsapp, course_gbp, course_canva],
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
