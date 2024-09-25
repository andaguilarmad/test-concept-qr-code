import type { NetworkMessage } from "@/modules/shared/domain/NetworkMessage";

export interface Response<T> {
  meta?: T;
  data: T;
  warnings: NetworkMessage[];
  errors: NetworkMessage[];
}

interface ResponsePayload<T> {
  blob(): Promise<Blob>;
  json(): Promise<T>;
  text(): Promise<string>;
}

export interface AmplifyResponse<T> {
  body: ResponsePayload<T>;
  // body: ResponsePayload;
  statusCode: number;
  headers: Headers;
}
