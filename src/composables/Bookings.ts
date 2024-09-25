import { inject, ref } from 'vue'
import type { Ref } from 'vue'

import type { providerUseCaseBookings } from '@/dependencies/Bookings'

import { useBookingsStore } from '@/stores/Bookings'
import { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { Booking } from '@/modules/bookings/domain/Booking'

export interface UseBookings {
  fetchBooking: (bookingId: string) => Promise<void>
  increment: () => void
  count: Ref<number>
  loading: Ref<boolean>
  error: Ref<boolean>
}

export function useBookings(): UseBookings {
  const provider = inject<providerUseCaseBookings>('providerBookings')
  const bookingsStore = useBookingsStore()
  const loading = ref(false)
  const error = ref(false)

  const fetchBooking = async (bookingId: string): Promise<void> => {
    loading.value = true

    // Hacemos uso del Provider para acceder al UseCase AllLaunchesGetter
    const response = await provider?.bookingGetter?.get(bookingId)!

    // Validamos que la respuesta sea exitosa y la asignamos al store de la aplicación
    if (Success.check(response))
      bookingsStore.setBooking(response.value! as Booking)

    // Escenario en caso de que la respuesta no sea exitosa y contenga un error
    if (Failure.check(response)) {
      // bookingsStore.setBooking(null);
      error.value = true
    }

    loading.value = false
  }

  const count = ref(0)
  const increment = () => count.value++

  return {
    count,
    increment,
    fetchBooking,
    loading,
    error,
  }
}
