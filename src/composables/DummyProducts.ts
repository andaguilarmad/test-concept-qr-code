import { inject, ref } from 'vue'
import { Failure, Success } from '@/modules/shared/domain/EasyResult'
import { useDummyProductsStore } from '@/stores/DummyProducts'
import IndexedDb from '@/plugins/indexedDB'
import type { Ref } from 'vue'
import type { providerUseCaseDummyProducts } from '@/dependencies/DummyProducts'

export interface UseDummyProducts {
  createProduct: (productName: string, isNetworkConnected: boolean) => Promise<void>,
  resetProduct: () => void
  loading: Ref<boolean>,
  error: Ref<boolean>
}

export function useDummyProducts(): UseDummyProducts {
  const provider = inject<providerUseCaseDummyProducts>('providerDummyProducts')
  const dummyProductsStore = useDummyProductsStore()
  const loading = ref<boolean>(false)
  const error = ref<boolean>(false)

  const createProduct = async (productName: string, isNetworkConnected: boolean = true): Promise<void> => {
    loading.value = true

    if (!isNetworkConnected && 'indexedDB' in window) {
      try {
        await IndexedDb.setKey(productName, `${Date.now()}`)
        error.value = false
      } catch (err) {
        error.value = true
      }
    } else {
      const response = await provider?.dummyProductCreator?.create(productName)!

      if (Success.check(response)) {
        dummyProductsStore.setDummyProduct(response.value!)
        error.value = false
      }

      if (Failure.check(response)) {
        error.value = true
      }
    }

    loading.value = false
  }

  const resetProduct = (): void => {
    dummyProductsStore.resetDummyProduct()
  }

  return {
    createProduct,
    resetProduct,
    loading,
    error
  }
}
