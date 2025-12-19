
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setSelectedOptionId(null);
    setFeedback(null);
  }, [quiz.id]);

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
    if (feedback === 'correct') return t('quiz_correct_feedback');
    if (feedback === 'incorrect') return t('quiz_incorrect_feedback');
    if (isCompleted) return t('quiz_completed');
    return null;
  }

  // Helper to prioritize direct text
  const getQuestionText = () => quiz.question || (quiz.questionKey ? t(quiz.questionKey) : '');
  const getOptionText = (opt: any) => opt.text || (opt.textKey ? t(opt.textKey) : '');

  const feedbackClasses = (feedback === 'correct' || isCompleted)
    ? 'text-green-600 dark:text-green-400'
    : 'text-red-600 dark:text-red-400';

  return (
    <div className="bg-primary-100/50 dark:bg-neutral-800/50 p-6 rounded-2xl shadow-inner">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{getQuestionText()}</h3>
        {isCompleted && (
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                Completed
            </span>
        )}
      </div>
      
      <div className="space-y-3">
        {quiz.options.map(option => (
          <button
            key={option.id}
            onClick={() => {
                setSelectedOptionId(option.id);
                setFeedback(null);
            }}
            className={`w-full text-left p-3 rounded-lg border-2 transition-colors cursor-pointer ${
              selectedOptionId === option.id
                ? 'bg-primary-200 dark:bg-primary-900/60 border-primary-500'
                : 'bg-white dark:bg-neutral-700 border-transparent hover:border-primary-300'
            }`}
          >
            {getOptionText(option)}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
         <button 
            onClick={handleCheckAnswer}
            disabled={!selectedOptionId}
            className="px-6 py-2 text-sm font-bold text-white bg-primary-600 rounded-lg shadow-sm hover:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed transition-colors"
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
