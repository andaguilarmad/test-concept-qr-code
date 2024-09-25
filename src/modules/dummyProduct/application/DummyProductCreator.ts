import { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { HttpError } from '@/modules/shared/domain/HttpError'
import { DummyProduct } from '@/modules/dummyProduct/domain/DummyProduct'
import type { DummyProductRepository } from '@/modules/dummyProduct/domain'

export class DummyProductCreator {
  private readonly repository: DummyProductRepository

  constructor(repository: DummyProductRepository) {
    this.repository = repository
  }

  async create(productName: string):  Promise<Failure<HttpError> | Success<DummyProduct>> {
    return await this.repository.create(productName)
  }
}
