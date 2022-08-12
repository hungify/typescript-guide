//#13: DRY up your generic signatures with DEFAULT GENERICS

// Not have nested object
export type Obj = {
  a: 'abc';
  a1: 'edf';
  a2: '123';
  b: 'This is B';
  c: 'c';
};

type ValueOfKeysStartsWithAny<
  Obj,
  Key extends string,
  _Extracted extends keyof Obj = Extract<keyof Obj, `${Key}${string}`>,
> = {
  [K in _Extracted]: Obj[K];
}[_Extracted];

type Value = ValueOfKeysStartsWithAny<Obj, 'b'>;

type KeysStartsWithA<Obj> = Extract<keyof Obj, `a${string}`>;

type Keys = KeysStartsWithA<Obj>;
