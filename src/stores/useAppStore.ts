import { create } from 'zustand';
import { RecipesSliceType, createRecipeSlice } from './recipeSlice';

export const useAppStore = create<RecipesSliceType>( (...args) => ({
  ...createRecipeSlice(...args)
}))