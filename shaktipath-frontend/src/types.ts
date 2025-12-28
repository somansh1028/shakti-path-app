

// --- Career Hub Types ---

export type CareerToolId = 
  | 'gig-finder'
  | 'pitch-generator'
  | 'portfolio-writer'
  | 'pricing-assistant'
  | 'call-simulator'
  | 'my-prospects'
  | 'gig-launchpad'
  | 'scholarships'
  | 'ai-coach';

export interface Gig {
  id: string;
  name: string;
  businessType: string;
  earningPotential: string;
  serviceToOffer: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

export type ProspectStatus = 'Lead' | 'Contacted' | 'Follow-up' | 'Closed';

export interface Prospect {
  id: string;
  name: string;
  businessType: string;
  status: ProspectStatus;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}


// --- Learning Content Types ---

export interface Badge {
  id: string;
  nameKey: string;
  name?: string; // Direct text support
  icon: string;
}

export interface QuizOption {
  id: string;
  textKey?: string; 
  text?: string;    // Direct text support
}

export interface Quiz {
  id: string;
  questionKey?: string;
  question?: string; // Direct text support
  options: QuizOption[];
  correctOptionId: string;
}

export interface LessonContent {
  type: 'paragraph' | 'list' | 'heading' | 'checklist' | 'video';
  contentKey?: string; 
  text?: string;       // Direct text support
}

export interface AssignmentCriterion {
    nameKey: string;
    name?: string;
    descriptionKey: string;
    description?: string;
    maxScore: number;
}

export interface Assignment {
    titleKey: string;
    title?: string;
    descriptionKey: string;
    description?: string;
    submissionFormat: string;
    reviewCriteria: AssignmentCriterion[];
}

export interface Lesson {
  id: string;
  titleKey?: string; 
  title?: string; // Direct text support
  duration: number; 
  content?: LessonContent[];
  quiz?: Quiz;
}

export interface CourseMetadata {
    audience?: {
        titleKey: string;
        textKey: string;
    };
    outcomes?: {
        titleKey: string;
        itemsKeys: string[];
    };
    format?: {
        titleKey: string;
        subtitleKey?: string;
        itemsKeys: string[];
    };
}

export interface Course {
  id: string;
  titleKey: string;
  title?: string;
  descriptionKey: string;
  description?: string;
  icon: string;
  lessons: Lesson[];
  assignment?: Assignment;
  badge: Badge;
  metadata?: CourseMetadata;
}

export interface LearningPath {
  id: string;
  titleKey: string;
  title?: string;
  descriptionKey: string;
  description?: string;
  icon: string;
  courses: Course[];
}

// --- AI Review Types ---
export interface CriterionScore {
    criterionName: string;
    score: number;
}

export interface AIReviewResult {
    overallScore: number;
    finalVerdictKey: string;
    whatYouDidWell: string;
    tipForImprovement: string;
    criteriaScores: CriterionScore[];
}

// --- Community Types ---
export interface CommunityPost {
  id: string;
  authorName: string;
  authorRoleKey: string;
  timeAgoKey: string;
  contentKey: string;
  image?: string; // URL or placeholder
  likes: number;
  comments: number;
  isLiked?: boolean;
}

export interface CommunityCircle {
  id: string;
  nameKey: string;
  membersCount: number;
  icon: string;
  descriptionKey: string;
  isJoined?: boolean;
}

// --- Chat & Career Guide Types ---
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CareerPathRecommendation {
  primary_path: string;
  secondary_path: string | null;
  love_summary: string;
  good_at_summary: string;
  community_need_summary: string;
  earning_goal_summary: string;
  motivation_style: string;
  suggested_first_course: string;
  suggested_micro_challenge: string;
}

// --- User Profile & Preferences Types ---
export interface UserProfile {
    name: string;
    city: string;
    bio: string;
    skills: string[];
    interests: string[];
    avatar?: string;
}

export interface UserPreferences {
    dailyGoal: number;
    studyTime: string;
    reminderDays: string[];
    notifications: {
        practice: boolean;
        streaks: boolean;
        community: boolean;
    };
}

// --- Progress Types (UI Representation) ---
export interface UserProgressStats {
  points: number;
  lessonsDone: number;
  pathsMastered: number;
}

// --- Combined User Data Interface ---
export interface UserData {
  profile: UserProfile;
  progress: UserProgressStats;
  completedCourses: string[]; // Array of course IDs
  badges: Badge[];
  prospects: Prospect[];
}
