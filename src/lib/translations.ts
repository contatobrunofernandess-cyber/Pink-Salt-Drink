// Sistema de internacionalização para Pink Salt Burn Protocol
export type Language = 'pt' | 'en' | 'it' | 'de' | 'es';

export const translations = {
  en: {
    subtitle: "Protocol",
    
    // Navigation
    nav: {
      home: 'Home',
      recipes: 'Recipes',
      schedule: 'Schedule',
      calculator: 'Calculator',
      notes: 'Notes',
      tips: 'Tips',
      settings: 'Settings'
    },

    // Common
    common: {
      back: 'Back',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },

    // Home Module
    home: {
      welcome: 'Welcome to Pink Salt Burn',
      description: 'Transform your health with the power of Himalayan pink salt. A complete 7-day protocol for weight loss and wellness.',
      benefits: {
        title: 'Key Benefits',
        list: [
          'Accelerates metabolism naturally',
          'Improves cellular hydration',
          'Reduces fluid retention',
          'Rich in 84+ essential minerals',
          'Supports healthy digestion',
          'Balances body pH levels'
        ]
      },
      stats: {
        days: 'Days',
        natural: 'Natural'
      },
      dailyTip: {
        title: 'Daily Tip',
        content: 'Start your morning with a glass of warm water mixed with a pinch of pink salt to kickstart your metabolism.'
      }
    },

    // Recipes Module
    recipes: {
      title: 'Healthy Recipes',
      subtitle: 'Delicious recipes enhanced with pink salt',
      ingredients: 'Ingredients',
      instructions: 'Instructions',
      difficulty: {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard'
      },
      recipe1: {
        name: 'Pink Salt Detox Water',
        ingredients: [
          '1 liter filtered water',
          '1/4 tsp Himalayan pink salt',
          '1 lemon (juiced)',
          '1 cucumber (sliced)',
          'Fresh mint leaves'
        ],
        instructions: [
          'Mix pink salt with warm water until dissolved',
          'Add fresh lemon juice and stir well',
          'Add cucumber slices and mint leaves',
          'Let it infuse for 30 minutes',
          'Drink throughout the day'
        ]
      },
      recipe2: {
        name: 'Mineral-Rich Vegetable Soup',
        ingredients: [
          '2 cups mixed vegetables',
          '1 tsp pink salt',
          '1 tbsp olive oil',
          '2 cloves garlic',
          '1 onion (diced)',
          '4 cups vegetable broth'
        ],
        instructions: [
          'Heat olive oil in a large pot',
          'Sauté onion and garlic until fragrant',
          'Add mixed vegetables and cook for 5 minutes',
          'Pour in vegetable broth and bring to boil',
          'Season with pink salt and simmer for 15 minutes',
          'Serve hot and enjoy'
        ]
      },
      recipe3: {
        name: 'Pink Salt Energy Smoothie',
        ingredients: [
          '1 banana',
          '1 cup coconut water',
          'Pinch of pink salt',
          '1 tbsp almond butter',
          '1/2 cup spinach',
          'Ice cubes'
        ],
        instructions: [
          'Add all ingredients to blender',
          'Blend until smooth and creamy',
          'Taste and adjust salt if needed',
          'Pour into glass and serve immediately'
        ]
      }
    },

    // Schedule Module
    schedule: {
      title: '7-Day Protocol Schedule',
      day: 'Day',
      completed: 'Completed',
      markComplete: 'Mark Complete',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      days: {
        day1: {
          morning: 'Start with pink salt water (1/4 tsp in 250ml warm water)',
          afternoon: 'Drink detox water with lemon and cucumber',
          evening: 'Light dinner with mineral-rich vegetables'
        },
        day2: {
          morning: 'Pink salt water + 10 minutes light exercise',
          afternoon: 'Vegetable soup with pink salt seasoning',
          evening: 'Herbal tea with a pinch of pink salt'
        },
        day3: {
          morning: 'Pink salt water + meditation (5 minutes)',
          afternoon: 'Fresh salad with pink salt dressing',
          evening: 'Warm bath with pink salt (optional)'
        }
      },
      defaultSchedule: {
        morning: 'Start with pink salt water on empty stomach',
        afternoon: 'Maintain hydration with mineral water',
        evening: 'Light meal with pink salt seasoning'
      }
    },

    // Calculator Module
    calculator: {
      title: 'Intake Calculator',
      subtitle: 'Calculate your optimal daily water and salt intake',
      weight: 'Your Weight',
      activityLevel: 'Activity Level',
      activities: {
        low: 'Low (desk job, minimal exercise)',
        moderate: 'Moderate (light exercise 1-3x/week)',
        high: 'High (exercise 4-6x/week)',
        athlete: 'Athlete (intense daily training)'
      },
      calculate: 'Calculate My Intake',
      recalculate: 'Calculate Again',
      results: {
        title: 'Your Personalized Results',
        water: 'Daily Water Intake',
        salt: 'Daily Pink Salt',
        daily: 'per day',
        glasses: 'glasses (250ml each)',
        teaspoons: 'teaspoon(s)',
        tips: 'Important Tips',
        tip1: 'Drink water gradually throughout the day',
        tip2: 'Start with smaller amounts and increase gradually',
        tip3: 'Always use pure Himalayan pink salt'
      }
    },

    // Notes Module
    notes: {
      title: 'Progress Journal',
      subtitle: 'Track your daily progress and symptoms',
      addEntry: 'Add New Entry',
      addFirst: 'Add Your First Entry',
      empty: 'No entries yet. Start tracking your progress!',
      day: 'Protocol Day',
      weight: 'Weight',
      energy: 'Energy Level',
      mood: 'Mood',
      symptomsTitle: 'Symptoms',
      notesTitle: 'Personal Notes',
      notesPlaceholder: 'How are you feeling today? Any observations?',
      optional: 'optional',
      low: 'Low',
      high: 'High',
      save: 'Save Entry',
      symptoms: {
        headache: 'Headache',
        fatigue: 'Fatigue',
        nausea: 'Nausea',
        bloating: 'Bloating',
        cravings: 'Cravings',
        irritability: 'Irritability'
      }
    },

    // Tips Module
    tips: {
      title: 'Expert Tips',
      subtitle: 'Maximize your results with professional guidance',
      warning: 'Important',
      noTips: 'No tips available for this category',
      categories: {
        general: 'General',
        nutrition: 'Nutrition',
        hydration: 'Hydration',
        exercise: 'Exercise',
        wellness: 'Wellness'
      },
      content: {
        general: [
          {
            title: 'Start Gradually',
            content: 'Begin with small amounts of pink salt and gradually increase to allow your body to adapt.',
            warning: 'Never exceed 1 teaspoon of pink salt per day without medical supervision.'
          },
          {
            title: 'Quality Matters',
            content: 'Always use authentic Himalayan pink salt. Look for unrefined, additive-free varieties.',
          },
          {
            title: 'Timing is Key',
            content: 'Take pink salt water first thing in the morning on an empty stomach for best results.'
          }
        ],
        nutrition: [
          {
            title: 'Balanced Diet',
            content: 'Combine the protocol with a balanced diet rich in vegetables, lean proteins, and healthy fats.'
          },
          {
            title: 'Avoid Processed Foods',
            content: 'Minimize processed foods high in regular table salt during the protocol period.'
          },
          {
            title: 'Meal Timing',
            content: 'Eat your largest meal earlier in the day and keep dinner light and early.'
          }
        ],
        hydration: [
          {
            title: 'Water Quality',
            content: 'Use filtered or spring water for mixing with pink salt to avoid chlorine and other chemicals.'
          },
          {
            title: 'Temperature Matters',
            content: 'Warm water helps dissolve the salt better and is gentler on your digestive system.'
          },
          {
            title: 'Consistent Intake',
            content: 'Spread your water intake throughout the day rather than drinking large amounts at once.'
          }
        ],
        exercise: [
          {
            title: 'Light Movement',
            content: 'Incorporate gentle exercise like walking or yoga to enhance the detox process.'
          },
          {
            title: 'Post-Workout Hydration',
            content: 'Replenish electrolytes after exercise with pink salt water instead of sports drinks.'
          }
        ],
        wellness: [
          {
            title: 'Sleep Quality',
            content: 'Pink salt can help improve sleep quality by balancing electrolytes and reducing stress.'
          },
          {
            title: 'Stress Management',
            content: 'Practice stress-reduction techniques like meditation or deep breathing exercises.'
          },
          {
            title: 'Listen to Your Body',
            content: 'Pay attention to how your body responds and adjust the protocol accordingly.'
          }
        ]
      },
      quickFacts: {
        title: 'Quick Facts',
        facts: [
          'Pink salt contains 84+ trace minerals',
          'It helps maintain proper pH balance',
          'Supports adrenal and thyroid function',
          'May help reduce inflammation',
          'Can improve skin health when used topically'
        ]
      },
      disclaimer: {
        title: 'Medical Disclaimer',
        content: 'This protocol is for educational purposes only. Consult with a healthcare provider before starting, especially if you have high blood pressure, kidney issues, or other medical conditions.'
      }
    },

    // Settings Module
    settings: {
      title: 'Settings',
      subtitle: 'Customize your app experience',
      language: {
        title: 'Language Settings',
        description: 'Choose your preferred language'
      },
      data: {
        title: 'Data Management',
        completedDays: 'Completed Days',
        notes: 'Journal Entries',
        storage: 'Storage Used',
        export: 'Export My Data',
        exportDescription: 'Download your progress data as a JSON file for backup or transfer.'
      },
      about: {
        title: 'App Information',
        version: 'Version',
        protocol: 'Protocol',
        duration: 'Duration',
        days: 'days'
      },
      privacy: {
        title: 'Privacy & Security',
        local: 'All data stored locally on your device',
        noServer: 'No data sent to external servers',
        noTracking: 'No tracking or analytics'
      },
      danger: {
        title: 'Danger Zone',
        description: 'This action will permanently delete all your data and cannot be undone.',
        clearAll: 'Clear All Data'
      },
      confirmClear: 'Are you sure you want to delete all your data? This action cannot be undone.',
      dataCleared: 'All data has been cleared successfully.',
      footer: {
        madeWith: 'Made with',
        disclaimer: 'Always consult healthcare professionals before starting any new health protocol.'
      }
    }
  },

  pt: {
    subtitle: "Protocolo",
    
    // Navigation
    nav: {
      home: 'Início',
      recipes: 'Receitas',
      schedule: 'Cronograma',
      calculator: 'Calculadora',
      notes: 'Anotações',
      tips: 'Dicas',
      settings: 'Configurações'
    },

    // Common
    common: {
      back: 'Voltar',
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Excluir',
      edit: 'Editar',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso'
    },

    // Home Module
    home: {
      welcome: 'Bem-vindo ao Pink Salt Burn',
      description: 'Transforme sua saúde com o poder do sal rosa do Himalaia. Um protocolo completo de 7 dias para emagrecimento e bem-estar.',
      benefits: {
        title: 'Principais Benefícios',
        list: [
          'Acelera o metabolismo naturalmente',
          'Melhora a hidratação celular',
          'Reduz a retenção de líquidos',
          'Rico em mais de 84 minerais essenciais',
          'Auxilia na digestão saudável',
          'Equilibra os níveis de pH do corpo'
        ]
      },
      stats: {
        days: 'Dias',
        natural: 'Natural'
      },
      dailyTip: {
        title: 'Dica Diária',
        content: 'Comece sua manhã com um copo de água morna misturada com uma pitada de sal rosa para acelerar seu metabolismo.'
      }
    },

    // Recipes Module
    recipes: {
      title: 'Receitas Saudáveis',
      subtitle: 'Receitas deliciosas enriquecidas com sal rosa',
      ingredients: 'Ingredientes',
      instructions: 'Modo de Preparo',
      difficulty: {
        easy: 'Fácil',
        medium: 'Médio',
        hard: 'Difícil'
      },
      recipe1: {
        name: 'Água Detox com Sal Rosa',
        ingredients: [
          '1 litro de água filtrada',
          '1/4 colher de chá de sal rosa do Himalaia',
          '1 limão (suco)',
          '1 pepino (fatiado)',
          'Folhas de hortelã fresca'
        ],
        instructions: [
          'Misture o sal rosa com água morna até dissolver',
          'Adicione o suco de limão fresco e misture bem',
          'Adicione as fatias de pepino e folhas de hortelã',
          'Deixe em infusão por 30 minutos',
          'Beba ao longo do dia'
        ]
      },
      recipe2: {
        name: 'Sopa de Vegetais Rica em Minerais',
        ingredients: [
          '2 xícaras de vegetais mistos',
          '1 colher de chá de sal rosa',
          '1 colher de sopa de azeite',
          '2 dentes de alho',
          '1 cebola (picada)',
          '4 xícaras de caldo de vegetais'
        ],
        instructions: [
          'Aqueça o azeite em uma panela grande',
          'Refogue a cebola e o alho até ficarem aromáticos',
          'Adicione os vegetais mistos e cozinhe por 5 minutos',
          'Despeje o caldo de vegetais e leve à fervura',
          'Tempere com sal rosa e deixe cozinhar por 15 minutos',
          'Sirva quente e aproveite'
        ]
      },
      recipe3: {
        name: 'Smoothie Energético com Sal Rosa',
        ingredients: [
          '1 banana',
          '1 xícara de água de coco',
          'Pitada de sal rosa',
          '1 colher de sopa de pasta de amêndoa',
          '1/2 xícara de espinafre',
          'Cubos de gelo'
        ],
        instructions: [
          'Adicione todos os ingredientes no liquidificador',
          'Bata até ficar cremoso e homogêneo',
          'Prove e ajuste o sal se necessário',
          'Despeje no copo e sirva imediatamente'
        ]
      }
    },

    // Schedule Module
    schedule: {
      title: 'Cronograma do Protocolo 7 Dias',
      day: 'Dia',
      completed: 'Concluído',
      markComplete: 'Marcar como Concluído',
      morning: 'Manhã',
      afternoon: 'Tarde',
      evening: 'Noite',
      days: {
        day1: {
          morning: 'Comece com água de sal rosa (1/4 colher de chá em 250ml de água morna)',
          afternoon: 'Beba água detox com limão e pepino',
          evening: 'Jantar leve com vegetais ricos em minerais'
        },
        day2: {
          morning: 'Água de sal rosa + 10 minutos de exercício leve',
          afternoon: 'Sopa de vegetais temperada com sal rosa',
          evening: 'Chá de ervas com uma pitada de sal rosa'
        },
        day3: {
          morning: 'Água de sal rosa + meditação (5 minutos)',
          afternoon: 'Salada fresca com molho de sal rosa',
          evening: 'Banho morno com sal rosa (opcional)'
        }
      },
      defaultSchedule: {
        morning: 'Comece com água de sal rosa em jejum',
        afternoon: 'Mantenha a hidratação com água mineral',
        evening: 'Refeição leve temperada com sal rosa'
      }
    },

    // Calculator Module
    calculator: {
      title: 'Calculadora de Consumo',
      subtitle: 'Calcule sua ingestão diária ideal de água e sal',
      weight: 'Seu Peso',
      activityLevel: 'Nível de Atividade',
      activities: {
        low: 'Baixo (trabalho sedentário, exercício mínimo)',
        moderate: 'Moderado (exercício leve 1-3x/semana)',
        high: 'Alto (exercício 4-6x/semana)',
        athlete: 'Atleta (treino intenso diário)'
      },
      calculate: 'Calcular Minha Ingestão',
      recalculate: 'Calcular Novamente',
      results: {
        title: 'Seus Resultados Personalizados',
        water: 'Ingestão Diária de Água',
        salt: 'Sal Rosa Diário',
        daily: 'por dia',
        glasses: 'copos (250ml cada)',
        teaspoons: 'colher(es) de chá',
        tips: 'Dicas Importantes',
        tip1: 'Beba água gradualmente ao longo do dia',
        tip2: 'Comece com quantidades menores e aumente gradualmente',
        tip3: 'Sempre use sal rosa puro do Himalaia'
      }
    },

    // Notes Module
    notes: {
      title: 'Diário de Progresso',
      subtitle: 'Acompanhe seu progresso diário e sintomas',
      addEntry: 'Adicionar Nova Entrada',
      addFirst: 'Adicionar Sua Primeira Entrada',
      empty: 'Nenhuma entrada ainda. Comece a acompanhar seu progresso!',
      day: 'Dia do Protocolo',
      weight: 'Peso',
      energy: 'Nível de Energia',
      mood: 'Humor',
      symptomsTitle: 'Sintomas',
      notesTitle: 'Anotações Pessoais',
      notesPlaceholder: 'Como você está se sentindo hoje? Alguma observação?',
      optional: 'opcional',
      low: 'Baixo',
      high: 'Alto',
      save: 'Salvar Entrada',
      symptoms: {
        headache: 'Dor de cabeça',
        fatigue: 'Fadiga',
        nausea: 'Náusea',
        bloating: 'Inchaço',
        cravings: 'Desejos',
        irritability: 'Irritabilidade'
      }
    },

    // Tips Module
    tips: {
      title: 'Dicas de Especialistas',
      subtitle: 'Maximize seus resultados com orientação profissional',
      warning: 'Importante',
      noTips: 'Nenhuma dica disponível para esta categoria',
      categories: {
        general: 'Geral',
        nutrition: 'Nutrição',
        hydration: 'Hidratação',
        exercise: 'Exercício',
        wellness: 'Bem-estar'
      },
      content: {
        general: [
          {
            title: 'Comece Gradualmente',
            content: 'Comece com pequenas quantidades de sal rosa e aumente gradualmente para permitir que seu corpo se adapte.',
            warning: 'Nunca exceda 1 colher de chá de sal rosa por dia sem supervisão médica.'
          },
          {
            title: 'Qualidade Importa',
            content: 'Sempre use sal rosa autêntico do Himalaia. Procure variedades não refinadas e sem aditivos.',
          },
          {
            title: 'O Timing é Fundamental',
            content: 'Tome água com sal rosa logo pela manhã em jejum para melhores resultados.'
          }
        ],
        nutrition: [
          {
            title: 'Dieta Equilibrada',
            content: 'Combine o protocolo com uma dieta equilibrada rica em vegetais, proteínas magras e gorduras saudáveis.'
          },
          {
            title: 'Evite Alimentos Processados',
            content: 'Minimize alimentos processados ricos em sal de mesa comum durante o período do protocolo.'
          },
          {
            title: 'Horário das Refeições',
            content: 'Faça sua maior refeição mais cedo no dia e mantenha o jantar leve e cedo.'
          }
        ],
        hydration: [
          {
            title: 'Qualidade da Água',
            content: 'Use água filtrada ou de nascente para misturar com sal rosa para evitar cloro e outros químicos.'
          },
          {
            title: 'Temperatura Importa',
            content: 'Água morna ajuda a dissolver melhor o sal e é mais suave para o sistema digestivo.'
          },
          {
            title: 'Ingestão Consistente',
            content: 'Distribua sua ingestão de água ao longo do dia em vez de beber grandes quantidades de uma vez.'
          }
        ],
        exercise: [
          {
            title: 'Movimento Leve',
            content: 'Incorpore exercícios suaves como caminhada ou yoga para potencializar o processo de desintoxicação.'
          },
          {
            title: 'Hidratação Pós-Treino',
            content: 'Reponha eletrólitos após o exercício com água de sal rosa em vez de bebidas esportivas.'
          }
        ],
        wellness: [
          {
            title: 'Qualidade do Sono',
            content: 'O sal rosa pode ajudar a melhorar a qualidade do sono equilibrando eletrólitos e reduzindo o estresse.'
          },
          {
            title: 'Gerenciamento do Estresse',
            content: 'Pratique técnicas de redução do estresse como meditação ou exercícios de respiração profunda.'
          },
          {
            title: 'Ouça Seu Corpo',
            content: 'Preste atenção em como seu corpo responde e ajuste o protocolo adequadamente.'
          }
        ]
      },
      quickFacts: {
        title: 'Fatos Rápidos',
        facts: [
          'O sal rosa contém mais de 84 minerais traço',
          'Ajuda a manter o equilíbrio adequado do pH',
          'Suporta a função adrenal e da tireoide',
          'Pode ajudar a reduzir a inflamação',
          'Pode melhorar a saúde da pele quando usado topicamente'
        ]
      },
      disclaimer: {
        title: 'Aviso Médico',
        content: 'Este protocolo é apenas para fins educacionais. Consulte um profissional de saúde antes de começar, especialmente se você tem pressão alta, problemas renais ou outras condições médicas.'
      }
    },

    // Settings Module
    settings: {
      title: 'Configurações',
      subtitle: 'Personalize sua experiência no app',
      language: {
        title: 'Configurações de Idioma',
        description: 'Escolha seu idioma preferido'
      },
      data: {
        title: 'Gerenciamento de Dados',
        completedDays: 'Dias Concluídos',
        notes: 'Entradas do Diário',
        storage: 'Armazenamento Usado',
        export: 'Exportar Meus Dados',
        exportDescription: 'Baixe seus dados de progresso como arquivo JSON para backup ou transferência.'
      },
      about: {
        title: 'Informações do App',
        version: 'Versão',
        protocol: 'Protocolo',
        duration: 'Duração',
        days: 'dias'
      },
      privacy: {
        title: 'Privacidade e Segurança',
        local: 'Todos os dados armazenados localmente no seu dispositivo',
        noServer: 'Nenhum dado enviado para servidores externos',
        noTracking: 'Sem rastreamento ou análises'
      },
      danger: {
        title: 'Zona de Perigo',
        description: 'Esta ação irá deletar permanentemente todos os seus dados e não pode ser desfeita.',
        clearAll: 'Limpar Todos os Dados'
      },
      confirmClear: 'Tem certeza de que deseja deletar todos os seus dados? Esta ação não pode ser desfeita.',
      dataCleared: 'Todos os dados foram limpos com sucesso.',
      footer: {
        madeWith: 'Feito com',
        disclaimer: 'Sempre consulte profissionais de saúde antes de iniciar qualquer novo protocolo de saúde.'
      }
    }
  },

  it: {
    subtitle: "Protocollo",
    
    // Navigation
    nav: {
      home: 'Home',
      recipes: 'Ricette',
      schedule: 'Programma',
      calculator: 'Calcolatrice',
      notes: 'Note',
      tips: 'Consigli',
      settings: 'Impostazioni'
    },

    // Common
    common: {
      back: 'Indietro',
      save: 'Salva',
      cancel: 'Annulla',
      delete: 'Elimina',
      edit: 'Modifica',
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo'
    },

    // Home Module
    home: {
      welcome: 'Benvenuto a Pink Salt Burn',
      description: 'Trasforma la tua salute con il potere del sale rosa dell\'Himalaya. Un protocollo completo di 7 giorni per la perdita di peso e il benessere.',
      benefits: {
        title: 'Benefici Principali',
        list: [
          'Accelera il metabolismo naturalmente',
          'Migliora l\'idratazione cellulare',
          'Riduce la ritenzione idrica',
          'Ricco di oltre 84 minerali essenziali',
          'Supporta la digestione sana',
          'Equilibra i livelli di pH del corpo'
        ]
      },
      stats: {
        days: 'Giorni',
        natural: 'Naturale'
      },
      dailyTip: {
        title: 'Consiglio Giornaliero',
        content: 'Inizia la mattina con un bicchiere di acqua tiepida mescolata con un pizzico di sale rosa per accelerare il metabolismo.'
      }
    },

    // Recipes Module
    recipes: {
      title: 'Ricette Salutari',
      subtitle: 'Ricette deliziose arricchite con sale rosa',
      ingredients: 'Ingredienti',
      instructions: 'Istruzioni',
      difficulty: {
        easy: 'Facile',
        medium: 'Medio',
        hard: 'Difficile'
      },
      recipe1: {
        name: 'Acqua Detox con Sale Rosa',
        ingredients: [
          '1 litro di acqua filtrata',
          '1/4 cucchiaino di sale rosa dell\'Himalaya',
          '1 limone (succo)',
          '1 cetriolo (affettato)',
          'Foglie di menta fresca'
        ],
        instructions: [
          'Mescola il sale rosa con acqua tiepida fino a dissolverlo',
          'Aggiungi il succo di limone fresco e mescola bene',
          'Aggiungi le fette di cetriolo e le foglie di menta',
          'Lascia in infusione per 30 minuti',
          'Bevi durante il giorno'
        ]
      },
      recipe2: {
        name: 'Zuppa di Verdure Ricca di Minerali',
        ingredients: [
          '2 tazze di verdure miste',
          '1 cucchiaino di sale rosa',
          '1 cucchiaio di olio d\'oliva',
          '2 spicchi d\'aglio',
          '1 cipolla (tritata)',
          '4 tazze di brodo vegetale'
        ],
        instructions: [
          'Scalda l\'olio d\'oliva in una pentola grande',
          'Soffriggi cipolla e aglio fino a renderli profumati',
          'Aggiungi le verdure miste e cuoci per 5 minuti',
          'Versa il brodo vegetale e porta a ebollizione',
          'Condisci con sale rosa e lascia cuocere per 15 minuti',
          'Servi caldo e gusta'
        ]
      },
      recipe3: {
        name: 'Smoothie Energetico con Sale Rosa',
        ingredients: [
          '1 banana',
          '1 tazza di acqua di cocco',
          'Pizzico di sale rosa',
          '1 cucchiaio di burro di mandorle',
          '1/2 tazza di spinaci',
          'Cubetti di ghiaccio'
        ],
        instructions: [
          'Aggiungi tutti gli ingredienti nel frullatore',
          'Frulla fino a ottenere una consistenza cremosa',
          'Assaggia e regola il sale se necessario',
          'Versa nel bicchiere e servi immediatamente'
        ]
      }
    },

    // Schedule Module
    schedule: {
      title: 'Programma Protocollo 7 Giorni',
      day: 'Giorno',
      completed: 'Completato',
      markComplete: 'Segna come Completato',
      morning: 'Mattina',
      afternoon: 'Pomeriggio',
      evening: 'Sera',
      days: {
        day1: {
          morning: 'Inizia con acqua di sale rosa (1/4 cucchiaino in 250ml di acqua tiepida)',
          afternoon: 'Bevi acqua detox con limone e cetriolo',
          evening: 'Cena leggera con verdure ricche di minerali'
        },
        day2: {
          morning: 'Acqua di sale rosa + 10 minuti di esercizio leggero',
          afternoon: 'Zuppa di verdure condita con sale rosa',
          evening: 'Tisana alle erbe con un pizzico di sale rosa'
        },
        day3: {
          morning: 'Acqua di sale rosa + meditazione (5 minuti)',
          afternoon: 'Insalata fresca con condimento al sale rosa',
          evening: 'Bagno caldo con sale rosa (opzionale)'
        }
      },
      defaultSchedule: {
        morning: 'Inizia con acqua di sale rosa a stomaco vuoto',
        afternoon: 'Mantieni l\'idratazione con acqua minerale',
        evening: 'Pasto leggero condito con sale rosa'
      }
    },

    // Calculator Module
    calculator: {
      title: 'Calcolatrice Assunzione',
      subtitle: 'Calcola la tua assunzione giornaliera ottimale di acqua e sale',
      weight: 'Il Tuo Peso',
      activityLevel: 'Livello di Attività',
      activities: {
        low: 'Basso (lavoro sedentario, esercizio minimo)',
        moderate: 'Moderato (esercizio leggero 1-3x/settimana)',
        high: 'Alto (esercizio 4-6x/settimana)',
        athlete: 'Atleta (allenamento intenso quotidiano)'
      },
      calculate: 'Calcola la Mia Assunzione',
      recalculate: 'Calcola di Nuovo',
      results: {
        title: 'I Tuoi Risultati Personalizzati',
        water: 'Assunzione Giornaliera di Acqua',
        salt: 'Sale Rosa Giornaliero',
        daily: 'al giorno',
        glasses: 'bicchieri (250ml ciascuno)',
        teaspoons: 'cucchiaino/i',
        tips: 'Consigli Importanti',
        tip1: 'Bevi acqua gradualmente durante il giorno',
        tip2: 'Inizia con quantità minori e aumenta gradualmente',
        tip3: 'Usa sempre sale rosa puro dell\'Himalaya'
      }
    },

    // Notes Module
    notes: {
      title: 'Diario dei Progressi',
      subtitle: 'Traccia i tuoi progressi quotidiani e sintomi',
      addEntry: 'Aggiungi Nuova Voce',
      addFirst: 'Aggiungi la Tua Prima Voce',
      empty: 'Nessuna voce ancora. Inizia a tracciare i tuoi progressi!',
      day: 'Giorno del Protocollo',
      weight: 'Peso',
      energy: 'Livello di Energia',
      mood: 'Umore',
      symptomsTitle: 'Sintomi',
      notesTitle: 'Note Personali',
      notesPlaceholder: 'Come ti senti oggi? Qualche osservazione?',
      optional: 'opzionale',
      low: 'Basso',
      high: 'Alto',
      save: 'Salva Voce',
      symptoms: {
        headache: 'Mal di testa',
        fatigue: 'Affaticamento',
        nausea: 'Nausea',
        bloating: 'Gonfiore',
        cravings: 'Voglie',
        irritability: 'Irritabilità'
      }
    },

    // Tips Module
    tips: {
      title: 'Consigli degli Esperti',
      subtitle: 'Massimizza i tuoi risultati con una guida professionale',
      warning: 'Importante',
      noTips: 'Nessun consiglio disponibile per questa categoria',
      categories: {
        general: 'Generale',
        nutrition: 'Nutrizione',
        hydration: 'Idratazione',
        exercise: 'Esercizio',
        wellness: 'Benessere'
      },
      content: {
        general: [
          {
            title: 'Inizia Gradualmente',
            content: 'Inizia con piccole quantità di sale rosa e aumenta gradualmente per permettere al tuo corpo di adattarsi.',
            warning: 'Non superare mai 1 cucchiaino di sale rosa al giorno senza supervisione medica.'
          },
          {
            title: 'La Qualità Conta',
            content: 'Usa sempre sale rosa autentico dell\'Himalaya. Cerca varietà non raffinate e senza additivi.',
          },
          {
            title: 'Il Timing è Fondamentale',
            content: 'Prendi l\'acqua di sale rosa per prima cosa al mattino a stomaco vuoto per i migliori risultati.'
          }
        ],
        nutrition: [
          {
            title: 'Dieta Equilibrata',
            content: 'Combina il protocollo con una dieta equilibrata ricca di verdure, proteine magre e grassi sani.'
          },
          {
            title: 'Evita Cibi Processati',
            content: 'Minimizza i cibi processati ricchi di sale da tavola comune durante il periodo del protocollo.'
          },
          {
            title: 'Orario dei Pasti',
            content: 'Consuma il pasto più abbondante prima nella giornata e mantieni la cena leggera e presto.'
          }
        ],
        hydration: [
          {
            title: 'Qualità dell\'Acqua',
            content: 'Usa acqua filtrata o di sorgente per mescolare con il sale rosa per evitare cloro e altri chimici.'
          },
          {
            title: 'La Temperatura Conta',
            content: 'L\'acqua tiepida aiuta a sciogliere meglio il sale ed è più delicata sul sistema digestivo.'
          },
          {
            title: 'Assunzione Costante',
            content: 'Distribuisci l\'assunzione di acqua durante il giorno piuttosto che bere grandi quantità in una volta.'
          }
        ],
        exercise: [
          {
            title: 'Movimento Leggero',
            content: 'Incorpora esercizi delicati come camminare o yoga per potenziare il processo di disintossicazione.'
          },
          {
            title: 'Idratazione Post-Allenamento',
            content: 'Reintegra gli elettroliti dopo l\'esercizio con acqua di sale rosa invece di bevande sportive.'
          }
        ],
        wellness: [
          {
            title: 'Qualità del Sonno',
            content: 'Il sale rosa può aiutare a migliorare la qualità del sonno bilanciando gli elettroliti e riducendo lo stress.'
          },
          {
            title: 'Gestione dello Stress',
            content: 'Pratica tecniche di riduzione dello stress come meditazione o esercizi di respirazione profonda.'
          },
          {
            title: 'Ascolta il Tuo Corpo',
            content: 'Presta attenzione a come risponde il tuo corpo e regola il protocollo di conseguenza.'
          }
        ]
      },
      quickFacts: {
        title: 'Fatti Rapidi',
        facts: [
          'Il sale rosa contiene oltre 84 minerali traccia',
          'Aiuta a mantenere il giusto equilibrio del pH',
          'Supporta la funzione surrenale e tiroidea',
          'Può aiutare a ridurre l\'infiammazione',
          'Può migliorare la salute della pelle quando usato topicamente'
        ]
      },
      disclaimer: {
        title: 'Disclaimer Medico',
        content: 'Questo protocollo è solo per scopi educativi. Consulta un operatore sanitario prima di iniziare, specialmente se hai pressione alta, problemi renali o altre condizioni mediche.'
      }
    },

    // Settings Module
    settings: {
      title: 'Impostazioni',
      subtitle: 'Personalizza la tua esperienza nell\'app',
      language: {
        title: 'Impostazioni Lingua',
        description: 'Scegli la tua lingua preferita'
      },
      data: {
        title: 'Gestione Dati',
        completedDays: 'Giorni Completati',
        notes: 'Voci del Diario',
        storage: 'Spazio Utilizzato',
        export: 'Esporta i Miei Dati',
        exportDescription: 'Scarica i tuoi dati di progresso come file JSON per backup o trasferimento.'
      },
      about: {
        title: 'Informazioni App',
        version: 'Versione',
        protocol: 'Protocollo',
        duration: 'Durata',
        days: 'giorni'
      },
      privacy: {
        title: 'Privacy e Sicurezza',
        local: 'Tutti i dati memorizzati localmente sul tuo dispositivo',
        noServer: 'Nessun dato inviato a server esterni',
        noTracking: 'Nessun tracciamento o analisi'
      },
      danger: {
        title: 'Zona di Pericolo',
        description: 'Questa azione eliminerà permanentemente tutti i tuoi dati e non può essere annullata.',
        clearAll: 'Cancella Tutti i Dati'
      },
      confirmClear: 'Sei sicuro di voler eliminare tutti i tuoi dati? Questa azione non può essere annullata.',
      dataCleared: 'Tutti i dati sono stati cancellati con successo.',
      footer: {
        madeWith: 'Fatto con',
        disclaimer: 'Consulta sempre professionisti sanitari prima di iniziare qualsiasi nuovo protocollo di salute.'
      }
    }
  },

  de: {
    subtitle: "Protokoll",
    
    // Navigation
    nav: {
      home: 'Startseite',
      recipes: 'Rezepte',
      schedule: 'Zeitplan',
      calculator: 'Rechner',
      notes: 'Notizen',
      tips: 'Tipps',
      settings: 'Einstellungen'
    },

    // Common
    common: {
      back: 'Zurück',
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg'
    },

    // Home Module
    home: {
      welcome: 'Willkommen bei Pink Salt Burn',
      description: 'Verwandeln Sie Ihre Gesundheit mit der Kraft des Himalaya-Rosa-Salzes. Ein vollständiges 7-Tage-Protokoll für Gewichtsverlust und Wohlbefinden.',
      benefits: {
        title: 'Hauptvorteile',
        list: [
          'Beschleunigt den Stoffwechsel natürlich',
          'Verbessert die zelluläre Hydratation',
          'Reduziert Wassereinlagerungen',
          'Reich an über 84 essentiellen Mineralien',
          'Unterstützt gesunde Verdauung',
          'Gleicht den pH-Wert des Körpers aus'
        ]
      },
      stats: {
        days: 'Tage',
        natural: 'Natürlich'
      },
      dailyTip: {
        title: 'Täglicher Tipp',
        content: 'Beginnen Sie Ihren Morgen mit einem Glas warmem Wasser gemischt mit einer Prise Rosa-Salz, um Ihren Stoffwechsel anzukurbeln.'
      }
    },

    // Recipes Module
    recipes: {
      title: 'Gesunde Rezepte',
      subtitle: 'Köstliche Rezepte angereichert mit Rosa-Salz',
      ingredients: 'Zutaten',
      instructions: 'Anweisungen',
      difficulty: {
        easy: 'Einfach',
        medium: 'Mittel',
        hard: 'Schwer'
      },
      recipe1: {
        name: 'Rosa-Salz Detox-Wasser',
        ingredients: [
          '1 Liter gefiltertes Wasser',
          '1/4 TL Himalaya-Rosa-Salz',
          '1 Zitrone (Saft)',
          '1 Gurke (geschnitten)',
          'Frische Minzblätter'
        ],
        instructions: [
          'Rosa-Salz mit warmem Wasser mischen bis es sich auflöst',
          'Frischen Zitronensaft hinzufügen und gut umrühren',
          'Gurkenscheiben und Minzblätter hinzufügen',
          '30 Minuten ziehen lassen',
          'Über den Tag verteilt trinken'
        ]
      },
      recipe2: {
        name: 'Mineralreiche Gemüsesuppe',
        ingredients: [
          '2 Tassen gemischtes Gemüse',
          '1 TL Rosa-Salz',
          '1 EL Olivenöl',
          '2 Knoblauchzehen',
          '1 Zwiebel (gewürfelt)',
          '4 Tassen Gemüsebrühe'
        ],
        instructions: [
          'Olivenöl in einem großen Topf erhitzen',
          'Zwiebel und Knoblauch anbraten bis sie duften',
          'Gemischtes Gemüse hinzufügen und 5 Minuten kochen',
          'Gemüsebrühe hinzugießen und zum Kochen bringen',
          'Mit Rosa-Salz würzen und 15 Minuten köcheln lassen',
          'Heiß servieren und genießen'
        ]
      },
      recipe3: {
        name: 'Rosa-Salz Energie-Smoothie',
        ingredients: [
          '1 Banane',
          '1 Tasse Kokoswasser',
          'Prise Rosa-Salz',
          '1 EL Mandelbutter',
          '1/2 Tasse Spinat',
          'Eiswürfel'
        ],
        instructions: [
          'Alle Zutaten in den Mixer geben',
          'Mixen bis cremig und glatt',
          'Abschmecken und Salz bei Bedarf anpassen',
          'In Glas gießen und sofort servieren'
        ]
      }
    },

    // Schedule Module
    schedule: {
      title: '7-Tage Protokoll Zeitplan',
      day: 'Tag',
      completed: 'Abgeschlossen',
      markComplete: 'Als Abgeschlossen Markieren',
      morning: 'Morgen',
      afternoon: 'Nachmittag',
      evening: 'Abend',
      days: {
        day1: {
          morning: 'Beginnen Sie mit Rosa-Salz-Wasser (1/4 TL in 250ml warmem Wasser)',
          afternoon: 'Detox-Wasser mit Zitrone und Gurke trinken',
          evening: 'Leichtes Abendessen mit mineralreichem Gemüse'
        },
        day2: {
          morning: 'Rosa-Salz-Wasser + 10 Minuten leichte Bewegung',
          afternoon: 'Gemüsesuppe mit Rosa-Salz gewürzt',
          evening: 'Kräutertee mit einer Prise Rosa-Salz'
        },
        day3: {
          morning: 'Rosa-Salz-Wasser + Meditation (5 Minuten)',
          afternoon: 'Frischer Salat mit Rosa-Salz-Dressing',
          evening: 'Warmes Bad mit Rosa-Salz (optional)'
        }
      },
      defaultSchedule: {
        morning: 'Beginnen Sie mit Rosa-Salz-Wasser auf nüchternen Magen',
        afternoon: 'Hydratation mit Mineralwasser aufrechterhalten',
        evening: 'Leichte Mahlzeit mit Rosa-Salz gewürzt'
      }
    },

    // Calculator Module
    calculator: {
      title: 'Aufnahme-Rechner',
      subtitle: 'Berechnen Sie Ihre optimale tägliche Wasser- und Salzaufnahme',
      weight: 'Ihr Gewicht',
      activityLevel: 'Aktivitätslevel',
      activities: {
        low: 'Niedrig (Bürojob, minimale Bewegung)',
        moderate: 'Mäßig (leichte Bewegung 1-3x/Woche)',
        high: 'Hoch (Bewegung 4-6x/Woche)',
        athlete: 'Athlet (intensives tägliches Training)'
      },
      calculate: 'Meine Aufnahme Berechnen',
      recalculate: 'Erneut Berechnen',
      results: {
        title: 'Ihre Personalisierten Ergebnisse',
        water: 'Tägliche Wasseraufnahme',
        salt: 'Tägliches Rosa-Salz',
        daily: 'pro Tag',
        glasses: 'Gläser (je 250ml)',
        teaspoons: 'Teelöffel',
        tips: 'Wichtige Tipps',
        tip1: 'Trinken Sie Wasser schrittweise über den Tag verteilt',
        tip2: 'Beginnen Sie mit kleineren Mengen und steigern Sie allmählich',
        tip3: 'Verwenden Sie immer reines Himalaya-Rosa-Salz'
      }
    },

    // Notes Module
    notes: {
      title: 'Fortschritts-Tagebuch',
      subtitle: 'Verfolgen Sie Ihren täglichen Fortschritt und Symptome',
      addEntry: 'Neuen Eintrag Hinzufügen',
      addFirst: 'Ihren Ersten Eintrag Hinzufügen',
      empty: 'Noch keine Einträge. Beginnen Sie Ihren Fortschritt zu verfolgen!',
      day: 'Protokoll-Tag',
      weight: 'Gewicht',
      energy: 'Energielevel',
      mood: 'Stimmung',
      symptomsTitle: 'Symptome',
      notesTitle: 'Persönliche Notizen',
      notesPlaceholder: 'Wie fühlen Sie sich heute? Irgendwelche Beobachtungen?',
      optional: 'optional',
      low: 'Niedrig',
      high: 'Hoch',
      save: 'Eintrag Speichern',
      symptoms: {
        headache: 'Kopfschmerzen',
        fatigue: 'Müdigkeit',
        nausea: 'Übelkeit',
        bloating: 'Blähungen',
        cravings: 'Heißhunger',
        irritability: 'Reizbarkeit'
      }
    },

    // Tips Module
    tips: {
      title: 'Experten-Tipps',
      subtitle: 'Maximieren Sie Ihre Ergebnisse mit professioneller Anleitung',
      warning: 'Wichtig',
      noTips: 'Keine Tipps für diese Kategorie verfügbar',
      categories: {
        general: 'Allgemein',
        nutrition: 'Ernährung',
        hydration: 'Hydratation',
        exercise: 'Bewegung',
        wellness: 'Wohlbefinden'
      },
      content: {
        general: [
          {
            title: 'Schrittweise Beginnen',
            content: 'Beginnen Sie mit kleinen Mengen Rosa-Salz und steigern Sie allmählich, damit sich Ihr Körper anpassen kann.',
            warning: 'Überschreiten Sie niemals 1 Teelöffel Rosa-Salz pro Tag ohne ärztliche Aufsicht.'
          },
          {
            title: 'Qualität Zählt',
            content: 'Verwenden Sie immer authentisches Himalaya-Rosa-Salz. Suchen Sie nach unraffinierten, additiv-freien Sorten.',
          },
          {
            title: 'Timing ist Entscheidend',
            content: 'Nehmen Sie Rosa-Salz-Wasser morgens als erstes auf nüchternen Magen für beste Ergebnisse.'
          }
        ],
        nutrition: [
          {
            title: 'Ausgewogene Ernährung',
            content: 'Kombinieren Sie das Protokoll mit einer ausgewogenen Ernährung reich an Gemüse, magerem Protein und gesunden Fetten.'
          },
          {
            title: 'Verarbeitete Lebensmittel Vermeiden',
            content: 'Minimieren Sie verarbeitete Lebensmittel mit hohem Gehalt an normalem Tafelsalz während der Protokollzeit.'
          },
          {
            title: 'Mahlzeiten-Timing',
            content: 'Essen Sie Ihre größte Mahlzeit früher am Tag und halten Sie das Abendessen leicht und früh.'
          }
        ],
        hydration: [
          {
            title: 'Wasserqualität',
            content: 'Verwenden Sie gefiltertes oder Quellwasser zum Mischen mit Rosa-Salz, um Chlor und andere Chemikalien zu vermeiden.'
          },
          {
            title: 'Temperatur Zählt',
            content: 'Warmes Wasser hilft das Salz besser aufzulösen und ist sanfter für Ihr Verdauungssystem.'
          },
          {
            title: 'Konstante Aufnahme',
            content: 'Verteilen Sie Ihre Wasseraufnahme über den Tag, anstatt große Mengen auf einmal zu trinken.'
          }
        ],
        exercise: [
          {
            title: 'Leichte Bewegung',
            content: 'Integrieren Sie sanfte Bewegung wie Gehen oder Yoga, um den Entgiftungsprozess zu verstärken.'
          },
          {
            title: 'Nach-Training Hydratation',
            content: 'Ersetzen Sie Elektrolyte nach dem Training mit Rosa-Salz-Wasser statt Sportgetränken.'
          }
        ],
        wellness: [
          {
            title: 'Schlafqualität',
            content: 'Rosa-Salz kann helfen die Schlafqualität zu verbessern, indem es Elektrolyte ausgleicht und Stress reduziert.'
          },
          {
            title: 'Stressmanagement',
            content: 'Praktizieren Sie Stressreduktions-Techniken wie Meditation oder tiefe Atemübungen.'
          },
          {
            title: 'Hören Sie auf Ihren Körper',
            content: 'Achten Sie darauf, wie Ihr Körper reagiert und passen Sie das Protokoll entsprechend an.'
          }
        ]
      },
      quickFacts: {
        title: 'Schnelle Fakten',
        facts: [
          'Rosa-Salz enthält über 84 Spurenmineralien',
          'Es hilft den richtigen pH-Wert zu erhalten',
          'Unterstützt Nebennieren- und Schilddrüsenfunktion',
          'Kann helfen Entzündungen zu reduzieren',
          'Kann die Hautgesundheit bei topischer Anwendung verbessern'
        ]
      },
      disclaimer: {
        title: 'Medizinischer Haftungsausschluss',
        content: 'Dieses Protokoll dient nur Bildungszwecken. Konsultieren Sie einen Gesundheitsdienstleister vor Beginn, besonders wenn Sie hohen Blutdruck, Nierenprobleme oder andere medizinische Bedingungen haben.'
      }
    },

    // Settings Module
    settings: {
      title: 'Einstellungen',
      subtitle: 'Passen Sie Ihre App-Erfahrung an',
      language: {
        title: 'Spracheinstellungen',
        description: 'Wählen Sie Ihre bevorzugte Sprache'
      },
      data: {
        title: 'Datenverwaltung',
        completedDays: 'Abgeschlossene Tage',
        notes: 'Tagebuch-Einträge',
        storage: 'Verwendeter Speicher',
        export: 'Meine Daten Exportieren',
        exportDescription: 'Laden Sie Ihre Fortschrittsdaten als JSON-Datei für Backup oder Transfer herunter.'
      },
      about: {
        title: 'App-Informationen',
        version: 'Version',
        protocol: 'Protokoll',
        duration: 'Dauer',
        days: 'Tage'
      },
      privacy: {
        title: 'Datenschutz & Sicherheit',
        local: 'Alle Daten lokal auf Ihrem Gerät gespeichert',
        noServer: 'Keine Daten an externe Server gesendet',
        noTracking: 'Kein Tracking oder Analysen'
      },
      danger: {
        title: 'Gefahrenzone',
        description: 'Diese Aktion wird alle Ihre Daten dauerhaft löschen und kann nicht rückgängig gemacht werden.',
        clearAll: 'Alle Daten Löschen'
      },
      confirmClear: 'Sind Sie sicher, dass Sie alle Ihre Daten löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
      dataCleared: 'Alle Daten wurden erfolgreich gelöscht.',
      footer: {
        madeWith: 'Gemacht mit',
        disclaimer: 'Konsultieren Sie immer Gesundheitsfachkräfte vor Beginn eines neuen Gesundheitsprotokolls.'
      }
    }
  },

  es: {
    subtitle: "Protocolo",
    
    // Navigation
    nav: {
      home: 'Inicio',
      recipes: 'Recetas',
      schedule: 'Horario',
      calculator: 'Calculadora',
      notes: 'Notas',
      tips: 'Consejos',
      settings: 'Configuración'
    },

    // Common
    common: {
      back: 'Atrás',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito'
    },

    // Home Module
    home: {
      welcome: 'Bienvenido a Pink Salt Burn',
      description: 'Transforma tu salud con el poder de la sal rosa del Himalaya. Un protocolo completo de 7 días para pérdida de peso y bienestar.',
      benefits: {
        title: 'Beneficios Principales',
        list: [
          'Acelera el metabolismo naturalmente',
          'Mejora la hidratación celular',
          'Reduce la retención de líquidos',
          'Rica en más de 84 minerales esenciales',
          'Apoya la digestión saludable',
          'Equilibra los niveles de pH del cuerpo'
        ]
      },
      stats: {
        days: 'Días',
        natural: 'Natural'
      },
      dailyTip: {
        title: 'Consejo Diario',
        content: 'Comienza tu mañana con un vaso de agua tibia mezclada con una pizca de sal rosa para acelerar tu metabolismo.'
      }
    },

    // Recipes Module
    recipes: {
      title: 'Recetas Saludables',
      subtitle: 'Recetas deliciosas enriquecidas con sal rosa',
      ingredients: 'Ingredientes',
      instructions: 'Instrucciones',
      difficulty: {
        easy: 'Fácil',
        medium: 'Medio',
        hard: 'Difícil'
      },
      recipe1: {
        name: 'Agua Detox con Sal Rosa',
        ingredients: [
          '1 litro de agua filtrada',
          '1/4 cucharadita de sal rosa del Himalaya',
          '1 limón (jugo)',
          '1 pepino (rebanado)',
          'Hojas de menta fresca'
        ],
        instructions: [
          'Mezcla la sal rosa con agua tibia hasta que se disuelva',
          'Agrega el jugo de limón fresco y mezcla bien',
          'Agrega las rebanadas de pepino y hojas de menta',
          'Deja reposar por 30 minutos',
          'Bebe durante el día'
        ]
      },
      recipe2: {
        name: 'Sopa de Verduras Rica en Minerales',
        ingredients: [
          '2 tazas de verduras mixtas',
          '1 cucharadita de sal rosa',
          '1 cucharada de aceite de oliva',
          '2 dientes de ajo',
          '1 cebolla (picada)',
          '4 tazas de caldo de verduras'
        ],
        instructions: [
          'Calienta el aceite de oliva en una olla grande',
          'Sofríe la cebolla y el ajo hasta que estén aromáticos',
          'Agrega las verduras mixtas y cocina por 5 minutos',
          'Vierte el caldo de verduras y lleva a ebullición',
          'Sazona con sal rosa y deja hervir por 15 minutos',
          'Sirve caliente y disfruta'
        ]
      },
      recipe3: {
        name: 'Batido Energético con Sal Rosa',
        ingredients: [
          '1 plátano',
          '1 taza de agua de coco',
          'Pizca de sal rosa',
          '1 cucharada de mantequilla de almendra',
          '1/2 taza de espinacas',
          'Cubos de hielo'
        ],
        instructions: [
          'Agrega todos los ingredientes a la licuadora',
          'Licúa hasta que esté cremoso y suave',
          'Prueba y ajusta la sal si es necesario',
          'Vierte en un vaso y sirve inmediatamente'
        ]
      }
    },

    // Schedule Module
    schedule: {
      title: 'Horario del Protocolo 7 Días',
      day: 'Día',
      completed: 'Completado',
      markComplete: 'Marcar como Completado',
      morning: 'Mañana',
      afternoon: 'Tarde',
      evening: 'Noche',
      days: {
        day1: {
          morning: 'Comienza con agua de sal rosa (1/4 cucharadita en 250ml de agua tibia)',
          afternoon: 'Bebe agua detox con limón y pepino',
          evening: 'Cena ligera con verduras ricas en minerales'
        },
        day2: {
          morning: 'Agua de sal rosa + 10 minutos de ejercicio ligero',
          afternoon: 'Sopa de verduras sazonada con sal rosa',
          evening: 'Té de hierbas con una pizca de sal rosa'
        },
        day3: {
          morning: 'Agua de sal rosa + meditación (5 minutos)',
          afternoon: 'Ensalada fresca con aderezo de sal rosa',
          evening: 'Baño tibio con sal rosa (opcional)'
        }
      },
      defaultSchedule: {
        morning: 'Comienza con agua de sal rosa en ayunas',
        afternoon: 'Mantén la hidratación con agua mineral',
        evening: 'Comida ligera sazonada con sal rosa'
      }
    },

    // Calculator Module
    calculator: {
      title: 'Calculadora de Ingesta',
      subtitle: 'Calcula tu ingesta diaria óptima de agua y sal',
      weight: 'Tu Peso',
      activityLevel: 'Nivel de Actividad',
      activities: {
        low: 'Bajo (trabajo de oficina, ejercicio mínimo)',
        moderate: 'Moderado (ejercicio ligero 1-3x/semana)',
        high: 'Alto (ejercicio 4-6x/semana)',
        athlete: 'Atleta (entrenamiento intenso diario)'
      },
      calculate: 'Calcular Mi Ingesta',
      recalculate: 'Calcular de Nuevo',
      results: {
        title: 'Tus Resultados Personalizados',
        water: 'Ingesta Diaria de Agua',
        salt: 'Sal Rosa Diaria',
        daily: 'por día',
        glasses: 'vasos (250ml cada uno)',
        teaspoons: 'cucharadita(s)',
        tips: 'Consejos Importantes',
        tip1: 'Bebe agua gradualmente durante el día',
        tip2: 'Comienza con cantidades menores y aumenta gradualmente',
        tip3: 'Siempre usa sal rosa pura del Himalaya'
      }
    },

    // Notes Module
    notes: {
      title: 'Diario de Progreso',
      subtitle: 'Rastrea tu progreso diario y síntomas',
      addEntry: 'Agregar Nueva Entrada',
      addFirst: 'Agregar Tu Primera Entrada',
      empty: '¡Aún no hay entradas. Comienza a rastrear tu progreso!',
      day: 'Día del Protocolo',
      weight: 'Peso',
      energy: 'Nivel de Energía',
      mood: 'Estado de Ánimo',
      symptomsTitle: 'Síntomas',
      notesTitle: 'Notas Personales',
      notesPlaceholder: '¿Cómo te sientes hoy? ¿Alguna observación?',
      optional: 'opcional',
      low: 'Bajo',
      high: 'Alto',
      save: 'Guardar Entrada',
      symptoms: {
        headache: 'Dolor de cabeza',
        fatigue: 'Fatiga',
        nausea: 'Náusea',
        bloating: 'Hinchazón',
        cravings: 'Antojos',
        irritability: 'Irritabilidad'
      }
    },

    // Tips Module
    tips: {
      title: 'Consejos de Expertos',
      subtitle: 'Maximiza tus resultados con orientación profesional',
      warning: 'Importante',
      noTips: 'No hay consejos disponibles para esta categoría',
      categories: {
        general: 'General',
        nutrition: 'Nutrición',
        hydration: 'Hidratación',
        exercise: 'Ejercicio',
        wellness: 'Bienestar'
      },
      content: {
        general: [
          {
            title: 'Comienza Gradualmente',
            content: 'Comienza con pequeñas cantidades de sal rosa y aumenta gradualmente para permitir que tu cuerpo se adapte.',
            warning: 'Nunca excedas 1 cucharadita de sal rosa por día sin supervisión médica.'
          },
          {
            title: 'La Calidad Importa',
            content: 'Siempre usa sal rosa auténtica del Himalaya. Busca variedades sin refinar y sin aditivos.',
          },
          {
            title: 'El Momento es Clave',
            content: 'Toma agua de sal rosa a primera hora de la mañana con el estómago vacío para mejores resultados.'
          }
        ],
        nutrition: [
          {
            title: 'Dieta Equilibrada',
            content: 'Combina el protocolo con una dieta equilibrada rica en verduras, proteínas magras y grasas saludables.'
          },
          {
            title: 'Evita Alimentos Procesados',
            content: 'Minimiza los alimentos procesados altos en sal de mesa común durante el período del protocolo.'
          },
          {
            title: 'Horario de Comidas',
            content: 'Come tu comida más grande temprano en el día y mantén la cena ligera y temprano.'
          }
        ],
        hydration: [
          {
            title: 'Calidad del Agua',
            content: 'Usa agua filtrada o de manantial para mezclar con sal rosa para evitar cloro y otros químicos.'
          },
          {
            title: 'La Temperatura Importa',
            content: 'El agua tibia ayuda a disolver mejor la sal y es más suave para tu sistema digestivo.'
          },
          {
            title: 'Ingesta Consistente',
            content: 'Distribuye tu ingesta de agua durante el día en lugar de beber grandes cantidades de una vez.'
          }
        ],
        exercise: [
          {
            title: 'Movimiento Ligero',
            content: 'Incorpora ejercicio suave como caminar o yoga para potenciar el proceso de desintoxicación.'
          },
          {
            title: 'Hidratación Post-Ejercicio',
            content: 'Repone electrolitos después del ejercicio con agua de sal rosa en lugar de bebidas deportivas.'
          }
        ],
        wellness: [
          {
            title: 'Calidad del Sueño',
            content: 'La sal rosa puede ayudar a mejorar la calidad del sueño equilibrando electrolitos y reduciendo el estrés.'
          },
          {
            title: 'Manejo del Estrés',
            content: 'Practica técnicas de reducción del estrés como meditación o ejercicios de respiración profunda.'
          },
          {
            title: 'Escucha a Tu Cuerpo',
            content: 'Presta atención a cómo responde tu cuerpo y ajusta el protocolo en consecuencia.'
          }
        ]
      },
      quickFacts: {
        title: 'Datos Rápidos',
        facts: [
          'La sal rosa contiene más de 84 minerales traza',
          'Ayuda a mantener el equilibrio adecuado del pH',
          'Apoya la función adrenal y tiroidea',
          'Puede ayudar a reducir la inflamación',
          'Puede mejorar la salud de la piel cuando se usa tópicamente'
        ]
      },
      disclaimer: {
        title: 'Descargo de Responsabilidad Médica',
        content: 'Este protocolo es solo para fines educativos. Consulta con un proveedor de atención médica antes de comenzar, especialmente si tienes presión arterial alta, problemas renales u otras condiciones médicas.'
      }
    },

    // Settings Module
    settings: {
      title: 'Configuración',
      subtitle: 'Personaliza tu experiencia en la app',
      language: {
        title: 'Configuración de Idioma',
        description: 'Elige tu idioma preferido'
      },
      data: {
        title: 'Gestión de Datos',
        completedDays: 'Días Completados',
        notes: 'Entradas del Diario',
        storage: 'Almacenamiento Usado',
        export: 'Exportar Mis Datos',
        exportDescription: 'Descarga tus datos de progreso como archivo JSON para respaldo o transferencia.'
      },
      about: {
        title: 'Información de la App',
        version: 'Versión',
        protocol: 'Protocolo',
        duration: 'Duración',
        days: 'días'
      },
      privacy: {
        title: 'Privacidad y Seguridad',
        local: 'Todos los datos almacenados localmente en tu dispositivo',
        noServer: 'No se envían datos a servidores externos',
        noTracking: 'Sin seguimiento o análisis'
      },
      danger: {
        title: 'Zona de Peligro',
        description: 'Esta acción eliminará permanentemente todos tus datos y no se puede deshacer.',
        clearAll: 'Limpiar Todos los Datos'
      },
      confirmClear: '¿Estás seguro de que quieres eliminar todos tus datos? Esta acción no se puede deshacer.',
      dataCleared: 'Todos los datos han sido limpiados exitosamente.',
      footer: {
        madeWith: 'Hecho con',
        disclaimer: 'Siempre consulta profesionales de la salud antes de comenzar cualquier nuevo protocolo de salud.'
      }
    }
  }
};

export const languageNames = {
  en: 'English',
  pt: 'Português',
  it: 'Italiano',
  de: 'Deutsch',
  es: 'Español'
};