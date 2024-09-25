import { defineStore } from 'pinia'
import { DummyProduct } from '@/modules/dummyProduct/domain/DummyProduct'
import type { DummyProductPrimitive } from '@/modules/dummyProduct/domain/DummyProduct'

interface State {
  dummyProduct?: DummyProduct
}

export const useDummyProductsStore = defineStore('dummyProducts', {
  state: (): State => ({
    dummyProduct: undefined
  }),

  getters: {
    getDummyProduct(): DummyProductPrimitive | null {
      if (!this.dummyProduct) {
        return null
      }

      return this.dummyProduct.toPrimitives()
    }
  },

  actions: {
    setDummyProduct(product: DummyProduct): void {
      this.dummyProduct = product
    },
    resetDummyProduct(): void {
      this.dummyProduct = undefined
    }
  }
})
