// 3: noUncheckedIndexAccess - the BEST config option you've never heard
export const myObj: Record<string, string[]> = {};

//    "noUncheckedIndexedAccess": false, and default is false
// this line will not error
myObj.foo.push('bar');

//    "noUncheckedIndexedAccess": true
// this line will error
myObj.foo.push('bar');

// solution:
if (!myObj.foo) {
  myObj.foo = [];
}
myObj.foo.push('bar');
