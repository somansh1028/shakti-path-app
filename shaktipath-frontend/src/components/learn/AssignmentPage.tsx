
import React, { useState } from 'react';
import type { Course, AIReviewResult } from '../../types';
import { useI18n } from '../../contexts/I18nContext';
import { generateGeminiResponse } from '../../services/geminiService';
import type { Part } from '@google/genai';
import { Type } from '@google/genai';
import { SparkleIcon } from '../icons/SparkleIcon';

interface AssignmentPageProps {
  course: Course;
  onBack: () => void;
  onReviewReceived: (result: AIReviewResult) => void;
}

// Helper: Resize and Compress Image using ObjectURL for memory efficiency
const processImageFile = (file: File): Promise<Part> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // Create a temporary URL for the file instead of reading it into memory as a string immediately
    const objectUrl = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(objectUrl); // Free up memory immediately
      
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 1024;
      const MAX_HEIGHT = 1024;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
           reject(new Error("Could not get canvas context"));
           return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to JPEG with 0.7 quality (highly efficient for AI analysis)
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      const base64Data = dataUrl.split(',')[1];

      resolve({
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Data
        }
      });
    };
    
    img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Failed to load image for processing"));
    };
    
    img.src = objectUrl;
  });
};

const AssignmentPage: React.FC<AssignmentPageProps> = ({ course, onBack, onReviewReceived }) => {
  const { t, language } = useI18n();
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selectedFiles = Array.from(event.target.files || []) as File[];
    
    if (selectedFiles.length !== 3) {
      setError(t('assignment_error_file_count'));
      return;
    }
    
    // Allow png, jpeg, and jpg
    const validFiles = selectedFiles.filter(file => 
        ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type) || file.name.toLowerCase().endsWith('.jpg')
    );
    
    if (validFiles.length !== 3) {
      setError(t('assignment_error_file_type'));
      return;
    }
    
    setFiles(validFiles);
    
    // Revoke old preview URLs to prevent memory leaks
    previews.forEach(url => URL.revokeObjectURL(url));
    
    const newPreviews = validFiles.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };
  
  const handleSessionExpired = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      window.location.reload();
  };

  const handleSubmit = async () => {
      if (files.length !== 3) {
        setError(t('assignment_error_file_count'));
        return;
      }
      
      setIsSubmitting(true);
      setError(null);

      const token = localStorage.getItem('authToken');
      if (!token) {
          setError("UNAUTHORIZED");
          setIsSubmitting(false);
          return;
      }

      const reviewCriteriaText = course.assignment!.reviewCriteria
        .map(c => `- ${t(c.nameKey)} (${c.maxScore} points): ${t(c.descriptionKey)}`)
        .join('\n');

      const prompt = `You are an expert design instructor reviewing a student's final project for the '${t(course.titleKey)}' course. The assignment was to create 3 social media posts.
      Please evaluate the three attached images based on the following criteria:
      ${reviewCriteriaText}

      Provide a final verdict (choose one: 'Excellent work!', 'Good job!', or 'A good start!'). Also provide a 'What You Did Well' summary and one key 'Tip for Improvement'.
      Your response must be in ${language} and structured as a JSON object.
      The final verdict should map to these keys: 'review_verdict_excellent', 'review_verdict_good', 'review_verdict_needs_improvement'.
      Do not include markdown in your JSON response.`;

      const responseSchema = {
          type: Type.OBJECT,
          properties: {
              overallScore: { type: Type.NUMBER },
              finalVerdictKey: { type: Type.STRING },
              whatYouDidWellKey: { type: Type.STRING },
              tipForImprovementKey: { type: Type.STRING },
              criteriaScores: {
                  type: Type.ARRAY,
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          criterionName: { type: Type.STRING },
                          score: { type: Type.NUMBER }
                      },
                      required: ["criterionName", "score"]
                  }
              }
          },
          required: ["overallScore", "finalVerdictKey", "whatYouDidWellKey", "tipForImprovementKey", "criteriaScores"]
      };

      try {
        // Process images (resize/compress) before sending
        const imageParts = await Promise.all(files.map(processImageFile));
        const contents: Part[] = [{ text: prompt }, ...imageParts];
        
        const result = await generateGeminiResponse(contents, token, responseSchema);
        onReviewReceived(result);
      } catch (err) {
        console.error("AI Review failed:", err);
        if (err instanceof Error && err.message.includes("UNAUTHORIZED")) {
            setError("UNAUTHORIZED");
        } else {
            setError(err instanceof Error ? err.message : "Something went wrong during AI review. Please try again.");
        }
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <div className="p-4 md:p-6 bg-neutral-50 dark:bg-neutral-900/50 min-h-full relative">
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center animate-bounce-subtle">
                <SparkleIcon className="w-16 h-16 text-primary-500 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{t('assignment_reviewing')}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-xs">
                    Analyzing your designs...<br/>
                    <span className="text-xs text-neutral-400 mt-2 block">Optimizing images & contacting AI</span>
                </p>
            </div>
        </div>
      )}

      <header className="relative flex items-center mb-6">
        <button onClick={onBack} disabled={isSubmitting} className="absolute left-0 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-50" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white text-center flex-1">{t('final_assignment')}</h1>
      </header>

      <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{t(course.assignment!.titleKey)}</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-6">{t(course.assignment!.descriptionKey)}</p>

        <div className={`bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 ${isSubmitting ? 'opacity-50' : ''}`}>
           <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{t('assignment_upload_title')}</h3>
           <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">{t('assignment_upload_desc')}</p>

            <div className="grid grid-cols-3 gap-3 mb-4 h-24">
                {previews.length > 0 ? previews.map((src, index) => (
                    <img key={index} src={src} className="w-full h-full object-cover rounded-md shadow-sm" alt={`Preview ${index + 1}`} />
                )) : Array.from({ length: 3 }).map((_, index) => (
                     <div key={index} className="w-full h-full bg-neutral-200 dark:bg-neutral-600 rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                     </div>
                ))}
            </div>

            <label htmlFor="file-upload" className={`w-full cursor-pointer bg-white dark:bg-neutral-700 text-center text-primary-600 dark:text-primary-300 font-bold py-2 px-4 rounded-lg border-2 border-dashed border-primary-300 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/40 block transition-colors ${isSubmitting ? 'cursor-not-allowed' : ''}`}>
                {t('assignment_select_files')}
            </label>
            <input id="file-upload" type="file" multiple accept="image/png, image/jpeg, image/jpg" onChange={handleFileChange} className="hidden" disabled={isSubmitting} />
        </div>
        
        {error && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 animate-fade-in">
                <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="font-bold text-red-800 dark:text-red-300">
                        {error === "UNAUTHORIZED" ? "Session Expired" : "Upload Failed"}
                    </h3>
                </div>
                
                <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                    {error === "UNAUTHORIZED" 
                        ? "Your secure session has timed out. Please log in again to submit your assignment." 
                        : error}
                </p>
                
                {error === "UNAUTHORIZED" && (
                    <button 
                        onClick={handleSessionExpired}
                        className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Log In Again
                    </button>
                )}
            </div>
        )}

        {error !== "UNAUTHORIZED" && (
            <button 
                onClick={handleSubmit} 
                disabled={files.length !== 3 || isSubmitting}
                className="w-full mt-6 bg-primary-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-700 transition-colors disabled:bg-neutral-300 dark:disabled:bg-neutral-600 disabled:cursor-not-allowed shadow-lg shadow-primary-600/20 disabled:shadow-none flex items-center justify-center">
                {isSubmitting ? (
                    <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                    </>
                ) : t('assignment_submit_button')}
            </button>
        )}
      </div>
    </div>
  );
};

export default AssignmentPage;
