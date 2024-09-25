import { Booking } from '@/modules/bookings/domain/Booking'
import type { BookingPrimitive } from '@/modules/bookings/domain/Booking'
import { defineStore } from 'pinia'

interface State {
  booking?: Booking
  bookings: Booking[]
}

export const useBookingsStore = defineStore('bookings', {
  state: (): State => ({
    booking: undefined,
    bookings: [],
  }),

  getters: {
    getBooking(): BookingPrimitive | null {
      if (!this.booking) {
        return null
      }
      return this.booking.toPrimitives()
    },
  },

  actions: {
    setBooking(booking: Booking): void {
      this.booking = booking
    },
  },
})
