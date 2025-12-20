
import React, { useState, useEffect } from 'react';
import LearningPathsList from './LearningPathsList';
import PathDetailsPage from './PathDetailsPage';
import CourseDetailsPage from './CourseDetailsPage';
import LessonPage from './LessonPage';
import AssignmentPage from './AssignmentPage';
import AssignmentReviewPage from './AssignmentReviewPage';
import { getLearningPaths } from '../../data/learningData';
import type { LearningPath, Course, Lesson, AIReviewResult } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { SparkleIcon } from '../icons/SparkleIcon';

type LearnView = 'pathsList' | 'pathDetails' | 'courseDetails' | 'lesson' | 'assignment' | 'assignmentLoading' | 'assignmentReview';

interface LearnPageProps {
    initialPathId?: string;
}

const LearnPage: React.FC<LearnPageProps> = ({ initialPathId }) => {
  const { language } = useI18n(); 
  const [view, setView] = useState<LearnView>('pathsList');
  const [paths, setPaths] = useState<LearningPath[]>(() => getLearningPaths(language));
  
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [reviewResult, setReviewResult] = useState<AIReviewResult | null>(null);

  // Handle deep linking from PlanPage
  useEffect(() => {
    if (initialPathId) {
       const target = paths.find(p => p.id === initialPathId);
       if (target) {
           setSelectedPath(target);
           setView('pathDetails');
       }
    }
  }, [initialPathId, paths]);

  // Refresh content and sync selected items when language changes
  useEffect(() => {
      const newPaths = getLearningPaths(language);
      setPaths(newPaths);
      
      setSelectedPath(prevPath => {
          if (!prevPath) return null;
          return newPaths.find(p => p.id === prevPath.id) || null;
      });

      setSelectedCourse(prevCourse => {
          if (!prevCourse) return null;
          for (const path of newPaths) {
              const course = path.courses.find(c => c.id === prevCourse.id);
              if (course) return course;
          }
          return null;
      });

      setSelectedLesson(prevLesson => {
          if (!prevLesson) return null;
           for (const path of newPaths) {
              for (const course of path.courses) {
                  const lesson = course.lessons.find(l => l.id === prevLesson.id);
                  if (lesson) return lesson;
              }
          }
          return null;
      });

  }, [language]);

  const handleSelectPath = (path: LearningPath) => {
    setSelectedPath(path);
    setView('pathDetails');
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setView('courseDetails');
  };
  
  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setView('lesson');
  };

  const handleStartAssignment = () => {
    setView('assignment');
  };
  
  const handleAssignmentSubmitted = (result: AIReviewResult) => {
    setReviewResult(result);
    setView('assignmentReview');
  };

  const handleBack = () => {
    if (view === 'assignmentReview' || view === 'assignment' || view === 'assignmentLoading') {
        setView('courseDetails');
        setReviewResult(null);
    } else if (view === 'lesson') {
        setView('courseDetails');
        setSelectedLesson(null);
    } else if (view === 'courseDetails') {
      setView('pathDetails');
      setSelectedCourse(null);
    } else if (view === 'pathDetails') {
      setView('pathsList');
      setSelectedPath(null);
    }
  };
  
  const handleNavigateLesson = (direction: 'next' | 'prev') => {
    if (!selectedCourse || !selectedLesson) return;
    const currentIndex = selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id);
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= 0 && nextIndex < selectedCourse.lessons.length) {
      setSelectedLesson(selectedCourse.lessons[nextIndex]);
    } else if (direction === 'next' && nextIndex >= selectedCourse.lessons.length) {
      handleBack();
    }
  };

  switch (view) {
    case 'pathDetails':
      return <PathDetailsPage path={selectedPath!} onSelectCourse={handleSelectCourse} onBack={handleBack} />;
    case 'courseDetails':
      return <CourseDetailsPage course={selectedCourse!} onSelectLesson={handleSelectLesson} onBack={handleBack} onStartAssignment={handleStartAssignment} />;
    case 'lesson':
      return <LessonPage course={selectedCourse!} lesson={selectedLesson!} onBack={handleBack} onNavigate={handleNavigateLesson} />;
    case 'assignment':
        return <AssignmentPage course={selectedCourse!} onBack={handleBack} onReviewReceived={handleAssignmentSubmitted}/>;
    case 'assignmentLoading':
        return (
             <div className="flex flex-col items-center justify-center min-h-full p-4">
                <SparkleIcon className="w-12 h-12 text-primary-500 animate-spin" />
                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">{language === 'hi' ? 'मूल्यांकन हो रहा है...' : language === 'mr' ? 'तपासणी होत आहे...' : 'Evaluating...'}</p>
             </div>
        );
    case 'assignmentReview':
        return <AssignmentReviewPage course={selectedCourse!} result={reviewResult!} onBack={handleBack} />;
    case 'pathsList':
    default:
      return <LearningPathsList paths={paths} onSelectPath={handleSelectPath} />;
  }
};

export default LearnPage;
