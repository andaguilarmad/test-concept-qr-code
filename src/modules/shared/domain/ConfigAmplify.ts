import type { Payload } from "@/modules/shared/domain/Payload";

export type DocumentType =
  | null
  | boolean
  | number
  | string
  | DocumentType[]
  | {
      [prop: string]: DocumentType;
    };

export interface ConfigAmplify {
  headers: Record<string, string>;
  // response: boolean;
  body?: DocumentType | FormData;
  queryParams?: Payload;
}
