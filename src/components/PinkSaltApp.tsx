"use client";

import React from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { LanguageSelector } from './LanguageSelector';
import { HomeModule } from './modules/HomeModule';
import { RecipesModule } from './modules/RecipesModule';
import { ScheduleModule } from './modules/ScheduleModule';
import { CalculatorModule } from './modules/CalculatorModule';
import { NotesModule } from './modules/NotesModule';
import { TipsModule } from './modules/TipsModule';
import { SettingsModule } from './modules/SettingsModule';

export function PinkSaltApp() {
  const { language, currentModule, setCurrentModule } = useApp();
  const t = translations[language];

  const modules = [
    { id: 'home', name: t.nav.home, icon: '🏠', component: HomeModule },
    { id: 'recipes', name: t.nav.recipes, icon: '🍽️', component: RecipesModule },
    { id: 'schedule', name: t.nav.schedule, icon: '📅', component: ScheduleModule },
    { id: 'calculator', name: t.nav.calculator, icon: '🧮', component: CalculatorModule },
    { id: 'notes', name: t.nav.notes, icon: '📝', component: NotesModule },
    { id: 'tips', name: t.nav.tips, icon: '💡', component: TipsModule },
    { id: 'settings', name: t.nav.settings, icon: '⚙️', component: SettingsModule },
  ];

  const CurrentComponent = modules.find(m => m.id === currentModule)?.component || HomeModule;

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden min-h-[600px]">
      {/* Header with Language Selector */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-6 text-white relative">
        {/* Language Selector - Top Right */}
        <div className="absolute top-4 right-4">
          <LanguageSelector />
        </div>
        
        {/* Title and Subtitle */}
        <div className="pr-16"> {/* Add padding to avoid overlap with language selector */}
          <h1 className="text-2xl font-bold">Pink Salt Burn</h1>
          <p className="text-pink-100 text-sm mt-1">{t.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <CurrentComponent />
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 p-4">
        <div className="flex justify-around">
          {modules.slice(0, 4).map((module) => (
            <button
              key={module.id}
              onClick={() => setCurrentModule(module.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                currentModule === module.id
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl mb-1">{module.icon}</span>
              <span className="text-xs font-medium">{module.name}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-around mt-2">
          {modules.slice(4).map((module) => (
            <button
              key={module.id}
              onClick={() => setCurrentModule(module.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                currentModule === module.id
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl mb-1">{module.icon}</span>
              <span className="text-xs font-medium">{module.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}