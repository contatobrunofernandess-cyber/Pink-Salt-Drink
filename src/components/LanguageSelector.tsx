"use client";

import React, { useState } from 'react';
import { useApp } from '@/lib/context';
import { languageNames } from '@/lib/translations';

type Language = 'en' | 'pt' | 'it' | 'de' | 'es';

const languageFlags = {
  en: '🇺🇸',
  pt: '🇧🇷', 
  it: '🇮🇹',
  de: '🇩🇪',
  es: '🇪🇸'
};

export function LanguageSelector() {
  const { language, setLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
      >
        <span className="text-lg">{languageFlags[language]}</span>
        <span className="text-sm font-medium hidden sm:block">{languageNames[language]}</span>
        <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-20 min-w-[180px]">
            {Object.entries(languageNames).map(([code, name]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  language === code ? 'bg-pink-50 text-pink-600' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{languageFlags[code as Language]}</span>
                <span className="font-medium">{name}</span>
                {language === code && (
                  <span className="ml-auto text-pink-500">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}