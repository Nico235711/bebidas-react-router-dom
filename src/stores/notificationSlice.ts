import { StateCreator } from "zustand"

type Notification = {
  text: string
  error: boolean
  show: boolean
}

export type NotificationSliceType = {
  notification: Notification
}

// slice pattern
export const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
  notification: {} as Notification
})