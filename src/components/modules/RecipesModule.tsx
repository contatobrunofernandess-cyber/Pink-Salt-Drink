"use client";

import React, { useState } from 'react';
import { useApp } from '@/lib/context';
import { translations } from '@/lib/translations';
import { recipes } from '@/lib/data';
import { Clock, Users } from 'lucide-react';

export function RecipesModule() {
  const { language } = useApp();
  const t = translations[language];
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const selectedRecipeData = recipes.find(r => r.id === selectedRecipe);

  if (selectedRecipeData) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <button 
            onClick={() => setSelectedRecipe(null)}
            className="text-pink-600 hover:text-pink-700 font-medium text-sm"
          >
            ← {t.recipes.back}
          </button>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={selectedRecipeData.image} 
            alt={selectedRecipeData.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-2">{selectedRecipeData.title}</h3>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{selectedRecipeData.prepTime} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{selectedRecipeData.servings} {t.recipes.servings}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">{t.recipes.ingredients}</h4>
                <ul className="space-y-1">
                  {selectedRecipeData.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">{t.recipes.instructions}</h4>
                <ol className="space-y-2">
                  {selectedRecipeData.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm text-gray-700 flex gap-3">
                      <span className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=64&h=64&fit=crop&crop=center" 
            alt="Healthy Food" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.recipes.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{t.recipes.subtitle}</p>
      </div>

      <div className="space-y-3">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe.id)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-20 h-20 object-cover flex-shrink-0"
              />
              <div className="p-3 flex-1">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{recipe.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{recipe.servings}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    recipe.category === 'breakfast' ? 'bg-yellow-100 text-yellow-700' :
                    recipe.category === 'lunch' ? 'bg-green-100 text-green-700' :
                    recipe.category === 'dinner' ? 'bg-blue-100 text-blue-700' :
                    recipe.category === 'snack' ? 'bg-purple-100 text-purple-700' :
                    'bg-pink-100 text-pink-700'
                  }`}>
                    {recipe.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Recipe Banner */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl p-4 text-white mt-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=60&h=60&fit=crop&crop=center" 
            alt="Pink Salt" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">Featured Ingredient</h3>
            <p className="text-pink-100 text-xs">Pink Himalayan Salt - Rich in 84 minerals</p>
          </div>
        </div>
      </div>
    </div>
  );
}