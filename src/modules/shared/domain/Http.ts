import type { HttpConfig } from '@/modules/shared/domain/HttpConfig'

export interface Http {
  get: <U, T>(path: string, config?: HttpConfig<U>) => Promise<T>
  post: <U, T>(path: string, config?: HttpConfig<U>) => Promise<T>
  put: <U, T>(path: string, config?: HttpConfig<U>) => Promise<T>
  patch: <U, T>(path: string, config?: HttpConfig<U>) => Promise<T>
  delete: <U, T>(path: string, config?: HttpConfig<U>) => Promise<T>
}
