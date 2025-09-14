"use client";

import React from 'react';
import { AppProvider } from '@/lib/context';
import { PinkSaltApp } from '@/components/PinkSaltApp';
import { LanguageSelector } from '@/components/LanguageSelector';

export default function Home() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
        {/* Header com seletor de idiomas */}
        <header className="relative w-full p-4">
          <div className="absolute top-4 right-4 z-40">
            <LanguageSelector />
          </div>
        </header>

        {/* App principal */}
        <div className="pt-8">
          <PinkSaltApp />
        </div>
      </div>
    </AppProvider>
  );
}