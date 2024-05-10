import { create } from 'zustand';
import { createFavouriteSlice, FavouritesSliceType } from './favouriteSlice';
import { createNotificationSlice, NotificationSliceType } from './notificationSlice';
import { createRecipeSlice, RecipesSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<RecipesSliceType & FavouritesSliceType & NotificationSliceType>()(devtools( 
  (...args) => ({
    ...createRecipeSlice(...args),
    ...createFavouriteSlice(...args),
    ...createNotificationSlice(...args)
  }))
)