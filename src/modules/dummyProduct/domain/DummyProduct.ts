import { AggregateRoot } from '@/modules/shared/domain/AggregateRoot'

export type DummyProductPrimitive = {
  id: string,
  title: string
}

export class DummyProduct extends AggregateRoot<DummyProductPrimitive> {
  readonly id: string
  readonly title: string

  constructor(id: string, title: string) {
    super()
    this.id = id
    this.title = title
  }

  static create(id: string, title: string) {
    return new DummyProduct(id, title)
  }

  static fromPrimitives(dummyProduct: DummyProductPrimitive): DummyProduct {
    return DummyProduct.create(dummyProduct.id, dummyProduct.title)
  }

  toPrimitives(): DummyProductPrimitive {
    return {
      id: this.id,
      title: this.title
    }
  }
}
