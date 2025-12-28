import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Course, AIReviewResult, CriterionScore } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { useUserProgress } from '../../contexts/UserProgressContext';
import { useToast } from '../../contexts/ToastContext';
import { API_BASE_URL, getHeaders } from '../../config';

interface AssignmentReviewPageProps {
  course: Course;
  result: AIReviewResult;
  onBack: () => void;
}

const AssignmentReviewPage: React.FC<AssignmentReviewPageProps> = ({ course, result, onBack }) => {
  const { t } = useI18n();
  const { completeCourse, saveAssignmentScore } = useUserProgress();
  const { showToast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [userName, setUserName] = useState<string>('Learner');

  // Fetch real user name for certificate
  useEffect(() => {
    const fetchProfile = async () => {
        const token = localStorage.getItem('authToken');
        if(!token) return;
        try {
            const res = await fetch(`${API_BASE_URL}/api/user/profile`, { headers: getHeaders(token) });
            if(res.ok) {
                const data = await res.json();
                if(data.name) setUserName(data.name);
            }
        } catch(e) {
            console.error("Failed to fetch profile name for certificate");
        }
    };
    fetchProfile();
  }, []);

  // Safe helper to get text
  const getText = (text: string | undefined, key: string | undefined): string => {
    if (text) return text;
    if (key) return t(key);
    return '';
  };

  const passingScore = 70;
  const isPassed = result.overallScore >= passingScore;

  useEffect(() => {
    // Save the score to context/backend
    saveAssignmentScore(course.id, result.overallScore);

    if (isPassed) {
      completeCourse(course.id, course.badge);
      showToast(t('toast_new_badge'));
    }
  }, [isPassed, course.id, course.badge, completeCourse, saveAssignmentScore, result.overallScore, showToast, t]);

  const scoreColor = isPassed ? 'text-green-500' : 'text-red-500';

  // Memoize the score breakdown to avoid re-calculating on every render
  const scoreBreakdown = useMemo(() => {
    if (!course.assignment) return [];
    
    return course.assignment.reviewCriteria.map(criterion => {
        const criterionName = getText(criterion.name, criterion.nameKey);
        // Find matching score, being resilient to potential minor translation mismatches from AI
        const resultCriterion = result.criteriaScores.find(cs => 
            cs.criterionName === criterionName || 
            cs.criterionName.includes(criterionName.substring(0, 10)) // Fallback partial match
        );
        return {
            ...criterion,
            score: resultCriterion ? resultCriterion.score : 0,
        };
    });
  }, [course.assignment, result.criteriaScores, t]);

  const handleDownloadCertificate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      setIsDownloading(true);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Canvas Config
      const width = 1200;
      const height = 800;
      canvas.width = width;
      canvas.height = height;

      // Background
      ctx.fillStyle = '#FDF7FF'; // Light purple tint
      ctx.fillRect(0, 0, width, height);

      // Border
      ctx.lineWidth = 20;
      ctx.strokeStyle = '#7C3AED'; // Primary purple
      ctx.strokeRect(40, 40, width - 80, height - 80);
      
      // Inner Border
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FDBA74'; // Accent orange
      ctx.strokeRect(55, 55, width - 110, height - 110);

      // Text Settings
      ctx.textAlign = 'center';
      
      // Header
      ctx.fillStyle = '#4C1D95';
      ctx.font = 'bold 60px Georgia';
      ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 180);

      // Presented To
      ctx.fillStyle = '#6B7280';
      ctx.font = 'italic 30px Arial';
      ctx.fillText('This certificate is proudly presented to', width / 2, 280);

      // Name
      ctx.fillStyle = '#1F2937';
      ctx.font = 'bold 70px Arial';
      ctx.fillText(userName, width / 2, 380);

      // Course Name
      ctx.fillStyle = '#6B7280';
      ctx.font = '30px Arial';
      ctx.fillText('For successfully completing the course:', width / 2, 480);
      
      ctx.fillStyle = '#7C3AED';
      ctx.font = 'bold 50px Arial';
      const courseTitle = getText(course.title, course.titleKey);
      ctx.fillText(courseTitle, width / 2, 560);

      // Date
      const dateStr = new Date().toLocaleDateString();
      ctx.fillStyle = '#4B5563';
      ctx.font = '30px Arial';
      ctx.fillText(`Awarded on ${dateStr}`, width / 2, 680);

      // Footer
      ctx.fillStyle = '#9CA3AF';
      ctx.font = '20px Arial';
      ctx.fillText('Shaktipath Learning • Verified by AI Review', width / 2, 750);

      // Generate Download
      setTimeout(() => {
          try {
              const dataUrl = canvas.toDataURL('image/png');
              const link = document.createElement('a');
              link.download = `Shaktipath_Certificate_${course.id}.png`;
              link.href = dataUrl;
              link.click();
              showToast("Certificate downloaded!");
          } catch (e) {
              console.error("Certificate generation failed", e);
              showToast("Could not generate certificate.");
          } finally {
              setIsDownloading(false);
          }
      }, 500);
  };

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('review_scorecard_title')}</h1>
      </header>

      <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
        <div className="text-center border-b border-neutral-200 dark:border-neutral-700 pb-6">
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('review_overall_score')}</p>
            <p className={`text-7xl font-display font-bold my-2 ${scoreColor}`}>{result.overallScore}</p>
            <p className={`font-semibold ${scoreColor}`}>{isPassed ? t('review_status_passed') : t('review_status_failed')}</p>
            
            {isPassed && (
                <div className="mt-4">
                    <button 
                        onClick={handleDownloadCertificate}
                        disabled={isDownloading}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-bold hover:bg-accent-200 transition-colors"
                    >
                        {isDownloading ? (
                            <span>Generating...</span>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Download Certificate</span>
                            </>
                        )}
                    </button>
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>
            )}
        </div>

        <div className="py-6 border-b border-neutral-200 dark:border-neutral-700">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{t('review_final_verdict')}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t(result.finalVerdictKey)}</p>
        </div>
        
        <div className="py-6 border-b border-neutral-200 dark:border-neutral-700">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{t('review_did_well')}</h3>
            {/* Display raw text directly, do not use t() */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{result.whatYouDidWell}</p>
        </div>
        
        <div className="py-6">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{t('review_improvement_tip')}</h3>
           {/* Display raw text directly, do not use t() */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{result.tipForImprovement}</p>
        </div>
      </div>
      
      <div className="mt-6 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">{t('review_breakdown')}</h3>
        <ul className="space-y-4">
            {scoreBreakdown.map((criterion, i) => (
                <li key={i}>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{getText(criterion.name, criterion.nameKey)}</span>
                        <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{criterion.score} / {criterion.maxScore}</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${(criterion.score / criterion.maxScore) * 100}%` }}></div>
                    </div>
                </li>
            ))}
        </ul>
      </div>

       <div className="mt-8">
        <button onClick={onBack} className="w-full bg-primary-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors">
            {t('review_back_to_course')}
        </button>
      </div>
    </div>
  );
};

export default AssignmentReviewPage;