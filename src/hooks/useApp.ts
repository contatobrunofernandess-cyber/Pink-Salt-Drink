// Hooks personalizados para o Pink Salt Burn Protocol
'use client';

import { useState, useEffect } from 'react';

// Hook para notificações push simuladas
export function useNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    }
    return 'denied';
  };

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (permission === 'granted') {
      new Notification(title, {
        icon: '/icon.svg',
        badge: '/icon.svg',
        ...options
      });
    }
  };

  return { permission, requestPermission, sendNotification };
}

// Hook para gerenciar lembretes diários
export function useDailyReminders() {
  const { sendNotification } = useNotifications();

  const scheduleReminders = () => {
    const reminders = [
      { time: '07:00', message: '🌅 Hora da água com sal rosa matinal!' },
      { time: '10:00', message: '💧 Lembre-se de beber água com sal rosa' },
      { time: '15:00', message: '🥗 Que tal um lanche saudável?' },
      { time: '17:00', message: '💧 Hidrate-se com sal rosa' },
      { time: '21:00', message: '🌙 Hora do chá relaxante' }
    ];

    reminders.forEach(reminder => {
      const [hours, minutes] = reminder.time.split(':').map(Number);
      const now = new Date();
      const reminderTime = new Date();
      reminderTime.setHours(hours, minutes, 0, 0);

      if (reminderTime <= now) {
        reminderTime.setDate(reminderTime.getDate() + 1);
      }

      const timeUntilReminder = reminderTime.getTime() - now.getTime();

      setTimeout(() => {
        sendNotification('Pink Salt Burn Protocol', {
          body: reminder.message,
          tag: `reminder-${reminder.time}`
        });
      }, timeUntilReminder);
    });
  };

  return { scheduleReminders };
}

// Hook para persistência de dados offline
export function useOfflineStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error loading ${key} from localStorage:`, error);
    }
  }, [key]);

  const setStoredValue = (newValue: T) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.warn(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [value, setStoredValue] as const;
}

// Hook para calcular progresso semanal
export function useWeeklyProgress() {
  const [weeklyData, setWeeklyData] = useState({
    waterGoal: 0,
    waterConsumed: 0,
    tasksCompleted: 0,
    totalTasks: 0,
    weekStart: new Date()
  });

  const updateProgress = (type: 'water' | 'task', amount: number = 1) => {
    setWeeklyData(prev => ({
      ...prev,
      ...(type === 'water' 
        ? { waterConsumed: prev.waterConsumed + amount }
        : { tasksCompleted: prev.tasksCompleted + amount }
      )
    }));
  };

  const resetWeeklyProgress = () => {
    setWeeklyData({
      waterGoal: 0,
      waterConsumed: 0,
      tasksCompleted: 0,
      totalTasks: 0,
      weekStart: new Date()
    });
  };

  const getProgressPercentage = (type: 'water' | 'tasks') => {
    if (type === 'water') {
      return weeklyData.waterGoal > 0 
        ? Math.min((weeklyData.waterConsumed / weeklyData.waterGoal) * 100, 100)
        : 0;
    }
    return weeklyData.totalTasks > 0
      ? (weeklyData.tasksCompleted / weeklyData.totalTasks) * 100
      : 0;
  };

  return {
    weeklyData,
    updateProgress,
    resetWeeklyProgress,
    getProgressPercentage
  };
}