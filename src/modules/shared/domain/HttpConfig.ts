import type { Payload } from "@/modules/shared/domain/Payload";

export interface HttpConfig<T> {
  body?: T;
  params?: Payload;
  baseUrl?: string;
}
