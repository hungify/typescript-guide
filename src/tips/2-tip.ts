//#2: REMOVE a member of a Union Type

export type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? never : TType;

type WithoutC = RemoveC<Letters>;

const letterA: WithoutC = 'a';

const letterC: WithoutC = 'c';

console.table({ letterA, letterC });
