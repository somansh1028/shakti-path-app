import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { useUserProgress } from '../../contexts/UserProgressContext';
import { getLearningPaths } from '../../data/learningData';
import { API_BASE_URL, getHeaders } from '../../config';
import { useToast } from '../../contexts/ToastContext';

const ProgressPage: React.FC = () => {
  const { t, language } = useI18n();
  const { points, completedLessonIds, completedCourseIds, earnedBadges } = useUserProgress();
  const { showToast } = useToast();
  
  const [userName, setUserName] = useState<string>('Learner');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const learningPaths = getLearningPaths(language);

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

  // Helper to safely get text from optional name or nameKey
  const getText = (text?: string, key?: string) => text || (key ? t(key) : '');

  // 1. Identify Earned Course Certificates
  // DEDUPLICATION FIX: Use a Map to ensure we only show one certificate per unique course TITLE.
  // This handles cases where the same course content (e.g. Canva) is reused with different IDs in different paths.
  const uniqueEarnedCourses = new Map();
  learningPaths.forEach(path => {
      path.courses.forEach(course => {
          if (completedCourseIds.has(course.id)) {
              // Use titleKey as the unique identifier for the certificate content
              const uniqueKey = course.titleKey || course.id;
              if (!uniqueEarnedCourses.has(uniqueKey)) {
                  uniqueEarnedCourses.set(uniqueKey, course);
              }
          }
      });
  });

  const earnedCourseCerts = Array.from(uniqueEarnedCourses.values()).map((course: any) => ({
      id: course.id,
      title: getText(course.title, course.titleKey),
      type: 'Course' as const,
      date: new Date().toLocaleDateString()
  }));

  // 2. Identify Earned Path Certificates
  const earnedPathCerts = learningPaths.filter(path => {
      // A path is mastered if it has courses AND all its courses are completed
      return path.courses.length > 0 && path.courses.every(course => completedCourseIds.has(course.id));
  }).map(path => ({
      id: path.id,
      title: getText(path.title, path.titleKey),
      type: 'Path' as const,
      date: new Date().toLocaleDateString()
  }));

  // Different pastel styles for each stat card
  const statCards = [
    { 
        labelKey: 'progress_points', 
        value: points, 
        style: 'bg-amber-50 border-amber-100 text-amber-600 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400' 
    },
    { 
        labelKey: 'progress_lessons', 
        value: completedLessonIds.size, 
        style: 'bg-sky-50 border-sky-100 text-sky-600 dark:bg-sky-900/20 dark:border-sky-800 dark:text-sky-400' 
    },
    { 
        labelKey: 'progress_paths', 
        value: earnedPathCerts.length, 
        style: 'bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400' 
    },
  ];

  const handleDownload = (title: string, type: 'Course' | 'Path') => {
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
      ctx.fillStyle = type === 'Path' ? '#FFFBEB' : '#FDF7FF'; // Gold tint for Path, Purple tint for Course
      ctx.fillRect(0, 0, width, height);

      // Border
      ctx.lineWidth = 20;
      ctx.strokeStyle = type === 'Path' ? '#B45309' : '#7C3AED'; // Gold or Purple
      ctx.strokeRect(40, 40, width - 80, height - 80);
      
      // Inner Border
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FDBA74'; 
      ctx.strokeRect(55, 55, width - 110, height - 110);

      // Text Settings
      ctx.textAlign = 'center';
      
      // Header
      ctx.fillStyle = type === 'Path' ? '#92400E' : '#4C1D95';
      ctx.font = 'bold 60px Georgia';
      const headerText = type === 'Path' ? t('cert_mastery') : t('cert_achievement');
      ctx.fillText(headerText.toUpperCase(), width / 2, 180);

      // Presented To
      ctx.fillStyle = '#6B7280';
      ctx.font = 'italic 30px Arial';
      ctx.fillText(t('cert_presented_to'), width / 2, 280);

      // Name
      ctx.fillStyle = '#1F2937';
      ctx.font = 'bold 70px Arial';
      ctx.fillText(userName, width / 2, 380);

      // Description
      ctx.fillStyle = '#6B7280';
      ctx.font = '30px Arial';
      const descText = type === 'Path' ? t('cert_completed_path') : t('cert_completed_course');
      ctx.fillText(descText, width / 2, 480);
      
      // Title
      ctx.fillStyle = type === 'Path' ? '#B45309' : '#7C3AED';
      ctx.font = 'bold 50px Arial';
      ctx.fillText(title, width / 2, 560);

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
              link.download = `Shaktipath_${type}_Certificate.png`;
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
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t('progress_title')}</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {statCards.map(card => (
          <div key={card.labelKey} className={`rounded-2xl p-4 text-center border-2 ${card.style} transition-transform hover:scale-105 shadow-sm`}>
            <p className="text-3xl font-bold mb-1">{card.value}</p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80">{t(card.labelKey)}</p>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="space-y-6 mb-8">
          
          {/* Path Mastery Certificates */}
          {earnedPathCerts.length > 0 && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-6 border border-amber-100 dark:border-amber-800 shadow-sm">
                  <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center">
                      <span className="bg-white dark:bg-amber-800 p-1.5 rounded-lg mr-2 shadow-sm">🏆</span> 
                      {t('progress_certs_paths')}
                  </h3>
                  <div className="space-y-3">
                      {earnedPathCerts.map((cert, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border border-amber-100 dark:border-neutral-700">
                              <div>
                                  <p className="font-bold text-neutral-900 dark:text-white">{cert.title}</p>
                                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{cert.date}</p>
                              </div>
                              <button 
                                onClick={() => handleDownload(cert.title, 'Path')}
                                disabled={isDownloading}
                                className="px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-full hover:bg-amber-600 transition-colors shadow-md flex items-center"
                              >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                  {t('progress_download')}
                              </button>
                          </div>
                      ))}
                  </div>
              </div>
          )}

          {/* Course Certificates */}
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-primary-50 dark:bg-primary-900/30 p-1.5 rounded-lg mr-2 shadow-sm">📜</span>
                  {t('progress_certs_courses')}
              </h3>
              
              {earnedCourseCerts.length === 0 ? (
                  <div className="text-center py-6 text-neutral-500 dark:text-neutral-400 text-sm italic bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-700">
                      Complete a course assignment to earn a certificate!
                  </div>
              ) : (
                  <div className="space-y-3">
                      {earnedCourseCerts.map((cert, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-neutral-50 dark:bg-neutral-700/30 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 transition-colors">
                              <div>
                                  <p className="font-bold text-neutral-800 dark:text-neutral-200 text-sm">{cert.title}</p>
                                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{cert.date}</p>
                              </div>
                              <button 
                                onClick={() => handleDownload(cert.title, 'Course')}
                                disabled={isDownloading}
                                className="p-2 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-full transition-colors"
                                title="Download Certificate"
                              >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                              </button>
                          </div>
                      ))}
                  </div>
              )}
          </div>
      </div>

      {/* Badges Section */}
      <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm p-6 border border-neutral-100 dark:border-neutral-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{t('progress_badges_title')}</h3>
          {earnedBadges.length > 0 && (
            <button className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
              {t('progress_view_all')}
            </button>
          )}
        </div>
        
        {earnedBadges.length === 0 ? (
          <div className="text-center py-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-700">
              <p className="text-3xl mb-2">🏆</p>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{t('progress_badges_empty')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {earnedBadges.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center text-4xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 ring-4 ring-white dark:ring-neutral-800">
                    {badge.icon}
                </div>
                <p className="text-xs font-bold text-neutral-700 dark:text-neutral-300 leading-tight px-1">
                    {getText(badge.name, badge.nameKey)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hidden Canvas for Certificate Generation */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default ProgressPage;