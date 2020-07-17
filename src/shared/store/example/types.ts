export enum Types {
  ONE,
  TWO,
}

interface OneAction {
  type: typeof Types.ONE;
  payload: string;
}

interface TwoAction {
  type: typeof Types.TWO;
  payload: number;
}

export interface ExampleState {
  text: string;
  num: number;
}

export type ExampleActionTypes = OneAction | TwoAction;
