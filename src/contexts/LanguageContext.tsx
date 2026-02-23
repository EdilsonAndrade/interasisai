"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language } from '../i18n/dictionaries';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: typeof dictionaries.pt;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('language') as Language;
        if (stored && dictionaries[stored]) return stored;
        
        const browserLang = navigator.language.split('-')[0];
        if (dictionaries[browserLang as Language]) return browserLang as Language;
      } catch {
        // Ignora erros de leitura do localStorage
      }
    }
    return 'pt'; // Default seguro para SSR
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Usando setTimeout (microtask) para evitar o aviso de setState síncrono no primeiro render
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const dict = dictionaries[language];

  // Para evitar hydration mismatch devido as strings no SSG
  if (!mounted) {
    return <div className="min-h-screen bg-bg-main" />; 
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
