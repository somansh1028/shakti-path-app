import React from 'react';
import { useToast } from '../../contexts/ToastContext';

const Toast: React.FC = () => {
  const { toastMessage, hideToast } = useToast();

  if (!toastMessage) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-neutral-800 text-white py-3 px-6 rounded-full shadow-lg animate-fade-in-up"
      role="alert"
    >
      <div className="flex items-center">
        <span className="font-semibold text-sm">{toastMessage}</span>
        <button onClick={hideToast} className="ml-4 text-neutral-300 hover:text-white" aria-label="Dismiss">
            &times;
        </button>
      </div>
      {/* FIX: The 'jsx' prop is not a standard React attribute for the <style> tag. Removing it resolves the TypeScript error. The style tag will still function correctly. */}
       <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Toast;