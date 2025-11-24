
import React, { useState } from 'react';
import { SparkleIcon } from './icons/SparkleIcon';
import { useI18n } from '../contexts/I18nContext';
import { API_BASE_URL } from '../config';

interface ResetPasswordPageProps {
  token: string;
  onPasswordResetSuccess: () => void;
  onBackToLogin: () => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ token, onPasswordResetSuccess, onBackToLogin }) => {
  const { t } = useI18n();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!password || !confirmPassword) {
      setError(t('error_enter_confirm_password'));
      return;
    }
    if (password !== confirmPassword) {
      setError(t('error_passwords_dont_match'));
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => {
            onPasswordResetSuccess();
        }, 2000);
      } else {
        setError(data.error || 'Failed to reset password.');
      }
    } catch (err) {
      setError('Could not connect to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl dark:bg-neutral-800">
        <div className="text-center">
            <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-4">
                <SparkleIcon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
            </div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t('set_new_password_title')}
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {t('set_new_password_subtitle')}
          </p>
        </div>
        
        {error && ( <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md dark:bg-red-900/40 dark:text-red-300"> {error} </div> )}
        {success && ( <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md dark:bg-green-900/40 dark:text-green-300"> {success} </div> )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input id="new-password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 text-neutral-900 dark:text-white dark:bg-neutral-700 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder={t('placeholder_new_password')} value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            </div>
            <div>
              <input id="confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 placeholder-neutral-500 text-neutral-900 dark:text-white dark:bg-neutral-700 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder={t('placeholder_confirm_password')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={isLoading} />
            </div>
          </div>
          <div>
            <button type="submit" disabled={isLoading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-400 disabled:cursor-not-allowed">
              {isLoading ? t('updating_button') : t('update_password_button')}
            </button>
          </div>
        </form>
         <div className="text-sm text-center">
            <button onClick={onBackToLogin} className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              {t('back_to_signin')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
