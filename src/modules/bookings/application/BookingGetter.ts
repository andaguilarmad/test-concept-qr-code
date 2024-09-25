import { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { HttpError } from '@/modules/shared/domain/HttpError'
import type { BookingRepository } from '../domain'
import { Booking } from '../domain/Booking'

export class BookingGetter {
  private readonly repository: BookingRepository

  constructor(repository: BookingRepository) {
    this.repository = repository
  }

  async get(bookingId: string): Promise<Failure<HttpError> | Success<Booking>> {
    return await this.repository.get(bookingId)
  }
}
