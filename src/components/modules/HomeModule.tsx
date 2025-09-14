"use client";

import React from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';

export function HomeModule() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop&crop=center" 
            alt="Pink Himalayan Salt" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.home.welcome}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{t.home.description}</p>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span>✨</span> {t.home.benefits.title}
        </h3>
        <div className="space-y-2">
          {t.home.benefits.list.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-pink-100 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-pink-600">7</div>
          <div className="text-xs text-gray-600">{t.home.stats.days}</div>
        </div>
        <div className="bg-white border border-pink-100 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-pink-600">100%</div>
          <div className="text-xs text-gray-600">{t.home.stats.natural}</div>
        </div>
      </div>

      {/* Daily Tip */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-200">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <span>💡</span> {t.home.dailyTip.title}
        </h3>
        <p className="text-sm text-gray-700">{t.home.dailyTip.content}</p>
      </div>

      {/* Beautiful Image Gallery */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Pink Salt Benefits</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop" 
              alt="Detox Water with Pink Salt" 
              className="w-full h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-2 text-white text-xs font-medium">Detox Water</div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=100&fit=crop" 
              alt="Herbal Tea with Pink Salt" 
              className="w-full h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-2 text-white text-xs font-medium">Herbal Tea</div>
          </div>
        </div>
      </div>
    </div>
  );
}