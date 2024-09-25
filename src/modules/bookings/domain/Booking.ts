import { AggregateRoot } from '@/modules/shared/domain/AggregateRoot'

export type BookingPrimitive = {
  property_code: string
  iddef_country: number
  iddef_currency: number
  discount_amount: number
  from_date: Date
  discount_percent: number
  code_reservation: string
  country_code: string
  iddef_currency_user: number
  iddef_language: number
  to_date: Date
  fecha_creacion: Date
  child: number
  market_code: string
  currency_code_user: string
  nights: number
  total_rooms: number
  total_gross: number
  total: number
  lang_code: string
  adults: number
  idbook_hotel: number
  iddef_channel: number
  iddef_property: number
  iddef_market_segment: number
  currency_code: string
  idbook_status: number
}

export class Booking extends AggregateRoot<BookingPrimitive> {
  readonly property_code: string
  readonly iddef_country: number
  readonly iddef_currency: number
  readonly discount_amount: number
  readonly from_date: Date
  readonly discount_percent: number
  readonly code_reservation: string
  readonly country_code: string
  readonly iddef_currency_user: number
  readonly iddef_language: number
  readonly to_date: Date
  readonly fecha_creacion: Date
  readonly child: number
  readonly market_code: string
  readonly currency_code_user: string
  readonly nights: number
  readonly total_rooms: number
  readonly total_gross: number
  readonly total: number
  readonly lang_code: string
  readonly adults: number
  readonly idbook_hotel: number
  readonly iddef_channel: number
  readonly iddef_property: number
  readonly iddef_market_segment: number
  readonly currency_code: string
  readonly idbook_status: number

  constructor(
    property_code: string,
    iddef_country: number,
    iddef_currency: number,
    discount_amount: number,
    from_date: Date,
    discount_percent: number,
    code_reservation: string,
    country_code: string,
    iddef_currency_user: number,
    iddef_language: number,
    to_date: Date,
    fecha_creacion: Date,
    child: number,
    market_code: string,
    currency_code_user: string,
    nights: number,
    total_rooms: number,
    total_gross: number,
    total: number,
    lang_code: string,
    adults: number,
    idbook_hotel: number,
    iddef_channel: number,
    iddef_property: number,
    iddef_market_segment: number,
    currency_code: string,
    idbook_status: number
  ) {
    super()
    this.property_code = property_code
    this.iddef_country = iddef_country
    this.iddef_currency = iddef_currency
    this.discount_amount = discount_amount
    this.from_date = from_date
    this.discount_percent = discount_percent
    this.code_reservation = code_reservation
    this.country_code = country_code
    this.iddef_currency_user = iddef_currency_user
    this.iddef_language = iddef_language
    this.to_date = to_date
    this.fecha_creacion = fecha_creacion
    this.child = child
    this.market_code = market_code
    this.currency_code_user = currency_code_user
    this.nights = nights
    this.total_rooms = total_rooms
    this.total_gross = total_gross
    this.total = total
    this.lang_code = lang_code
    this.adults = adults
    this.idbook_hotel = idbook_hotel
    this.iddef_channel = iddef_channel
    this.iddef_property = iddef_property
    this.iddef_market_segment = iddef_market_segment
    this.currency_code = currency_code
    this.idbook_status = idbook_status
  }

  static create(
    property_code: string,
    iddef_country: number,
    iddef_currency: number,
    discount_amount: number,
    from_date: Date,
    discount_percent: number,
    code_reservation: string,
    country_code: string,
    iddef_currency_user: number,
    iddef_language: number,
    to_date: Date,
    fecha_creacion: Date,
    child: number,
    market_code: string,
    currency_code_user: string,
    nights: number,
    total_rooms: number,
    total_gross: number,
    total: number,
    lang_code: string,
    adults: number,
    idbook_hotel: number,
    iddef_channel: number,
    iddef_property: number,
    iddef_market_segment: number,
    currency_code: string,
    idbook_status: number
  ): Booking {
    return new Booking(
      property_code,
      iddef_country,
      iddef_currency,
      discount_amount,
      from_date,
      discount_percent,
      code_reservation,
      country_code,
      iddef_currency_user,
      iddef_language,
      to_date,
      fecha_creacion,
      child,
      market_code,
      currency_code_user,
      nights,
      total_rooms,
      total_gross,
      total,
      lang_code,
      adults,
      idbook_hotel,
      iddef_channel,
      iddef_property,
      iddef_market_segment,
      currency_code,
      idbook_status
    )
  }

  static fromPrimitives(booking: BookingPrimitive): Booking {
    return Booking.create(
      booking.property_code,
      booking.iddef_country,
      booking.iddef_currency,
      booking.discount_amount,
      booking.from_date,
      booking.discount_percent,
      booking.code_reservation,
      booking.country_code,
      booking.iddef_currency_user,
      booking.iddef_language,
      booking.to_date,
      booking.fecha_creacion,
      booking.child,
      booking.market_code,
      booking.currency_code_user,
      booking.nights,
      booking.total_rooms,
      booking.total_gross,
      booking.total,
      booking.lang_code,
      booking.adults,
      booking.idbook_hotel,
      booking.iddef_channel,
      booking.iddef_property,
      booking.iddef_market_segment,
      booking.currency_code,
      booking.idbook_status
    )
  }

  toPrimitives(): BookingPrimitive {
    return {
      property_code: this.property_code,
      iddef_country: this.iddef_country,
      iddef_currency: this.iddef_currency,
      discount_amount: this.discount_amount,
      from_date: this.from_date,
      discount_percent: this.discount_percent,
      code_reservation: this.code_reservation,
      country_code: this.country_code,
      iddef_currency_user: this.iddef_currency_user,
      iddef_language: this.iddef_language,
      to_date: this.to_date,
      fecha_creacion: this.fecha_creacion,
      child: this.child,
      market_code: this.market_code,
      currency_code_user: this.currency_code_user,
      nights: this.nights,
      total_rooms: this.total_rooms,
      total_gross: this.total_gross,
      total: this.total,
      lang_code: this.lang_code,
      adults: this.adults,
      idbook_hotel: this.idbook_hotel,
      iddef_channel: this.iddef_channel,
      iddef_property: this.iddef_property,
      iddef_market_segment: this.iddef_market_segment,
      currency_code: this.currency_code,
      idbook_status: this.idbook_status,
    }
  }
}
