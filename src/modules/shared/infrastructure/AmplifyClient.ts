import { Amplify } from "aws-amplify";
import {
  get as AmplifyGet,
  post as AmplifyPost,
  put as AmplifyPut,
  del as AmplifyDelete,
  patch as AmplifyPatch,
} from "aws-amplify/api";

import type { Http } from "@/modules/shared/domain/Http";
import type { HttpConfig } from "@/modules/shared/domain/HttpConfig";
import type { ConfigAmplify } from "@/modules/shared/domain/ConfigAmplify";

export default class AmplifyClient implements Http {
  constructor() {
    this.instanceAmplify();
  }

  private instanceAmplify(): void {
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: 'us-east-1_c0YQaHd3G',
          userPoolClientId: '3berc6ieon7doightr87pjko9g',
          identityPoolId: 'us-east-1:973fe2b0-e179-4510-82f8-c5235e508433',
          allowGuestAccess: true
        }
      },
      API: {
        REST: {
          api: {
            endpoint: import.meta.env.VITE_BASE_API ?? "",
          },
          example: {
            endpoint: import.meta.env.VITE_EXAMPLE_API ?? "",
          },
        },
      },
    });
  }

  private readonly API_NAME: string = "api";

  private readonly DEFAULT_CONFIG: ConfigAmplify = {
    headers: {},
    // response: true,
  };

  async get<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    return AmplifyGet({
      apiName: API_NAME,
      path,
      options: this.mergeConfig(config),
    }).response as Promise<U>;
  }

  async post<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    console.log("🚀 ~ AmplifyClient ~ API_NAME:", API_NAME)
    return AmplifyPost({
      apiName: API_NAME,
      path,
      options: this.mergeConfig(config),
    }).response as Promise<U>;
  }

  async put<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    return AmplifyPut({
      apiName: API_NAME,
      path,
      options: this.mergeConfig(config),
    }).response as Promise<U>;
  }

  async patch<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    return AmplifyPatch({
      apiName: API_NAME,
      path,
      options: this.mergeConfig(config),
    }).response as Promise<U>;
  }

  async delete<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    return AmplifyDelete({
      apiName: API_NAME,
      path,
      options: this.mergeConfig(config),
    }).response as Promise<U>;
  }

  /*

  async post<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    const response = await post(API_NAME, path, this.mergeConfig(config));
    return response;
  }

  async put<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    const response = await put(API_NAME, path, this.mergeConfig(config));
    return response;
  }

  async patch<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    const response = await patch(API_NAME, path, this.mergeConfig(config));
    return response;
  }

  async delete<T, U>(path: string, config?: HttpConfig<T>): Promise<U> {
    const API_NAME = config?.baseUrl ?? this.API_NAME;
    const response = await del(API_NAME, path, this.mergeConfig(config));
    return response;
  }
  */

  private mergeConfig<T>(config?: HttpConfig<T>): ConfigAmplify {
    if (config == null) {
      return this.DEFAULT_CONFIG;
    }

    return {
      ...this.DEFAULT_CONFIG,
      queryParams: config?.params,
      body: config?.body ?? {},
    };
  }
}
