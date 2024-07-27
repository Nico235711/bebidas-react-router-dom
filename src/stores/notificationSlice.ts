import { StateCreator } from "zustand"
import { FavouritesSliceType } from "./favouriteSlice"

type Notification = {
  text: string
  error: boolean
  show: boolean
}

export type NotificationSliceType = {
  notification: Notification
  showNotification: (payload: Pick<Notification, "error" | "text">) => void
}

// slice pattern
export const createNotificationSlice: StateCreator<NotificationSliceType & FavouritesSliceType, [], [], NotificationSliceType> = (set) => ({
  notification: {
    text: "",
    error: false,
    show: false
  },
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true
      }
    })
  }
})