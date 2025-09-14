"use client";

import React, { useState, useEffect } from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';

export function ScheduleModule() {
  const { language } = useApp();
  const t = translations[language];
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('pinkSalt_completedDays');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  const toggleDay = (day: number) => {
    const newCompleted = completedDays.includes(day)
      ? completedDays.filter(d => d !== day)
      : [...completedDays, day];
    
    setCompletedDays(newCompleted);
    localStorage.setItem('pinkSalt_completedDays', JSON.stringify(newCompleted));
  };

  const getDaySchedule = (day: number) => {
    return {
      morning: t.schedule.days[`day${day}`]?.morning || t.schedule.defaultSchedule.morning,
      afternoon: t.schedule.days[`day${day}`]?.afternoon || t.schedule.defaultSchedule.afternoon,
      evening: t.schedule.days[`day${day}`]?.evening || t.schedule.defaultSchedule.evening
    };
  };

  const schedule = getDaySchedule(currentDay);
  const isCompleted = completedDays.includes(currentDay);
  const completionRate = Math.round((completedDays.length / 7) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{t.schedule.title}</h2>
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-4">
          <div className="text-2xl font-bold text-pink-600 mb-1">{completionRate}%</div>
          <div className="text-sm text-gray-600">{t.schedule.completed}</div>
        </div>
      </div>

      {/* Day Selector */}
      <div className="grid grid-cols-7 gap-1">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <button
            key={day}
            onClick={() => setCurrentDay(day)}
            className={`aspect-square rounded-xl text-sm font-semibold transition-all duration-200 ${
              currentDay === day
                ? 'bg-pink-500 text-white shadow-lg'
                : completedDays.includes(day)
                ? 'bg-green-100 text-green-600 border border-green-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Current Day Schedule */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {t.schedule.day} {currentDay}
          </h3>
          <button
            onClick={() => toggleDay(currentDay)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isCompleted
                ? 'bg-green-100 text-green-600 border border-green-200'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            }`}
          >
            {isCompleted ? '✓ ' + t.schedule.completed : t.schedule.markComplete}
          </button>
        </div>

        {/* Schedule Items */}
        <div className="space-y-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-600">🌅</span>
              <span className="font-semibold text-gray-800">{t.schedule.morning}</span>
            </div>
            <p className="text-sm text-gray-700">{schedule.morning}</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600">☀️</span>
              <span className="font-semibold text-gray-800">{t.schedule.afternoon}</span>
            </div>
            <p className="text-sm text-gray-700">{schedule.afternoon}</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-purple-600">🌙</span>
              <span className="font-semibold text-gray-800">{t.schedule.evening}</span>
            </div>
            <p className="text-sm text-gray-700">{schedule.evening}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-pink-400 to-rose-400 h-full transition-all duration-500"
          style={{ width: `${completionRate}%` }}
        />
      </div>
    </div>
  );
}