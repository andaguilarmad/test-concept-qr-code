import type { Http } from '@/modules/shared/domain/Http'
import { ApiDummyProductRepository } from '@/modules/dummyProduct/infrastructure/ApiDummyProductRepository'
import { DummyProductCreator } from '@/modules/dummyProduct/application/DummyProductCreator'

export interface providerUseCaseDummyProducts {
  dummyProductCreator: DummyProductCreator
}

export function providerDummyProducts(http: Http): providerUseCaseDummyProducts {
  const dummyProductRepository = new ApiDummyProductRepository(http)
  const dummyProductCreator = new DummyProductCreator(dummyProductRepository)

  return {
    dummyProductCreator
  }
}
