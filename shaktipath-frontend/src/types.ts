




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
  icon: string;
}

export interface QuizOption {
  id: string;
  textKey: string;
}

export interface Quiz {
  id: string;
  questionKey: string;
  options: QuizOption[];
  correctOptionId: string;
}

export interface LessonContent {
  type: 'paragraph' | 'list' | 'heading' | 'checklist' | 'video';
  contentKey: string;
}

export interface AssignmentCriterion {
    nameKey: string;
    descriptionKey: string;
    maxScore: number;
}

export interface Assignment {
    titleKey: string;
    descriptionKey: string;
    submissionFormat: string;
    reviewCriteria: AssignmentCriterion[];
}

export interface Lesson {
  id: string;
  titleKey: string;
  duration: number; 
  content?: LessonContent[];
  quiz?: Quiz;
}

export interface Course {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  lessons: Lesson[];
  assignment?: Assignment;
  badge: Badge;
}

export interface LearningPath {
  id: string;
  titleKey: string;
  descriptionKey: string;
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
    whatYouDidWellKey: string;
    tipForImprovementKey: string;
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