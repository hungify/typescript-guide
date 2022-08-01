// #8: Improving OBJECT.KEYS

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

//Issue
Object.keys(myObject).forEach((key) => {
  console.log(myObject[key]);
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ a: number; b: number; c: number; }'.
});

// Solution
export const ObjectKeys = <Obj>(obj: Obj): Array<keyof Obj> => {
  return Object.keys(obj) as (keyof Obj)[];
};

ObjectKeys(myObject).forEach((key) => {
  console.log(myObject[key]);
});
