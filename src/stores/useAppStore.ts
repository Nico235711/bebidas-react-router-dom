import { FavouritesSliceType, createFavouriteSlice } from './favouriteSlice';
import { create } from 'zustand';
import { RecipesSliceType, createRecipeSlice } from './recipeSlice';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<RecipesSliceType & FavouritesSliceType>()(devtools( 
  (...args) => ({
    ...createRecipeSlice(...args),
    ...createFavouriteSlice(...args)
  }))
)