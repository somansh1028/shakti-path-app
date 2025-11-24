import React, { useState } from 'react';
import type { Quiz as QuizType } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { useUserProgress } from '../../contexts/UserProgressContext';

interface QuizProps {
  quiz: QuizType;
  lessonId: string;
}

const Quiz: React.FC<QuizProps> = ({ quiz, lessonId }) => {
  const { t } = useI18n();
  const { completeQuiz, completeLesson, isQuizCompleted } = useUserProgress();
  
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const isCompleted = isQuizCompleted(quiz.id);

  const handleCheckAnswer = () => {
    if (!selectedOptionId) return;

    if (selectedOptionId === quiz.correctOptionId) {
      setFeedback('correct');
      completeQuiz(quiz.id);
      completeLesson(lessonId); // Also mark the lesson as complete
    } else {
      setFeedback('incorrect');
    }
  };
  
  const getFeedbackMessage = () => {
    if (isCompleted) return t('quiz_completed');
    if (feedback === 'correct') return t('quiz_correct_feedback');
    if (feedback === 'incorrect') return t('quiz_incorrect_feedback');
    return null;
  }

  const feedbackClasses = isCompleted || feedback === 'correct'
    ? 'text-green-600 dark:text-green-400'
    : 'text-red-600 dark:text-red-400';

  return (
    <div className="bg-primary-100/50 dark:bg-neutral-800/50 p-6 rounded-2xl shadow-inner">
      <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">{t(quiz.questionKey)}</h3>
      <div className="space-y-3">
        {quiz.options.map(option => (
          <button
            key={option.id}
            onClick={() => {
                if(isCompleted) return;
                setSelectedOptionId(option.id);
                setFeedback(null);
            }}
            disabled={isCompleted}
            className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
              selectedOptionId === option.id
                ? 'bg-primary-200 dark:bg-primary-900/60 border-primary-500'
                : 'bg-white dark:bg-neutral-700 border-transparent hover:border-primary-300'
            } ${isCompleted ? 'cursor-not-allowed opacity-70' : ''}`}
          >
            {t(option.textKey)}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
         <button 
            onClick={handleCheckAnswer}
            disabled={!selectedOptionId || isCompleted}
            className="px-6 py-2 text-sm font-bold text-white bg-primary-600 rounded-lg shadow-sm hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed"
          >
            {t('quiz_check_answer_button')}
        </button>
        {feedback && (
            <p className={`text-sm font-semibold ${feedbackClasses}`}>
                {getFeedbackMessage()}
            </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;