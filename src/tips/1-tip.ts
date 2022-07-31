// #1: Dynamic function arguments with GENERICS
export type Event =
  | {
      type: 'LOG_IN';
      payload: {
        userId: string;
      };
    }
  | {
      type: 'SIGN_OUT';
    };
const sendEvent = <Type extends Event['type']>(
  ...args: Extract<
    Event,
    {
      type: Type;
    }
  > extends { payload: infer TPayload }
    ? [Type, TPayload]
    : [Type]
) => {
  console.log(args);
};

/**
 * Correct
 */

sendEvent('SIGN_OUT');
sendEvent('LOG_IN', { userId: '123' });
/*
 * Should error
 */

sendEvent('SIGN_OUT', {});
sendEvent('LOG_IN', {
  userId: 123,
});
sendEvent('LOG_IN', {});
sendEvent('LOG_IN');

// https://www.youtube.com/watch?v=YE_3WwX-Dl8
