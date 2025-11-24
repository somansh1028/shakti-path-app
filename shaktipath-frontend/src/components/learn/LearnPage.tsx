import React, { useState } from 'react';
import LearningPathsList from './LearningPathsList';
import PathDetailsPage from './PathDetailsPage';
import CourseDetailsPage from './CourseDetailsPage';
import LessonPage from './LessonPage';
import AssignmentPage from './AssignmentPage';
import AssignmentReviewPage from './AssignmentReviewPage';
import { learningPaths } from '../../data/learningData';
import type { LearningPath, Course, Lesson, AIReviewResult } from '../../types';

type LearnView = 'pathsList' | 'pathDetails' | 'courseDetails' | 'lesson' | 'assignment' | 'assignmentReview';

const LearnPage: React.FC = () => {
  const [view, setView] = useState<LearnView>('pathsList');
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [reviewResult, setReviewResult] = useState<AIReviewResult | null>(null);

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
    if (view === 'assignmentReview' || view === 'assignment') {
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
      // If it was the last lesson, go back to course details
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
    case 'assignmentReview':
        return <AssignmentReviewPage course={selectedCourse!} result={reviewResult!} onBack={handleBack} />;
    case 'pathsList':
    default:
      return <LearningPathsList paths={learningPaths} onSelectPath={handleSelectPath} />;
  }
};

export default LearnPage;