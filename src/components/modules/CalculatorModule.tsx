"use client";

import React, { useState } from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { Calculator, Droplets, Scale } from 'lucide-react';

export function CalculatorModule() {
  const { language } = useApp();
  const t = translations[language];
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [result, setResult] = useState<{
    water: number;
    salt: number;
  } | null>(null);

  const calculateIntake = () => {
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) return;

    // Base water calculation: 35ml per kg
    let waterBase = weightNum * 35;
    
    // Adjust for activity level
    const multipliers = {
      low: 1.0,
      moderate: 1.2,
      high: 1.4,
      very_high: 1.6
    };
    
    const totalWater = waterBase * multipliers[activityLevel as keyof typeof multipliers];
    
    // Pink salt calculation: 1g per liter of water
    const saltAmount = totalWater / 1000;

    setResult({
      water: Math.round(totalWater),
      salt: Math.round(saltAmount * 10) / 10
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=64&h=64&fit=crop&crop=center" 
            alt="Health Calculator" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.calculator.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{t.calculator.subtitle}</p>
      </div>

      {/* Calculator Form */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.calculator.weight}
            </label>
            <div className="relative">
              <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">kg</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.calculator.activity}
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="low">{t.calculator.activityLevels.low}</option>
              <option value="moderate">{t.calculator.activityLevels.moderate}</option>
              <option value="high">{t.calculator.activityLevels.high}</option>
              <option value="very_high">{t.calculator.activityLevels.veryHigh}</option>
            </select>
          </div>

          <button
            onClick={calculateIntake}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            {t.calculator.calculate}
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-100">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span>📊</span> {t.calculator.results}
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-3 text-center">
              <Droplets className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{result.water}</div>
              <div className="text-xs text-gray-600">{t.calculator.waterUnit}</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center">
              <div className="w-6 h-6 mx-auto mb-2 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=24&h=24&fit=crop" 
                  alt="Pink Salt" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold text-pink-600">{result.salt}</div>
              <div className="text-xs text-gray-600">{t.calculator.saltUnit}</div>
            </div>
          </div>
        </div>
      )}

      {/* Visual Guide */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Visual Guide</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop" 
              alt="Daily Water Intake" 
              className="w-full h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-2 text-white text-xs font-medium">Daily Water</div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=100&fit=crop" 
              alt="Pink Salt Portion" 
              className="w-full h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-1 left-2 text-white text-xs font-medium">Salt Portion</div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-200">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <span>💡</span> {t.calculator.tips.title}
        </h3>
        <ul className="space-y-1">
          {t.calculator.tips.list.map((tip, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}