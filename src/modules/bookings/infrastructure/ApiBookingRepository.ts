import type { BookingRepository } from '@/modules/bookings/domain'
import { Failure, Success } from '@/modules/shared/domain/EasyResult'
import type { Http } from '@/modules/shared/domain/Http'
import type { HttpConfig } from '@/modules/shared/domain/HttpConfig'
import { HttpError } from '@/modules/shared/domain/HttpError'
import type {
  AmplifyResponse,
  Response,
} from '@/modules/shared/domain/Response'
import { Booking } from '../domain/Booking'

export class ApiBookingRepository implements BookingRepository {
  private readonly http: Http

  constructor(http: Http) {
    this.http = http
  }

  async get(bookingId: string): Promise<Failure<HttpError> | Success<Booking>> {
    try {
      const response = await this.http.get<
        HttpConfig<never>,
        AmplifyResponse<Response<Booking>>
      >(`/api/internal/booking/${bookingId}`)

      const body = await response.body.json()

      const data = Booking.fromPrimitives({
        ...body.data,
      })

      // Sí la petición al API es exitosa retornamos una respuesta exitosa
      return Success.create(data)
    } catch (e: any) {
      // Si algo falla retornamos una respuesta de error
      console.log(e)
      return Failure.create(new HttpError(404, 'error'))
    }
  }
}
