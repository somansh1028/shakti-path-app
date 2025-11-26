
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../../contexts/I18nContext';
import type { Prospect, ProspectStatus } from '../../../types';

interface MyProspectsPageProps {
  onBack: () => void;
}

const MyProspectsPage: React.FC<MyProspectsPageProps> = ({ onBack }) => {
  const { t } = useI18n();
  const [prospects, setProspects] = useState<Prospect[]>(() => {
      const saved = localStorage.getItem('my_prospects');
      return saved ? JSON.parse(saved) : [];
  });
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newBizType, setNewBizType] = useState('');

  useEffect(() => {
      localStorage.setItem('my_prospects', JSON.stringify(prospects));
  }, [prospects]);

  const addProspect = () => {
      if (!newName) return;
      const newP: Prospect = {
          id: Date.now().toString(),
          name: newName,
          businessType: newBizType || 'Local Business',
          status: 'Lead'
      };
      setProspects(prev => [newP, ...prev]);
      setNewName('');
      setNewBizType('');
      setIsAdding(false);
  };

  const updateStatus = (id: string, newStatus: ProspectStatus) => {
      setProspects(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const deleteProspect = (id: string) => {
      setProspects(prev => prev.filter(p => p.id !== id));
  };

  const statusColors: Record<ProspectStatus, string> = {
      'Lead': 'bg-blue-100 text-blue-700 border-blue-200',
      'Contacted': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Follow-up': 'bg-orange-100 text-orange-700 border-orange-200',
      'Closed': 'bg-green-100 text-green-700 border-green-200'
  };

  return (
    <div className="p-4 md:p-6 bg-amber-50 dark:bg-amber-950/30 min-h-full">
      <header className="relative flex items-center mb-6">
        <button onClick={onBack} className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800 dark:text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-amber-900 dark:text-amber-100 text-center flex-1">{t('career_tool_my_prospects_title')}</h1>
        <button onClick={() => setIsAdding(!isAdding)} className="absolute right-0 p-2 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
        </button>
      </header>

      {isAdding && (
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-lg mb-6 animate-fade-in">
              <input 
                placeholder="Business Name (e.g. Gupta Sweets)" 
                className="w-full p-3 mb-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700"
                value={newName} onChange={e => setNewName(e.target.value)}
              />
              <input 
                placeholder="Type (e.g. Bakery)" 
                className="w-full p-3 mb-3 rounded-xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700"
                value={newBizType} onChange={e => setNewBizType(e.target.value)}
              />
              <button onClick={addProspect} className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl">Add Prospect</button>
          </div>
      )}

      <div className="space-y-3">
          {prospects.length === 0 ? (
              <p className="text-center text-neutral-500 mt-10">No prospects yet. Add one to start tracking!</p>
          ) : (
              prospects.map(p => (
                  <div key={p.id} className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-sm border-l-4 border-amber-400">
                      <div className="flex justify-between items-start mb-3">
                          <div>
                              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{p.name}</h3>
                              <p className="text-xs text-neutral-500">{p.businessType}</p>
                          </div>
                          <button onClick={() => deleteProspect(p.id)} className="text-neutral-300 hover:text-red-500">×</button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                          {(['Lead', 'Contacted', 'Closed'] as ProspectStatus[]).map(status => (
                              <button
                                key={status}
                                onClick={() => updateStatus(p.id, status)}
                                className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                                    p.status === status ? statusColors[status] : 'bg-transparent border-neutral-200 text-neutral-400'
                                }`}
                              >
                                  {status}
                              </button>
                          ))}
                      </div>
                  </div>
              ))
          )}
      </div>
    </div>
  );
};

export default MyProspectsPage;
