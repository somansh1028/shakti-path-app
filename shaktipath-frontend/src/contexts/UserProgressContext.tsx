
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect, useMemo } from 'react';
import type { Badge } from '../types';
import { API_BASE_URL, getHeaders } from '../config';

interface UserProgressState {
    completedLessonIds: Set<string>;
    completedQuizIds: Set<string>;
    completedCourseIds: Set<string>;
    assignmentScores: Record<string, number>;
    earnedBadges: Badge[];
    points: number;
    isInitialized: boolean;
}

interface UserProgressContextType extends UserProgressState {
    completeLesson: (lessonId: string) => void;
    completeQuiz: (quizId: string) => void;
    completeCourse: (courseId: string, badge: Badge) => void;
    saveAssignmentScore: (courseId: string, score: number) => void;
    isLessonCompleted: (lessonId: string) => boolean;
    isQuizCompleted: (quizId: string) => boolean;
    isCourseCompleted: (courseId: string) => boolean;
    resetProgress: () => void;
    refreshProgress: () => Promise<void>;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

const initialState: UserProgressState = {
    completedLessonIds: new Set(),
    completedQuizIds: new Set(),
    completedCourseIds: new Set(),
    assignmentScores: {},
    earnedBadges: [],
    points: 0,
    isInitialized: false,
};

export const UserProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState<UserProgressState>(initialState);

    // --- SYNC TO BACKEND ---
    const syncProgressToBackend = async (newProgress: UserProgressState) => {
        const token = localStorage.getItem('authToken');
        if (!token) return;

        try {
            const payload = {
                points: newProgress.points,
                completedLessons: Array.from(newProgress.completedLessonIds),
                completedQuizzes: Array.from(newProgress.completedQuizIds),
                completedCourses: Array.from(newProgress.completedCourseIds),
                assignmentScores: newProgress.assignmentScores,
                badges: newProgress.earnedBadges,
            };

            const res = await fetch(`${API_BASE_URL}/api/user/progress/sync`, {
                method: 'POST',
                headers: getHeaders(token),
                body: JSON.stringify(payload)
            });
            
            if (res.status === 401) {
                window.dispatchEvent(new Event('auth-unauthorized'));
            }
        } catch (error) {
            console.error("Failed to sync progress:", error);
        }
    };

    // --- FETCH FROM BACKEND ---
    const fetchProgress = useCallback(async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setProgress(prev => ({ ...prev, isInitialized: true }));
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/user/progress`, { headers: getHeaders(token) });
            
            if (res.status === 401) {
                window.dispatchEvent(new Event('auth-unauthorized'));
                return;
            }

            if (res.ok) {
                const data = await res.json();
                
                setProgress({
                    points: data.points || 0,
                    completedLessonIds: new Set(data.completedLessons || []),
                    completedQuizIds: new Set(data.completedQuizzes || []),
                    completedCourseIds: new Set(data.completedCourses || []),
                    assignmentScores: data.assignmentScores || {},
                    earnedBadges: data.badges || [],
                    isInitialized: true
                });
            } else {
                setProgress(prev => ({ ...prev, isInitialized: true }));
            }
        } catch (e) {
            console.error("Failed to load progress:", e);
            setProgress(prev => ({ ...prev, isInitialized: true }));
        }
    }, []);

    // Initial load
    useEffect(() => {
        fetchProgress();
    }, [fetchProgress]);

    // --- ACTIONS ---
    const completeLesson = useCallback((lessonId: string) => {
        setProgress(current => {
            if (current.completedLessonIds.has(lessonId)) return current; // No dupe points
            
            const newSet = new Set(current.completedLessonIds).add(lessonId);
            const newPoints = current.points + 10;
            
            const newProgress = { 
                ...current, 
                completedLessonIds: newSet, 
                points: newPoints
            };
            syncProgressToBackend(newProgress);
            return newProgress;
        });
    }, []);
    
    const completeQuiz = useCallback((quizId: string) => {
        setProgress(current => {
            if (current.completedQuizIds.has(quizId)) return current;

            const newSet = new Set(current.completedQuizIds).add(quizId);
            const newPoints = current.points + 20;
            
            const newProgress = { 
                ...current, 
                completedQuizIds: newSet, 
                points: newPoints
            };
            syncProgressToBackend(newProgress);
            return newProgress;
        });
    }, []);

    const completeCourse = useCallback((courseId: string, badge: Badge) => {
        setProgress(current => {
            if (current.completedCourseIds.has(courseId)) return current;
            
            const newPoints = current.points + 100;

            const newProgress = {
                ...current,
                completedCourseIds: new Set(current.completedCourseIds).add(courseId),
                earnedBadges: current.earnedBadges.some(b => b.id === badge.id) ? current.earnedBadges : [...current.earnedBadges, badge],
                points: newPoints
            };
            syncProgressToBackend(newProgress);
            return newProgress;
        });
    }, []);

    const saveAssignmentScore = useCallback((courseId: string, score: number) => {
        setProgress(current => {
            const newScores = { ...current.assignmentScores, [courseId]: score };
            const newProgress = { ...current, assignmentScores: newScores };
            syncProgressToBackend(newProgress);
            return newProgress;
        });
    }, []);

    const isLessonCompleted = useCallback((lessonId: string) => progress.completedLessonIds.has(lessonId), [progress.completedLessonIds]);
    const isQuizCompleted = useCallback((quizId: string) => progress.completedQuizIds.has(quizId), [progress.completedQuizIds]);
    const isCourseCompleted = useCallback((courseId: string) => progress.completedCourseIds.has(courseId), [progress.completedCourseIds]);
    const resetProgress = useCallback(() => setProgress(initialState), []);

    const value = useMemo(() => ({
        ...progress,
        completeLesson,
        completeQuiz,
        completeCourse,
        saveAssignmentScore,
        isLessonCompleted,
        isQuizCompleted,
        isCourseCompleted,
        resetProgress,
        refreshProgress: fetchProgress
    }), [progress, completeLesson, completeQuiz, completeCourse, saveAssignmentScore, isLessonCompleted, isQuizCompleted, isCourseCompleted, resetProgress, fetchProgress]);

    return (
        <UserProgressContext.Provider value={value}>
            {children}
        </UserProgressContext.Provider>
    );
};

export const useUserProgress = (): UserProgressContextType => {
    const context = useContext(UserProgressContext);
    if (context === undefined) {
        throw new Error('useUserProgress must be used within a UserProgressProvider');
    }
    return context;
};

export default UserProgressProvider;