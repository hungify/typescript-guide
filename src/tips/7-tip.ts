// #7: DEEP PARTIAL

interface Post {
  id: string;
  comments: { value: string }[];
  meta: {
    name: string;
    description: string;
  };
}

// export interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}
export type DeepPartialArray<Thing> = Array<DeepPartial<Thing>>;

interface Post {
  id: string;
  comments: { value: string }[];
  meta: {
    name: string;
    description: string;
  };
}

const deepPartialArray: DeepPartialArray<Post> = [
  {
    id: '1',
    comments: [{ value: '1' }],
    meta: {
      name: 'Alex',
    },
  },
];

export type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

const deepPartialObject: DeepPartialObject<Post> = {
  id: '1',
  meta: {
    name: 'Alex',
  },
};

export type DeepPartial<Thing> = Thing extends () => unknown // Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

const postWithPartial: Partial<Post> = {
  id: '1',
  comments: [{ value: '1' }],
  meta: {
    name: 'alex',
  },
};

const postWithDeepPartial: DeepPartial<Post> = {
  id: '1',
  comments: [{ value: '1' }],
  meta: {
    name: 'alex',
  },
};

console.log({ deepPartialArray, deepPartialObject, postWithPartial, postWithDeepPartial });
