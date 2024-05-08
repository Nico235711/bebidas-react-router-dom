import { StateCreator } from "zustand"
import { DrinkDetails } from "../types"

export type FavouritesSliceType = {
  favourites: DrinkDetails[]
}

// importo StateCreator para tener autocompletado
export const createFavouriteSlice: StateCreator<FavouritesSliceType> = (set) => ({
  favourites: [] 
})