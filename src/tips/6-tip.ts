// #6: CUSTOM ERRORS
type CheckForBadArg<Arg> = Arg extends unknown[] ? 'You cannot pass an array as an argument' : Arg;

export const deepEqualCompare = <Arg>(a: CheckForBadArg<Arg>, b: CheckForBadArg<Arg>): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error('You cannot compare two array using deepEqualCompare');
  }
  return a === b;
};

deepEqualCompare(1, 2);
deepEqualCompare([], []);
