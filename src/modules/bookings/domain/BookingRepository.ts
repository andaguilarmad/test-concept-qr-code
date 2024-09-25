import type { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { Booking } from './Booking'
import { HttpError } from '@/modules/shared/domain/HttpError'

export interface BookingRepository {
  get: (bookingId: string) => Promise<Failure<HttpError> | Success<Booking>>
}
