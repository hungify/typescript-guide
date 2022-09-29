export interface ColorVariants {
  primary: 'blue';
  secondary: 'green';
  tertiary: 'red';
}

type PrimaryColor = ColorVariants['primary'];
type NonPrimaryColor = ColorVariants['secondary' | 'tertiary'];
type EveryColor = ColorVariants[keyof ColorVariants];

type Letters = ['a', 'b', 'c'];
type AOrB = Letters[0 | 1];
type Letter = Letters[number];

export enum ROLES {
  Admin = 'Admin',
  Editor = 'Editor',
  Subscriber = 'Subscriber',
  Guest = 'Guest',
}

export enum ACTIONS {
  create = 'create',
  delete = 'delete',
  edit = 'edit',
  read = 'read',
}

export enum SUBJECTS {
  Auth = 'Auth',
  Todo = 'Todo',
}

export interface AbilityConfig {
  [ROLES.Admin]: {
    [SUBJECTS.Auth]: [ACTIONS.create, ACTIONS.delete, ACTIONS.edit, ACTIONS.read];
    [SUBJECTS.Todo]: [ACTIONS.create, ACTIONS.delete, ACTIONS.edit, ACTIONS.read];
  };
  [ROLES.Editor]: {
    [SUBJECTS.Auth]: [ACTIONS.read];
    [SUBJECTS.Todo]: [ACTIONS.create, ACTIONS.delete, ACTIONS.edit, ACTIONS.read];
  };
  [ROLES.Subscriber]: {
    [SUBJECTS.Auth]: [ACTIONS.read];
    [SUBJECTS.Todo]: [ACTIONS.read];
  };
  [ROLES.Guest]: {
    [SUBJECTS.Auth]: [ACTIONS.read];
    [SUBJECTS.Todo]: [];
  };
}

type AbilityConfigKeys = keyof AbilityConfig;
type AbilityConfigValues = AbilityConfig[keyof AbilityConfig];
type AbilityConfigSubjects = keyof AbilityConfigValues;
type AbilityConfigActions = AbilityConfigValues[keyof AbilityConfigValues];

type AbilityWithRole<R extends AbilityConfigKeys> = {
  [S in AbilityConfigSubjects]: AbilityConfig[R][S];
};

const ability: AbilityWithRole<ROLES.Admin> = {
  Auth: [ACTIONS.create, ACTIONS.delete, ACTIONS.edit, ACTIONS.read],
  Todo: [ACTIONS.create, ACTIONS.delete, ACTIONS.edit, ACTIONS.read],
};

console.log(ability);
