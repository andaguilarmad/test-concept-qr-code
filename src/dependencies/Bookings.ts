import type { Http } from '@/modules/shared/domain/Http'

/* 2. Imports Repositories */
import { ApiBookingRepository } from '@/modules/bookings/infrastructure/ApiBookingRepository'

/* 3. Imports UseCases */
import { BookingGetter } from '@/modules/bookings/application/BookingGetter'

export interface providerUseCaseBookings {
  bookingGetter: BookingGetter
}

export function providerBookings(http: Http): providerUseCaseBookings {
  const bookingRepository = new ApiBookingRepository(http)

  const bookingGetter = new BookingGetter(bookingRepository)

  return {
    bookingGetter,
  }
}
