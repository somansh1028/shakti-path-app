
import type { CommunityPost, CommunityCircle } from '../types';

export interface CommunityChallenge {
  id: string;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey: string;
  rulesKey: string;
  prizeKey: string;
  participants: number;
  daysLeft: number;
}

export const activeChallenge: CommunityChallenge = {
  id: 'challenge1',
  categoryKey: 'community_challenge_category',
  titleKey: 'community_challenge_name',
  descriptionKey: 'community_challenge_desc',
  fullDescriptionKey: 'community_challenge_full_desc',
  rulesKey: 'community_challenge_rules',
  prizeKey: 'community_challenge_prize',
  participants: 234,
  daysLeft: 5,
};

export const communityPosts: CommunityPost[] = [
  {
    id: 'p1',
    authorName: 'Priya Sharma',
    authorRoleKey: 'post_role_student',
    timeAgoKey: 'post_time_2h',
    contentKey: 'post_content_1',
    likes: 24,
    comments: 5,
    isLiked: false,
  },
  {
    id: 'p2',
    authorName: 'Anjali Gupta',
    authorRoleKey: 'post_role_creator',
    timeAgoKey: 'post_time_4h',
    contentKey: 'post_content_2',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    likes: 156,
    comments: 32,
    isLiked: true,
  },
  {
    id: 'p3',
    authorName: 'Sneha Patel',
    authorRoleKey: 'post_role_student',
    timeAgoKey: 'post_time_1d',
    contentKey: 'post_content_3',
    likes: 45,
    comments: 8,
    isLiked: false,
  },
];

export const communityCircles: CommunityCircle[] = [
  {
    id: 'c1',
    nameKey: 'circle_design_name',
    descriptionKey: 'circle_design_desc',
    membersCount: 1250,
    icon: '🎨',
    isJoined: false,
  },
  {
    id: 'c2',
    nameKey: 'circle_business_name',
    descriptionKey: 'circle_business_desc',
    membersCount: 840,
    icon: '💼',
    isJoined: true,
  },
  {
    id: 'c3',
    nameKey: 'circle_tech_name',
    descriptionKey: 'circle_tech_desc',
    membersCount: 560,
    icon: '💻',
    isJoined: false,
  },
];
