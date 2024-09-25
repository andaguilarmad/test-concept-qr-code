import AmplifyClient from '@/modules/shared/infrastructure/AmplifyClient'
import FetchClient from '@/modules/shared/infrastructure/FetchClient'

import { providerBookings } from '@/dependencies/Bookings'
import { providerDummyProducts } from '@/dependencies/DummyProducts'

const httpAmplify = new AmplifyClient()
const httpFetch = new FetchClient()

export default {
  providerBookings: () => providerBookings(httpAmplify),
  providerDummyProducts: () => providerDummyProducts(httpFetch)
}
