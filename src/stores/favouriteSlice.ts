import { StateCreator } from "zustand"
import { DrinkDetails } from "../types"

export type FavouritesSliceType = {
  favourites: DrinkDetails[]
  ifExists: boolean
  addFavourite: (drink: DrinkDetails) => void
  getIdDrink: (idDrink: DrinkDetails["idDrink"]) => void
  loadFromStorage: () => void
}

// slice pattern
export const createFavouriteSlice: StateCreator<FavouritesSliceType> = (set, get) => ({
  favourites: [],
  ifExists: false,
  addFavourite: (drink) => {

    if (get().favourites.some(favourite => favourite.idDrink === drink.idDrink)) {
      set((state) => ({
        favourites: state.favourites.filter(favourite => favourite.idDrink !== drink.idDrink)
      }))
      // createNotificationSlice().showNotification({ "" })
    } else {
      set((state) => ({
        favourites: [...state.favourites, drink]
      }))
    }
    localStorage.setItem("favourites", JSON.stringify(get().favourites))
  },
  getIdDrink: (idDrink) => {
    set((state) => ({
      ifExists: state.favourites.some(favourite => favourite.idDrink === idDrink)
    }))
  },
  loadFromStorage: () => {
    const storedFavourites = localStorage.getItem("favourites")
    if (storedFavourites) {
      set({
        favourites: JSON.parse(storedFavourites)
      })
    }
  }
})