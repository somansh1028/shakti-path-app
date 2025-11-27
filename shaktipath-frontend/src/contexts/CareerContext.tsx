
import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';
import type { Prospect, ProspectStatus, Gig } from '../types';
import { API_BASE_URL, getHeaders } from '../config';

interface CareerContextType {
  prospects: Prospect[];
  addProspectFromGig: (gig: Gig) => void;
  addManualProspect: (name: string, type: string) => void;
  updateProspectStatus: (id: string, status: ProspectStatus) => void;
  removeProspect: (id: string) => void;
  isGigAdded: (gigName: string) => boolean;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prospects, setProspects] = useState<Prospect[]>([]);

  // --- FETCH FROM BACKEND ---
  const fetchProspects = useCallback(async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
          // Fallback to local storage if offline/demo or just as a cache
          const saved = localStorage.getItem('my_prospects');
          if (saved) setProspects(JSON.parse(saved));
          return;
      }

      try {
          const res = await fetch(`${API_BASE_URL}/api/career/prospects`, { headers: getHeaders(token) });
          if (res.status === 401) {
              window.dispatchEvent(new Event('auth-unauthorized'));
              return;
          }
          if (res.ok) {
              const data = await res.json();
              setProspects(data.prospects || []);
          }
      } catch (error) {
          console.error("Failed to fetch prospects:", error);
      }
  }, []);

  useEffect(() => {
      fetchProspects();
  }, [fetchProspects]);

  // Helper to sync local changes to DB
  const syncAdd = async (prospect: Prospect) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
          localStorage.setItem('my_prospects', JSON.stringify([...prospects, prospect]));
          return; 
      }
      try {
          const res = await fetch(`${API_BASE_URL}/api/career/prospects`, {
              method: 'POST',
              headers: getHeaders(token),
              body: JSON.stringify({ prospect })
          });
          if (res.status === 401) window.dispatchEvent(new Event('auth-unauthorized'));
      } catch (e) { console.error("Sync add failed", e); }
  };

  const syncUpdate = async (id: string, status: ProspectStatus) => {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      try {
          const res = await fetch(`${API_BASE_URL}/api/career/prospects/${id}`, {
              method: 'PUT',
              headers: getHeaders(token),
              body: JSON.stringify({ status })
          });
          if (res.status === 401) window.dispatchEvent(new Event('auth-unauthorized'));
      } catch (e) { console.error("Sync update failed", e); }
  };

  const syncRemove = async (id: string) => {
      const token = localStorage.getItem('authToken');
      if (!token) return;
      try {
          const res = await fetch(`${API_BASE_URL}/api/career/prospects/${id}`, {
              method: 'DELETE',
              headers: getHeaders(token)
          });
          if (res.status === 401) window.dispatchEvent(new Event('auth-unauthorized'));
      } catch (e) { console.error("Sync delete failed", e); }
  };

  const addProspectFromGig = (gig: Gig) => {
    const newProspect: Prospect = {
      id: Date.now().toString(),
      name: gig.name,
      businessType: gig.businessType,
      status: 'Lead',
      contact: gig.contact
    };
    setProspects(prev => {
        const updated = [...prev, newProspect];
        if (!localStorage.getItem('authToken')) localStorage.setItem('my_prospects', JSON.stringify(updated));
        return updated;
    });
    syncAdd(newProspect);
  };

  const addManualProspect = (name: string, type: string) => {
    const newProspect: Prospect = {
      id: Date.now().toString(),
      name: name,
      businessType: type,
      status: 'Lead'
    };
    setProspects(prev => {
        const updated = [...prev, newProspect];
        if (!localStorage.getItem('authToken')) localStorage.setItem('my_prospects', JSON.stringify(updated));
        return updated;
    });
    syncAdd(newProspect);
  };

  const updateProspectStatus = (id: string, status: ProspectStatus) => {
    setProspects(prev => prev.map(p => p.id === id ? { ...p, status: status } : p));
    syncUpdate(id, status);
  };

  const removeProspect = (id: string) => {
    setProspects(prev => prev.filter(p => p.id !== id));
    syncRemove(id);
  };

  const isGigAdded = (gigName: string) => {
    return prospects.some(p => p.name.toLowerCase() === gigName.toLowerCase());
  };

  return (
    <CareerContext.Provider value={{ 
      prospects, 
      addProspectFromGig, 
      addManualProspect, 
      updateProspectStatus, 
      removeProspect,
      isGigAdded
    }}>
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = (): CareerContextType => {
  const context = useContext(CareerContext);
  if (context === undefined) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
};
