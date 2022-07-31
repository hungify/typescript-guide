// #8: Extracting React Props using CONDITIONAL TYPES

import React from 'react';

type Props = {
  enabled: true;
  name: string;
  age: 20;
  onClick: () => void;
};

export const MyComponent = (props: Props) => {
  console.log('🚀 :: props', props);
  return null;
};

export class MyOtherComponent extends React.Component<{
  enabled: true;
  name: string;
  age: 20;
  onClick: () => void;
}> {}

type FormForm<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;

const propsMyComponent: FormForm<typeof MyComponent> = {
  enabled: true,
  age: 20,
  name: 'John',
  onClick: () => {
    console.log('onClick');
  },
};

const propsMyOtherComponent: FormForm<MyOtherComponent> = {
  enabled: true,
  age: 20,
  name: 'John',
  onClick: () => {
    console.log('onClick');
  },
};

console.log({ propsMyComponent, propsMyOtherComponent });
