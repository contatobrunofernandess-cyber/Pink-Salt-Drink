// Utilitários para o Pink Salt Burn Protocol
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatação de datas
export function formatDate(date: Date, locale: string = 'pt-BR'): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}

export function formatTime(date: Date, locale: string = 'pt-BR'): string {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

// Cálculos de saúde
export function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

export function getBMICategory(bmi: number, language: string = 'pt'): string {
  const categories = {
    pt: {
      underweight: 'Abaixo do peso',
      normal: 'Peso normal',
      overweight: 'Sobrepeso',
      obese: 'Obesidade'
    },
    en: {
      underweight: 'Underweight',
      normal: 'Normal weight',
      overweight: 'Overweight',
      obese: 'Obese'
    }
  };

  const lang = categories[language as keyof typeof categories] || categories.pt;

  if (bmi < 18.5) return lang.underweight;
  if (bmi < 25) return lang.normal;
  if (bmi < 30) return lang.overweight;
  return lang.obese;
}

// Cálculo de água recomendada
export function calculateWaterIntake(
  weight: number, 
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'intense' = 'moderate',
  climate: 'cold' | 'temperate' | 'hot' = 'temperate'
): number {
  let baseIntake = weight * 0.035; // 35ml por kg

  // Ajuste por atividade física
  const activityMultipliers = {
    sedentary: 1,
    light: 1.2,
    moderate: 1.4,
    intense: 1.6
  };

  // Ajuste por clima
  const climateMultipliers = {
    cold: 0.9,
    temperate: 1,
    hot: 1.2
  };

  baseIntake *= activityMultipliers[activityLevel];
  baseIntake *= climateMultipliers[climate];

  return Math.round(baseIntake * 100) / 100;
}

// Cálculo de sal rosa recomendado
export function calculateSaltIntake(waterIntake: number): number {
  // Aproximadamente 1g de sal rosa para cada litro de água
  return Math.round(waterIntake * 100) / 100;
}

// Validação de dados
export function validateUserData(data: {
  weight?: string;
  height?: string;
  age?: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (data.weight) {
    const weight = parseFloat(data.weight);
    if (isNaN(weight) || weight < 30 || weight > 300) {
      errors.push('Peso deve estar entre 30 e 300 kg');
    }
  }

  if (data.height) {
    const height = parseFloat(data.height);
    if (isNaN(height) || height < 100 || height > 250) {
      errors.push('Altura deve estar entre 100 e 250 cm');
    }
  }

  if (data.age) {
    const age = parseFloat(data.age);
    if (isNaN(age) || age < 16 || age > 120) {
      errors.push('Idade deve estar entre 16 e 120 anos');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Geração de IDs únicos
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Formatação de números
export function formatNumber(
  value: number, 
  decimals: number = 2, 
  locale: string = 'pt-BR'
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

// Debounce para otimização de performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Verificação de suporte a recursos do navegador
export function checkBrowserSupport() {
  return {
    localStorage: typeof Storage !== 'undefined',
    notifications: 'Notification' in window,
    serviceWorker: 'serviceWorker' in navigator,
    webShare: 'share' in navigator
  };
}

// Exportação de dados para backup
export function exportUserData(data: any): string {
  const exportData = {
    version: '1.0.0',
    exportDate: new Date().toISOString(),
    data
  };
  
  return JSON.stringify(exportData, null, 2);
}

// Importação de dados de backup
export function importUserData(jsonString: string): any {
  try {
    const importData = JSON.parse(jsonString);
    
    if (!importData.version || !importData.data) {
      throw new Error('Formato de backup inválido');
    }
    
    return importData.data;
  } catch (error) {
    throw new Error('Erro ao importar dados: ' + (error as Error).message);
  }
}