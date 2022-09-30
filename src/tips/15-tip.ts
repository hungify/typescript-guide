export interface ApiData {
  'maps:longitude': string;
  'maps:latitude': string;
}

type RemoveMapsPrefix<T> = T extends `maps:${infer U}` ? U : T;

type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMapsPrefix<K>]: T[K];
};

type Result = RemoveMapsFromObj<ApiData>;
