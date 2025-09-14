// Dados das receitas para o Pink Salt Burn Protocol
export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'drink';
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Água Detox com Sal Rosa',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    prepTime: 5,
    servings: 1,
    ingredients: [
      '1 copo de água filtrada (250ml)',
      '1 pitada de sal rosa do Himalaia',
      '1/2 limão espremido',
      'Folhas de hortelã (opcional)'
    ],
    instructions: [
      'Aqueça a água até ficar morna',
      'Adicione o sal rosa e misture bem',
      'Acrescente o suco de limão',
      'Decore com folhas de hortelã',
      'Beba em jejum pela manhã'
    ],
    category: 'drink'
  },
  {
    id: '2',
    title: 'Salada Energética com Sal Rosa',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    prepTime: 15,
    servings: 2,
    ingredients: [
      '2 xícaras de folhas verdes mistas',
      '1 tomate cereja cortado',
      '1/2 pepino fatiado',
      '1/4 de abacate',
      '2 colheres de azeite extra virgem',
      '1 pitada de sal rosa do Himalaia',
      'Suco de 1/2 limão'
    ],
    instructions: [
      'Lave bem todas as folhas verdes',
      'Corte os tomates e o pepino',
      'Fatie o abacate',
      'Misture todos os ingredientes',
      'Tempere com azeite, sal rosa e limão',
      'Sirva imediatamente'
    ],
    category: 'lunch'
  },
  {
    id: '3',
    title: 'Smoothie Rosa Energizante',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    prepTime: 10,
    servings: 1,
    ingredients: [
      '1 banana congelada',
      '1/2 xícara de frutas vermelhas',
      '1 xícara de água de coco',
      '1 pitada de sal rosa do Himalaia',
      '1 colher de chia',
      'Gelo a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até obter consistência cremosa',
      'Adicione gelo se necessário',
      'Sirva em copo alto',
      'Decore com frutas vermelhas'
    ],
    category: 'breakfast'
  },
  {
    id: '4',
    title: 'Salmão Grelhado com Sal Rosa',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    prepTime: 20,
    servings: 2,
    ingredients: [
      '2 filés de salmão',
      '1 colher de chá de sal rosa do Himalaia',
      '2 colheres de azeite',
      '1 limão',
      'Ervas frescas (dill ou salsa)',
      'Pimenta-do-reino a gosto'
    ],
    instructions: [
      'Tempere o salmão com sal rosa e pimenta',
      'Deixe marinar por 15 minutos',
      'Aqueça uma frigideira com azeite',
      'Grelhe o salmão por 4-5 minutos de cada lado',
      'Finalize com suco de limão e ervas',
      'Sirva com vegetais'
    ],
    category: 'dinner'
  },
  {
    id: '5',
    title: 'Chá Digestivo com Sal Rosa',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    prepTime: 8,
    servings: 1,
    ingredients: [
      '1 xícara de água',
      '1 sachê de chá de camomila',
      '1 pitada pequena de sal rosa',
      '1 colher de mel (opcional)',
      'Fatia de gengibre fresco'
    ],
    instructions: [
      'Ferva a água com o gengibre',
      'Adicione o sachê de chá',
      'Deixe em infusão por 5 minutos',
      'Retire o sachê e o gengibre',
      'Adicione uma pitada de sal rosa',
      'Adoce com mel se desejar'
    ],
    category: 'drink'
  },
  {
    id: '6',
    title: 'Abacate com Sal Rosa',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop',
    prepTime: 5,
    servings: 1,
    ingredients: [
      '1 abacate maduro',
      '1 pitada de sal rosa do Himalaia',
      'Suco de 1/2 limão',
      'Pimenta-do-reino a gosto',
      'Azeite extra virgem (opcional)'
    ],
    instructions: [
      'Corte o abacate ao meio',
      'Retire o caroço',
      'Tempere com sal rosa',
      'Adicione o suco de limão',
      'Finalize com pimenta-do-reino',
      'Regue com azeite se desejar'
    ],
    category: 'snack'
  }
];

export const nutritionTips = [
  {
    id: '1',
    title: 'Hidratação Adequada',
    content: 'Beba água com sal rosa logo ao acordar para ativar o metabolismo e melhorar a hidratação celular.',
    icon: 'Droplets'
  },
  {
    id: '2',
    title: 'Timing das Refeições',
    content: 'Consuma sal rosa 30 minutos antes das refeições principais para melhorar a digestão.',
    icon: 'Clock'
  },
  {
    id: '3',
    title: 'Qualidade do Sal',
    content: 'Use apenas sal rosa do Himalaia puro, sem aditivos químicos ou antiumectantes.',
    icon: 'Sparkles'
  },
  {
    id: '4',
    title: 'Exercícios e Sal Rosa',
    content: 'Após exercícios intensos, reponha eletrólitos com água e uma pitada de sal rosa.',
    icon: 'Dumbbell'
  },
  {
    id: '5',
    title: 'Sono e Recuperação',
    content: 'Um banho com sal rosa antes de dormir ajuda no relaxamento e na recuperação muscular.',
    icon: 'Moon'
  },
  {
    id: '6',
    title: 'Combinações Poderosas',
    content: 'Combine sal rosa com limão e gengibre para potencializar os efeitos detox.',
    icon: 'Zap'
  }
];