import { StateCreator } from "zustand"
import { DrinkDetails } from "../types"

export type FavouritesSliceType = {
  favourites: DrinkDetails[]
  addFavourite: (drink: DrinkDetails) => void
}

// slice pattern
export const createFavouriteSlice: StateCreator<FavouritesSliceType> = (set, get) => ({
  favourites: [],
  addFavourite: (drink) => {
    
    if (get().favourites.some(favourite => favourite.idDrink === drink.idDrink)) {
      set((state) => ({
        favourites: state.favourites.filter(favourite => favourite.idDrink !== drink.idDrink)
      }))
    } else {
      set((state) => ({
        favourites: [...state.favourites, drink]
      }))
    }
  }
})