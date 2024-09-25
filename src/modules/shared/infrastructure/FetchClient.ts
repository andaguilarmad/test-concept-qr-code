import type { Http } from '@/modules/shared/domain/Http'
import type { HttpConfig } from '@/modules/shared/domain/HttpConfig'

export default class FetchClient implements Http {
  private readonly API_NAME: string = 'example'

  private readonly ENDPOINTS: Record<string, string> = {
    api: import.meta.env.VITE_BASE_API ?? '',
    example: import.meta.env.VITE_EXAMPLE_API ?? '',
  }

  async get<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const ENDPOINT_NAME: string =
      this.ENDPOINTS[config?.baseUrl ?? this.API_NAME]
    const response = await fetch(`${ENDPOINT_NAME}${path}`, {
      method: 'GET',
    })

    return await response.json()
  }

  async post<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const ENDPOINT_NAME: string =
      this.ENDPOINTS[config?.baseUrl ?? this.API_NAME]
    const response = await fetch(`${ENDPOINT_NAME}${path}`, {
      method: 'POST',
      body: JSON.stringify(config?.body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }

  async put<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const ENDPOINT_NAME: string =
      this.ENDPOINTS[config?.baseUrl ?? this.API_NAME]
    const response = await fetch(`${ENDPOINT_NAME}${path}`, {
      method: 'PUT',
      body: JSON.stringify(config?.body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }

  async patch<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const ENDPOINT_NAME: string =
      this.ENDPOINTS[config?.baseUrl ?? this.API_NAME]
    const response = await fetch(`${ENDPOINT_NAME}${path}`, {
      method: 'PATCH',
      body: JSON.stringify(config?.body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  }

  async delete<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const ENDPOINT_NAME: string =
      this.ENDPOINTS[config?.baseUrl ?? this.API_NAME]
    const response = await fetch(`${ENDPOINT_NAME}${path}`, {
      method: 'DELETE',
    })

    return await response.json()
  }
}
