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
  hideNotification: () => void
}

// slice pattern
export const createNotificationSlice: StateCreator<NotificationSliceType & FavouritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
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
    setTimeout(() => {
      get().hideNotification()
    }, 1500);
  },
  hideNotification: () => {
    set({
      notification: {
        text: "",
        error: false,
        show: false
      }
    })
  },
})