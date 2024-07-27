import { StateCreator } from "zustand"
import { DrinkDetails } from "../types"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"

export type FavouritesSliceType = {
  favourites: DrinkDetails[]
  ifExists: boolean
  addFavourite: (drink: DrinkDetails) => void
  getIdDrink: (idDrink: DrinkDetails["idDrink"]) => void
  loadFromStorage: () => void
}

// slice pattern
export const createFavouriteSlice: StateCreator<FavouritesSliceType & NotificationSliceType, [], [], FavouritesSliceType> = (set, get, api) => ({
  favourites: [],
  ifExists: false,
  addFavourite: (drink) => {

    if (get().favourites.some(favourite => favourite.idDrink === drink.idDrink)) {
      set((state) => ({
        favourites: state.favourites.filter(favourite => favourite.idDrink !== drink.idDrink)
      }))
      createNotificationSlice(set, get, api).showNotification({
        text: "Se elimino de favoritos",
        error: true
      })
    } else {
      set((state) => ({
        favourites: [...state.favourites, drink]
      }))
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego a favoritos",
        error: false
      })
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