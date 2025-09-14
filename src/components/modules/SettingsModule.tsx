"use client";

import React from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { LanguageSelector } from '../LanguageSelector';

export function SettingsModule() {
  const { language } = useApp();
  const t = translations[language];

  const clearAllData = () => {
    if (confirm(t.settings.confirmClear)) {
      localStorage.removeItem('pinkSalt_completedDays');
      localStorage.removeItem('pinkSalt_notes');
      localStorage.removeItem('pinkSalt_language');
      alert(t.settings.dataCleared);
      window.location.reload();
    }
  };

  const exportData = () => {
    const data = {
      completedDays: JSON.parse(localStorage.getItem('pinkSalt_completedDays') || '[]'),
      notes: JSON.parse(localStorage.getItem('pinkSalt_notes') || '[]'),
      language: localStorage.getItem('pinkSalt_language') || 'en',
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pink-salt-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStorageInfo = () => {
    const completedDays = JSON.parse(localStorage.getItem('pinkSalt_completedDays') || '[]');
    const notes = JSON.parse(localStorage.getItem('pinkSalt_notes') || '[]');
    
    return {
      completedDays: completedDays.length,
      notes: notes.length,
      totalSize: new Blob([JSON.stringify({ completedDays, notes })]).size
    };
  };

  const storageInfo = getStorageInfo();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{t.settings.title}</h2>
        <p className="text-sm text-gray-600">{t.settings.subtitle}</p>
      </div>

      {/* Language Settings */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🌐</span>
          {t.settings.language.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{t.settings.language.description}</p>
        <div className="flex justify-center">
          <LanguageSelector />
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-green-600">💾</span>
          {t.settings.data.title}
        </h3>
        
        {/* Storage Info */}
        <div className="bg-white rounded-xl p-3 mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-green-600">{storageInfo.completedDays}</div>
              <div className="text-xs text-gray-600">{t.settings.data.completedDays}</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">{storageInfo.notes}</div>
              <div className="text-xs text-gray-600">{t.settings.data.notes}</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600">{Math.round(storageInfo.totalSize / 1024)}KB</div>
              <div className="text-xs text-gray-600">{t.settings.data.storage}</div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={exportData}
          className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200 mb-3"
        >
          📥 {t.settings.data.export}
        </button>

        <p className="text-xs text-gray-600">{t.settings.data.exportDescription}</p>
      </div>

      {/* App Information */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-purple-600">ℹ️</span>
          {t.settings.about.title}
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>{t.settings.about.version}:</span>
            <span className="font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span>{t.settings.about.protocol}:</span>
            <span className="font-medium">Pink Salt Burn</span>
          </div>
          <div className="flex justify-between">
            <span>{t.settings.about.duration}:</span>
            <span className="font-medium">7 {t.settings.about.days}</span>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-yellow-600">🔒</span>
          {t.settings.privacy.title}
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>{t.settings.privacy.local}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>{t.settings.privacy.noServer}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>{t.settings.privacy.noTracking}</span>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-red-600">⚠️</span>
          {t.settings.danger.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{t.settings.danger.description}</p>
        <button
          onClick={clearAllData}
          className="w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors duration-200"
        >
          🗑️ {t.settings.danger.clearAll}
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 pt-4">
        <p>{t.settings.footer.madeWith} 💖</p>
        <p className="mt-1">{t.settings.footer.disclaimer}</p>
      </div>
    </div>
  );
}