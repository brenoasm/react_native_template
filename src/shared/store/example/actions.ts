import {ExampleActionTypes, Types} from './types';

export const changeText = (text: string): ExampleActionTypes => ({
  type: Types.ONE,
  payload: text,
});

export const increment = (value: number): ExampleActionTypes => ({
  type: Types.TWO,
  payload: value,
});
