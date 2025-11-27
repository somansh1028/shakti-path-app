
import type { UserData } from '../types';

// Mock data for initial state or offline mode
export const userData: UserData = {
  profile: {
    name: "Aisha",
    city: "Singapore",
    bio: "Aspiring digital marketer",
    skills: ["Canva", "Communication"],
    interests: ["Design", "Social Media"],
    avatar: ""
  },
  progress: {
    points: 0,
    lessonsDone: 0,
    pathsMastered: 0,
  },
  completedCourses: ['c1'], // User has completed "Canva for Small Business"
  badges: [],
  prospects: [],
};
