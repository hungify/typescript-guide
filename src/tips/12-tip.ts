export type ActionModule = typeof import('~/constants/todo');

export type Action = ActionModule[keyof ActionModule];
//          ^?

// this code above is same as:
export type Action2 = 'ADD_TODO' | 'EDIT_TODO' | 'REMOVE_TODO';

enum todoAction {
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

export type Action3 = keyof typeof todoAction;
