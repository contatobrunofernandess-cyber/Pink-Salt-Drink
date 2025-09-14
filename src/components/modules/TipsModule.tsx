"use client";

import React, { useState } from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { nutritionTips } from '@/lib/data';
import { Droplets, Clock, Sparkles, Dumbbell, Moon, Zap, ChevronRight } from 'lucide-react';

const iconMap = {
  Droplets,
  Clock,
  Sparkles,
  Dumbbell,
  Moon,
  Zap
};

export function TipsModule() {
  const { language } = useApp();
  const t = translations[language];
  const [expandedTip, setExpandedTip] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=64&h=64&fit=crop&crop=center" 
            alt="Wellness Tips" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.tips.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{t.tips.subtitle}</p>
      </div>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" 
          alt="Pink Himalayan Salt Crystals" 
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 left-4 text-white">
          <h3 className="font-semibold text-sm">Pure Pink Himalayan Salt</h3>
          <p className="text-xs text-gray-200">84 Essential Minerals for Optimal Health</p>
        </div>
      </div>

      <div className="space-y-3">
        {nutritionTips.map((tip) => {
          const IconComponent = iconMap[tip.icon as keyof typeof iconMap];
          const isExpanded = expandedTip === tip.id;
          
          return (
            <div 
              key={tip.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div 
                onClick={() => setExpandedTip(isExpanded ? null : tip.id)}
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{tip.title}</h3>
                      {!isExpanded && (
                        <p className="text-gray-600 text-xs mt-1 line-clamp-1">{tip.content}</p>
                      )}
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
                
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed">{tip.content}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Wellness Gallery */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 mt-6">
        <h3 className="font-semibold text-gray-800 mb-3">Wellness Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=80&fit=crop" 
              alt="Detox Water" 
              className="w-full h-16 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Hydration</div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=80&fit=crop" 
              alt="Herbal Tea" 
              className="w-full h-16 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Relaxation</div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=80&fit=crop" 
              alt="Wellness" 
              className="w-full h-16 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Wellness</div>
          </div>
        </div>
      </div>
    </div>
  );
}