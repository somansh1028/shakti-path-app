
import React, { useState } from 'react';
import { SparkleIcon } from './icons/SparkleIcon';
import { useI18n } from '../contexts/I18nContext';

type FormMode = 'login' | 'register' | 'forgotPassword';

interface LoginPageProps {
  onLoginAttempt: (email: string, password: string) => Promise<void>;
  onRegisterAttempt: (email: string, password: string) => Promise<{success: boolean}>;
  onForgotPasswordAttempt: (email: string) => Promise<void>;
  onToggleForm: () => void;
  onGoToResetPage: (token: string) => void;
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

const LoginPage: React.FC<LoginPageProps> = ({ 
  onLoginAttempt, 
  onRegisterAttempt,
  onForgotPasswordAttempt,
  onToggleForm, 
  onGoToResetPage,
  isLoading, 
  error, 
  success 
}) => {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<FormMode>('login');
  
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null); 
    
    if (!email) {
      setFormError(t('error_enter_email'));
      return;
    }
    if (mode !== 'forgotPassword' && !password) {
      setFormError(t('error_enter_password'));
      return;
    }

    if (mode === 'register') {
      const result = await onRegisterAttempt(email, password);
       if (result.success) {
        setMode('login'); 
        setEmail('');
        setPassword('');
      }
    } else if (mode === 'login') {
      await onLoginAttempt(email, password);
    } else if (mode === 'forgotPassword') {
      await onForgotPasswordAttempt(email);
      setMode('login');
    }
  };

  const switchMode = (newMode: FormMode) => {
    setMode(newMode);
    onToggleForm();
    setFormError(null);
    setEmail('');
    setPassword('');
  };

  const getTitle = () => {
    if (mode === 'register') return t('create_account_title');
    if (mode === 'forgotPassword') return t('reset_password_title');
    return t('welcome_back_title');
  };

  const getSubtitle = () => {
    if (mode === 'register') return t('get_started_subtitle');
    if (mode === 'forgotPassword') return t('reset_link_subtitle');
    return t('sign_in_subtitle');
  };

  const currentError = error || formError;
  const showSuccess = (success && (mode === 'login'));

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col md:flex-row">
      
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white dark:bg-neutral-800 shadow-2xl z-10">
        <div className="max-w-md mx-auto w-full">
            <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-6">
                <SparkleIcon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
            
            <h1 className="text-4xl font-display font-bold text-neutral-900 dark:text-white mb-2">{getTitle()}</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">{getSubtitle()}</p>
            
            {currentError && ( <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl dark:bg-red-900/30 dark:border-red-800 dark:text-red-300"> {currentError} </div> )}
            {showSuccess && ( <div className="p-4 mb-6 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl dark:bg-green-900/30 dark:border-green-800 dark:text-green-300"> {success} </div> )}
            
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{t('placeholder_email')}</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-shadow" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                </div>
                
                {mode !== 'forgotPassword' && (
                <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{t('placeholder_password')}</label>
                    <input id="password" name="password" type="password" autoComplete={mode === 'register' ? 'new-password' : 'current-password'} required className="appearance-none block w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-shadow" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
                </div>
                )}

                {mode === 'login' && (
                    <div className="flex items-center justify-end">
                    <button type="button" onClick={() => switchMode('forgotPassword')} className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
                        {t('forgot_password_link')}
                    </button>
                    </div>
                )}

                <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-400 disabled:cursor-not-allowed shadow-lg shadow-primary-600/30 transition-all transform hover:scale-[1.02]">
                    {isLoading ? t('processing_button') : (mode === 'register' ? t('create_account_button') : mode === 'login' ? t('sign_in_button') : t('send_reset_link_button'))}
                </button>
            </form>

            <div className="mt-6 text-center">
                <button onClick={() => switchMode(mode === 'register' ? 'login' : mode === 'forgotPassword' ? 'login' : 'register')} className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                    {mode === 'register' ? t('already_have_account') : t('dont_have_account')}
                    {mode === 'forgotPassword' && t('back_to_signin')}
                </button>
            </div>
        </div>
      </div>

      {/* Right Side: Social Proof & Visuals */}
      <div className="hidden md:flex w-1/2 bg-primary-50 dark:bg-neutral-900 flex-col justify-between p-12 relative overflow-hidden">
         {/* Background Blobs */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/50 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/50 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

         <div className="relative z-10 mt-10">
             <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-6">
                 {t('lp_hero_title')}
             </h2>
             
             {/* Stats Grid */}
             <div className="grid grid-cols-2 gap-4 mb-10">
                 <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                     <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">20+</p>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('lp_stat_users')}</p>
                 </div>
                 <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                     <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">4.8/5</p>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('lp_stat_rating')}</p>
                 </div>
                 <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                     <p className="text-3xl font-bold text-green-600 dark:text-green-400">50+</p>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('lp_stat_courses')}</p>
                 </div>
                 <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                     <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">Free</p>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('lp_stat_cost')}</p>
                 </div>
             </div>

             {/* Testimonials */}
             <div>
                 <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{t('lp_reviews_title')}</p>
                 <div className="space-y-4">
                     <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border-l-4 border-primary-500">
                         <p className="text-sm text-neutral-700 dark:text-neutral-300 italic mb-2">"{t('lp_review_1')}"</p>
                         <div className="flex items-center">
                             <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-xs font-bold text-primary-700 mr-2">R</div>
                             <span className="text-xs font-bold text-neutral-900 dark:text-white">Riya S.</span>
                             <span className="text-xs text-neutral-400 ml-2">• High School Student</span>
                         </div>
                     </div>
                     <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border-l-4 border-accent-500">
                         <p className="text-sm text-neutral-700 dark:text-neutral-300 italic mb-2">"{t('lp_review_2')}"</p>
                         <div className="flex items-center">
                             <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center text-xs font-bold text-accent-700 mr-2">A</div>
                             <span className="text-xs font-bold text-neutral-900 dark:text-white">Anita K.</span>
                             <span className="text-xs text-neutral-400 ml-2">• College Student</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

         <div className="text-xs text-neutral-400 mt-8 relative z-10">
             © 2025 Shaktipath Learning. Empowering Indian Girls.
         </div>
      </div>
    </div>
  );
};

export default LoginPage;
