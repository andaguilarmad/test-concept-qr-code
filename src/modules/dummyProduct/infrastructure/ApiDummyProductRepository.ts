import { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { HttpError } from '@/modules/shared/domain/HttpError'
import { DummyProduct } from '@/modules/dummyProduct/domain/DummyProduct'
import type { DummyProductRepository } from '@/modules/dummyProduct/domain'
import type { Http } from '@/modules/shared/domain/Http'

export class ApiDummyProductRepository implements DummyProductRepository {
  private readonly http: Http

  constructor(http: Http) {
    this.http = http
  }

  async create(productName: string): Promise<Failure<HttpError> | Success<DummyProduct>> {
    try {
      const response = await this.http.post<{ title: string }, DummyProduct>('/products/add', {
        body: { title: productName }
      })

      const data = DummyProduct.fromPrimitives({ ...response })
      return Success.create(data)
    } catch (error) {
      return Failure.create(new HttpError(404, 'error'))
    }
  }
}