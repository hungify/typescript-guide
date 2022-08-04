//#10: Master Generic Slots

export function makeKeyRemove<Key extends string>(keysToOmit: Key[]) {
  return function <Obj>(obj: Obj): Omit<Obj, Key> {
    return {} as Omit<Obj, Key>;
  };
}

const newObject = makeKeyRemove(['a', 'b'])({
  a: '1',
  d: '1',
  b: {
    b: '2',
  },
  c: {
    a: '1',
  },
});

newObject.c;
