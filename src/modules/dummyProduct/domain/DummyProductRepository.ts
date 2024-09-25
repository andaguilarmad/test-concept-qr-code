import type { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { DummyProduct } from '@/modules/dummyProduct/domain/DummyProduct'
import { HttpError } from '@/modules/shared/domain/HttpError'

export interface DummyProductRepository {
  create: (productName: string) => Promise<Failure<HttpError> | Success<DummyProduct>>
}
