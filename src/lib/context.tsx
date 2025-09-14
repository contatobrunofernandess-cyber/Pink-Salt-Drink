"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt' | 'it' | 'de' | 'es';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentModule: string;
  setCurrentModule: (module: string) => void;
  userProgress: any;
  setUserProgress: (progress: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Inglês como padrão
  const [currentModule, setCurrentModule] = useState('home');
  const [userProgress, setUserProgress] = useState({});

  // Carregar preferências salvas
  useEffect(() => {
    const savedLanguage = localStorage.getItem('pinkSaltLanguage') as Language;
    const savedProgress = localStorage.getItem('pinkSaltProgress');
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Salvar preferências
  useEffect(() => {
    localStorage.setItem('pinkSaltLanguage', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('pinkSaltProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      currentModule,
      setCurrentModule,
      userProgress,
      setUserProgress
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}