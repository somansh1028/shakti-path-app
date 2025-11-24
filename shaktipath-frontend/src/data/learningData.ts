
import type { LearningPath, Course, Lesson, Quiz, Assignment, Badge } from '../types';

// --- Helpers ---
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

// Updated Helper for Rich Lesson Structure
const createLesson = (id: string, prefix: string, duration: number, quizId: string, correctOption: string = 'a'): Lesson => ({
    id: id,
    titleKey: `${prefix}_title`,
    duration: duration,
    content: [
        { type: 'paragraph', contentKey: `${prefix}_intro` },
        { type: 'heading', contentKey: `${prefix}_goal_title` }, // "What you'll learn"
        { type: 'list', contentKey: `${prefix}_goal_list` }, // Learning objectives
        { type: 'heading', contentKey: `${prefix}_action_title` }, // "Do it with me"
        { type: 'checklist', contentKey: `${prefix}_action_list` }, // Interactive steps
        { type: 'heading', contentKey: `${prefix}_task_title` }, // "Assignment"
        { type: 'paragraph', contentKey: `${prefix}_task_desc` } // Real-world task
    ],
    quiz: {
        id: quizId,
        questionKey: `${prefix}_quiz_q`,
        options: [
            { id: 'a', textKey: `${prefix}_quiz_a` },
            { id: 'b', textKey: `${prefix}_quiz_b` }
        ],
        correctOptionId: correctOption
    }
});

// --- GENERIC GENERATOR (For placeholder courses) ---
const createLessonSequence = (prefix: string, count: number): Lesson[] => {
    return Array.from({ length: count }, (_, i) => {
        const id = `${prefix}_l${i + 1}`; 
        return createLesson(id, `${prefix}_l${i + 1}`, 15, `q_${prefix}_${i + 1}`, 'a');
    });
};

// ==========================================
// PATH 1: FOUNDATIONAL DIGITAL SKILLS
// ==========================================

// 1.1 Smartphone for Work (9 Lessons)
const smLessons: Lesson[] = [
    createLesson('sm_l1', 'sm_l1', 10, 'q_sm_1', 'b'), // Keys/Icons
    createLesson('sm_l2', 'sm_l2', 10, 'q_sm_2', 'a'), // Settings
    createLesson('sm_l3', 'sm_l3', 15, 'q_sm_3', 'a'), // Internet/Data
    createLesson('sm_l4', 'sm_l4', 15, 'q_sm_4', 'b'), // Play Store
    createLesson('sm_l5', 'sm_l5', 20, 'q_sm_5', 'a'), // WhatsApp Pro
    createLesson('sm_l6', 'sm_l6', 15, 'q_sm_6', 'b'), // YouTube Learning
    createLesson('sm_l7', 'sm_l7', 20, 'q_sm_7', 'a'), // Camera/Photos
    createLesson('sm_l8', 'sm_l8', 15, 'q_sm_8', 'a'), // Voice Search
    createLesson('sm_l9', 'sm_l9', 10, 'q_sm_9', 'b'), // Safety/PIN
];
const course_smartphone: Course = { id: 'c_found_1', titleKey: 'course_smartphone_title', descriptionKey: 'course_smartphone_desc', icon: '📱', lessons: smLessons, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };

// 1.2 Essential Computer Skills (9 Lessons)
const compLessons: Lesson[] = [
    createLesson('comp_l1', 'comp_l1', 15, 'q_comp_1', 'a'), // Laptop vs Desktop
    createLesson('comp_l2', 'comp_l2', 15, 'q_comp_2', 'b'), // Turning On/Off
    createLesson('comp_l3', 'comp_l3', 20, 'q_comp_3', 'a'), // Mouse Mastery
    createLesson('comp_l4', 'comp_l4', 20, 'q_comp_4', 'b'), // Keyboard Intro
    createLesson('comp_l5', 'comp_l5', 25, 'q_comp_5', 'a'), // Desktop & Icons
    createLesson('comp_l6', 'comp_l6', 15, 'q_comp_6', 'b'), // Opening Programs
    createLesson('comp_l7', 'comp_l7', 20, 'q_comp_7', 'a'), // Window Controls
    createLesson('comp_l8', 'comp_l8', 25, 'q_comp_8', 'a'), // Typing Text
    createLesson('comp_l9', 'comp_l9', 15, 'q_comp_9', 'b'), // Saving Files
];
const course_computer: Course = { id: 'c_found_2', titleKey: 'course_computer_title', descriptionKey: 'course_computer_desc', icon: '💻', lessons: compLessons, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };

// 1.3 English for Work (9 Lessons)
const engLessons: Lesson[] = [
    createLesson('eng_l1', 'eng_l1', 10, 'q_eng_1', 'a'), // Hello/Goodbye
    createLesson('eng_l2', 'eng_l2', 10, 'q_eng_2', 'b'), // Introduction
    createLesson('eng_l3', 'eng_l3', 15, 'q_eng_3', 'a'), // Polite Words
    createLesson('eng_l4', 'eng_l4', 15, 'q_eng_4', 'b'), // What is this?
    createLesson('eng_l5', 'eng_l5', 20, 'q_eng_5', 'a'), // Numbers
    createLesson('eng_l6', 'eng_l6', 20, 'q_eng_6', 'a'), // Days/Time
    createLesson('eng_l7', 'eng_l7', 25, 'q_eng_7', 'b'), // Job Words
    createLesson('eng_l8', 'eng_l8', 15, 'q_eng_8', 'a'), // Reading Msgs
    createLesson('eng_l9', 'eng_l9', 20, 'q_eng_9', 'b'), // Simple Reply
];
const course_english: Course = { id: 'c_found_3', titleKey: 'course_english_title', descriptionKey: 'course_english_desc', icon: '🗣️', lessons: engLessons, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };

// 1.4 Freelance Intro (9 Lessons)
const freeLessons: Lesson[] = [
    createLesson('free_l1', 'free_l1', 15, 'q_free_1', 'a'), // What is online work?
    createLesson('free_l2', 'free_l2', 20, 'q_free_2', 'b'), // Your Skills
    createLesson('free_l3', 'free_l3', 15, 'q_free_3', 'a'), // Tools needed
    createLesson('free_l4', 'free_l4', 25, 'q_free_4', 'b'), // Trust/Safety
    createLesson('free_l5', 'free_l5', 20, 'q_free_5', 'a'), // Job Examples
    createLesson('free_l6', 'free_l6', 20, 'q_free_6', 'b'), // Learning is Earning
    createLesson('free_l7', 'free_l7', 25, 'q_free_7', 'a'), // Professionalism
    createLesson('free_l8', 'free_l8', 15, 'q_free_8', 'b'), // Getting Paid
    createLesson('free_l9', 'free_l9', 15, 'q_free_9', 'a'), // First Steps
];
const course_freelance: Course = { id: 'c_found_4', titleKey: 'course_freelance_title', descriptionKey: 'course_freelance_desc', icon: '🌐', lessons: freeLessons, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };

// 1.5 Money Basics (9 Lessons)
const moneyLessons: Lesson[] = [
    createLesson('mon_l1', 'mon_l1', 10, 'q_mon_1', 'a'), // Coins/Notes
    createLesson('mon_l2', 'mon_l2', 15, 'q_mon_2', 'b'), // Counting
    createLesson('mon_l3', 'mon_l3', 20, 'q_mon_3', 'a'), // Needs vs Wants
    createLesson('mon_l4', 'mon_l4', 15, 'q_mon_4', 'a'), // Saving
    createLesson('mon_l5', 'mon_l5', 20, 'q_mon_5', 'b'), // What is a Bank?
    createLesson('mon_l6', 'mon_l6', 25, 'q_mon_6', 'a'), // UPI Intro
    createLesson('mon_l7', 'mon_l7', 15, 'q_mon_7', 'b'), // Scanning QR
    createLesson('mon_l8', 'mon_l8', 20, 'q_mon_8', 'a'), // PIN Safety
    createLesson('mon_l9', 'mon_l9', 15, 'q_mon_9', 'b'), // Expense Note
];
const course_money: Course = { id: 'c_found_5', titleKey: 'course_money_title', descriptionKey: 'course_money_desc', icon: '₹', lessons: moneyLessons, assignment: createAssignment('foundational'), badge: createBadge('found', 'foundational', '🎓') };

const foundationalCourses = [course_smartphone, course_computer, course_english, course_freelance, course_money];


// ==========================================
// PATH 3: VIRTUAL ASSISTANT (VA)
// ==========================================

// 3.1 Data Entry (9 Lessons)
const dataLessons: Lesson[] = [
    createLesson('data_l1', 'data_l1', 15, 'q_data_1', 'a'), // Spreadsheet Intro
    createLesson('data_l2', 'data_l2', 15, 'q_data_2', 'b'), // Opening
    createLesson('data_l3', 'data_l3', 20, 'q_data_3', 'a'), // Grid
    createLesson('data_l4', 'data_l4', 25, 'q_data_4', 'b'), // Typing
    createLesson('data_l5', 'data_l5', 20, 'q_data_5', 'a'), // Resizing
    createLesson('data_l6', 'data_l6', 20, 'q_data_6', 'a'), // Formatting
    createLesson('data_l7', 'data_l7', 25, 'q_data_7', 'b'), // Lists
    createLesson('data_l8', 'data_l8', 20, 'q_data_8', 'a'), // Sorting
    createLesson('data_l9', 'data_l9', 15, 'q_data_9', 'b'), // Sharing
];
const course_data: Course = { id: 'c_va_1', titleKey: 'course_data_entry_title', descriptionKey: 'course_data_entry_desc', icon: '📊', lessons: dataLessons, assignment: createAssignment('va'), badge: createBadge('va', 'va', '💼') };

// 3.2 Online Research (9 Lessons - Placeholder for detailed content updates)
const researchLessons = createLessonSequence('res', 9);
const course_research: Course = { id: 'c_va_2', titleKey: 'course_research_title', descriptionKey: 'course_research_desc', icon: '🔍', lessons: researchLessons, assignment: createAssignment('va'), badge: createBadge('va', 'va', '💼') };

// 3.3 Admin Support (9 Lessons)
const adminLessons = createLessonSequence('admin', 9);
const course_admin: Course = { id: 'c_va_3', titleKey: 'course_admin_title', descriptionKey: 'course_admin_desc', icon: '📅', lessons: adminLessons, assignment: createAssignment('va'), badge: createBadge('va', 'va', '💼') };

// 3.4 Customer Support (9 Lessons)
const supportLessons = createLessonSequence('supp', 9);
const course_support: Course = { id: 'c_va_4', titleKey: 'course_support_title', descriptionKey: 'course_support_desc', icon: '🎧', lessons: supportLessons, assignment: createAssignment('va'), badge: createBadge('va', 'va', '💼') };

// 3.5 VA Projects (9 Lessons)
const vaProjLessons = createLessonSequence('vap', 9);
const course_va_proj: Course = { id: 'c_va_5', titleKey: 'course_va_project_title', descriptionKey: 'course_va_project_desc', icon: '📂', lessons: vaProjLessons, assignment: createAssignment('va'), badge: createBadge('va', 'va', '💼') };

const vaCourses = [course_data, course_research, course_admin, course_support, course_va_proj];


// ==========================================
// PATH 5: EVERYDAY AI
// ==========================================

// 5.1 AI Basics (9 Lessons)
const aiBasicLessons: Lesson[] = [
    createLesson('aib_l1', 'aib_l1', 10, 'q_aib_1', 'a'), // Magic on Phone
    createLesson('aib_l2', 'aib_l2', 15, 'q_aib_2', 'b'), // What is AI
    createLesson('aib_l3', 'aib_l3', 15, 'q_aib_3', 'a'), // Examples
    createLesson('aib_l4', 'aib_l4', 20, 'q_aib_4', 'b'), // Asking Questions
    createLesson('aib_l5', 'aib_l5', 20, 'q_aib_5', 'a'), // Google Lens
    createLesson('aib_l6', 'aib_l6', 20, 'q_aib_6', 'a'), // Voice Typing
    createLesson('aib_l7', 'aib_l7', 25, 'q_aib_7', 'b'), // Translation
    createLesson('aib_l8', 'aib_l8', 20, 'q_aib_8', 'a'), // Right/Wrong
    createLesson('aib_l9', 'aib_l9', 15, 'q_aib_9', 'b'), // Tool Mindset
];
const course_ai_basics: Course = { id: 'c_ai_1', titleKey: 'course_ai_basics_title', descriptionKey: 'course_ai_basics_desc', icon: '🧠', lessons: aiBasicLessons, assignment: createAssignment('ai'), badge: createBadge('ai', 'ai', '🤖') };

const chatLessons = createLessonSequence('chat', 9);
const course_chatbots: Course = { id: 'c_ai_2', titleKey: 'course_chatbots_title', descriptionKey: 'course_chatbots_desc', icon: '💬', lessons: chatLessons, assignment: createAssignment('ai'), badge: createBadge('ai', 'ai', '🤖') };

const toolLessons = createLessonSequence('tool', 9);
const course_ai_tools: Course = { id: 'c_ai_3', titleKey: 'course_ai_tools_title', descriptionKey: 'course_ai_tools_desc', icon: '🛠️', lessons: toolLessons, assignment: createAssignment('ai'), badge: createBadge('ai', 'ai', '🤖') };

const voiceLessons = createLessonSequence('voi', 9);
const course_voice: Course = { id: 'c_ai_4', titleKey: 'course_voice_title', descriptionKey: 'course_voice_desc', icon: '🎙️', lessons: voiceLessons, assignment: createAssignment('ai'), badge: createBadge('ai', 'ai', '🤖') };

const aiProjLessons = createLessonSequence('aip', 9);
const course_ai_proj: Course = { id: 'c_ai_5', titleKey: 'course_ai_project_title', descriptionKey: 'course_ai_project_desc', icon: '🚀', lessons: aiProjLessons, assignment: createAssignment('ai'), badge: createBadge('ai', 'ai', '🤖') };

const aiCourses = [course_ai_basics, course_chatbots, course_ai_tools, course_voice, course_ai_proj];


// ==========================================
// PATH 2: DIGITAL MARKETING (Preserved & Manual)
// ==========================================

const canvaAssignment = {
    titleKey: 'assignment_canva_title', descriptionKey: 'assignment_canva_desc', submissionFormat: '3 PNG/JPG files',
    reviewCriteria: [
        { nameKey: 'assignment_criteria_1_name', descriptionKey: 'assignment_criteria_1_desc', maxScore: 30 },
        { nameKey: 'assignment_criteria_2_name', descriptionKey: 'assignment_criteria_2_desc', maxScore: 40 },
        { nameKey: 'assignment_criteria_3_name', descriptionKey: 'assignment_criteria_3_desc', maxScore: 30 },
    ]
};
const canvaBadge = createBadge('canva', 'canva', '🎨');

const canvaLessons: Lesson[] = [
    { id: 'l0', titleKey: 'l0_title', duration: 5, content: [{ type: 'paragraph', contentKey: 'l0_intro' }, { type: 'video', contentKey: 'l0_video_id' }, { type: 'heading', contentKey: 'l0_key_takeaways' }, { type: 'list', contentKey: 'l0_takeaways_list' }] },
    { id: 'l1', titleKey: 'l1_title', duration: 10, content: [{ type: 'paragraph', contentKey: 'l1_intro_body' }, { type: 'checklist', contentKey: 'l1_checklist_body' }], quiz: { id: 'q_l1', questionKey: 'quiz_l1_q', options: [{ id: 'a', textKey: 'quiz_l1_a' }, { id: 'b', textKey: 'quiz_l1_b' }, { id: 'c', textKey: 'quiz_l1_c' }], correctOptionId: 'b' } },
    { id: 'l2', titleKey: 'l2_title', duration: 15, content: [{ type: 'paragraph', contentKey: 'l2_intro_body' }, { type: 'checklist', contentKey: 'l2_checklist_body' }], quiz: { id: 'q_l2', questionKey: 'quiz_l2_q', options: [{ id: 'a', textKey: 'quiz_l2_a' }, { id: 'b', textKey: 'quiz_l2_b' }], correctOptionId: 'b' } },
    { id: 'l3', titleKey: 'l3_title', duration: 15, content: [{ type: 'paragraph', contentKey: 'l3_intro_body' }, { type: 'checklist', contentKey: 'l3_checklist_body' }], quiz: { id: 'q_l3', questionKey: 'quiz_l3_q', options: [{ id: 'a', textKey: 'quiz_l3_a' }, { id: 'b', textKey: 'quiz_l3_b' }, { id: 'c', textKey: 'quiz_l3_c' }], correctOptionId: 'b' } },
    { id: 'l4', titleKey: 'l4_title', duration: 20, content: [{ type: 'paragraph', contentKey: 'l4_intro_body' }, { type: 'checklist', contentKey: 'l4_checklist_body' }], quiz: { id: 'q_l4', questionKey: 'quiz_l4_q', options: [{ id: 'a', textKey: 'quiz_l4_a' }, { id: 'b', textKey: 'quiz_l4_b' }, { id: 'c', textKey: 'quiz_l4_c' }], correctOptionId: 'b' } },
    { id: 'l5', titleKey: 'l5_title', duration: 20, content: [{ type: 'paragraph', contentKey: 'l5_intro_body' }, { type: 'checklist', contentKey: 'l5_checklist_body' }], quiz: { id: 'q_l5', questionKey: 'quiz_l5_q', options: [{ id: 'a', textKey: 'quiz_l5_a' }, { id: 'b', textKey: 'quiz_l5_b' }, { id: 'c', textKey: 'quiz_l5_c' }], correctOptionId: 'b' } },
    { id: 'l6', titleKey: 'l6_title', duration: 20, content: [{ type: 'paragraph', contentKey: 'l6_intro_body' }, { type: 'checklist', contentKey: 'l6_checklist_body' }], quiz: { id: 'q_l6', questionKey: 'quiz_l6_q', options: [{ id: 'a', textKey: 'quiz_l6_a' }, { id: 'b', textKey: 'quiz_l6_b' }, { id: 'c', textKey: 'quiz_l6_c' }], correctOptionId: 'a' } },
    { id: 'l7', titleKey: 'l7_title', duration: 25, content: [{ type: 'paragraph', contentKey: 'l7_intro_body' }, { type: 'checklist', contentKey: 'l7_checklist_body' }], quiz: { id: 'q_l7', questionKey: 'quiz_l7_q', options: [{ id: 'a', textKey: 'quiz_l7_a' }, { id: 'b', textKey: 'quiz_l7_b' }, { id: 'c', textKey: 'quiz_l7_c' }], correctOptionId: 'b' } },
    { id: 'l8', titleKey: 'l8_title', duration: 20, content: [{ type: 'paragraph', contentKey: 'l8_intro_body' }, { type: 'checklist', contentKey: 'l8_checklist_body' }], quiz: { id: 'q_l8', questionKey: 'quiz_l8_q', options: [{ id: 'a', textKey: 'quiz_l8_a' }, { id: 'b', textKey: 'quiz_l8_b' }, { id: 'c', textKey: 'quiz_l8_c' }], correctOptionId: 'b' } },
    { id: 'l9', titleKey: 'l9_title', duration: 30, content: [{ type: 'paragraph', contentKey: 'l9_intro_body' }, { type: 'checklist', contentKey: 'l9_checklist_body' }], quiz: { id: 'q_l9', questionKey: 'quiz_l9_q', options: [{ id: 'a', textKey: 'quiz_l9_a' }, { id: 'b', textKey: 'quiz_l9_b' }, { id: 'c', textKey: 'quiz_l9_c' }], correctOptionId: 'a' } }
];

const whatsappAssignment = createAssignment('wa');
const whatsappBadge = createBadge('wa', 'whatsapp', '🛒');
const whatsappLessons = createLessonSequence('wa', 10); // Kept as generic for now

const capcutAssignment = createAssignment('cc');
const capcutBadge = createBadge('cc', 'cc', '🎬');
const capcutLessons = createLessonSequence('cc', 10);

const googleAssignment = createAssignment('gbp');
const googleBadge = createBadge('gbp', 'gbp', '🗺️');
const googleLessons = createLessonSequence('gbp', 10);

const digitalMarketingCourses: Course[] = [
  { id: 'c1', titleKey: 'course_canva_title', descriptionKey: 'course_canva_desc', icon: '🎨', lessons: canvaLessons, assignment: canvaAssignment, badge: canvaBadge },
  { id: 'c2', titleKey: 'course_whatsapp_title', descriptionKey: 'course_whatsapp_desc', icon: '💬', lessons: whatsappLessons, assignment: whatsappAssignment, badge: whatsappBadge },
  { id: 'c3', titleKey: 'course_reels_title', descriptionKey: 'course_reels_desc', icon: '🎬', lessons: capcutLessons, assignment: capcutAssignment, badge: capcutBadge },
  { id: 'c4', titleKey: 'course_google_profile_title', descriptionKey: 'course_google_profile_desc', icon: '🗺️', lessons: googleLessons, assignment: googleAssignment, badge: googleBadge },
];

// ==========================================
// PATH 4: LOCAL BUSINESS HELPER
// ==========================================
const localAssignment = createAssignment('local_biz');
const localBadge = createBadge('local', 'local_biz', '🤝');

const course_local_online: Course = { id: 'c_local_1', titleKey: 'course_local_online_title', descriptionKey: 'course_local_online_desc', icon: '🏪', lessons: createLessonSequence('loc', 9), assignment: localAssignment, badge: localBadge };
const course_gbp_adv: Course = { id: 'c_local_2', titleKey: 'course_gbp_adv_title', descriptionKey: 'course_gbp_adv_desc', icon: '🗺️', lessons: createLessonSequence('gbpa', 9), assignment: localAssignment, badge: localBadge };
const course_wa_mkt: Course = { id: 'c_local_3', titleKey: 'course_wa_marketing_title', descriptionKey: 'course_wa_marketing_desc', icon: '📢', lessons: createLessonSequence('wam', 9), assignment: localAssignment, badge: localBadge };
const course_websites: Course = { id: 'c_local_4', titleKey: 'course_websites_title', descriptionKey: 'course_websites_desc', icon: '🌐', lessons: createLessonSequence('web', 9), assignment: localAssignment, badge: localBadge };
const course_client_mgmt: Course = { id: 'c_local_5', titleKey: 'course_client_mgmt_title', descriptionKey: 'course_client_mgmt_desc', icon: '🤝', lessons: createLessonSequence('cli', 9), assignment: localAssignment, badge: localBadge };

const localBizCourses = [course_local_online, course_gbp_adv, course_wa_mkt, course_websites, course_client_mgmt];


export const learningPaths: LearningPath[] = [
  { id: 'lp_found', titleKey: 'path_foundational_title', descriptionKey: 'path_foundational_desc', icon: '🌱', courses: foundationalCourses },
  { id: 'lp_digital_marketing', titleKey: 'path_digital_marketing_title', descriptionKey: 'path_digital_marketing_desc', icon: '🚀', courses: digitalMarketingCourses },
  { id: 'lp_va', titleKey: 'path_va_title', descriptionKey: 'path_va_desc', icon: '💼', courses: vaCourses },
  { id: 'lp_local_biz', titleKey: 'path_local_biz_title', descriptionKey: 'path_local_biz_desc', icon: '🏪', courses: localBizCourses },
  { id: 'lp_ai', titleKey: 'path_ai_title', descriptionKey: 'path_ai_desc', icon: '🤖', courses: aiCourses },
];
