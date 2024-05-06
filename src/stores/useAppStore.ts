import { create } from 'zustand';
import { RecipesSliceType, createRecipeSlice } from './recipeSlice';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<RecipesSliceType>()(devtools( 
  (...args) => ({
    ...createRecipeSlice(...args)
  }))
)