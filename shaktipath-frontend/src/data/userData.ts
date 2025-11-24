import type { Prospect } from '../types';

export interface UserProgress {
  points: number;
  lessonsDone: number;
  pathsMastered: number;
}

export interface Badge {
  id: string;
  nameKey: string;
  icon: string;
}

interface UserData {
  profile: {
    name: string;
    city: string;
  };
  progress: UserProgress;
  completedCourses: string[]; // Array of course IDs
  badges: Badge[];
  prospects: Prospect[];
}

// Mock data based on the screenshot for a new user
export const userData: UserData = {
  profile: {
    name: "Aisha",
    city: "Singapore",
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
