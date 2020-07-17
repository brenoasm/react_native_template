import {Reducer} from 'redux';
import {ExampleState, ExampleActionTypes, Types} from './types';

const initState: ExampleState = {
  num: 0,
  text: '',
};

export const exampleReducer: Reducer<ExampleState, ExampleActionTypes | any> = (
  state = initState,
  action,
): ExampleState => {
  switch (action.type) {
    case Types.ONE:
      return {
        ...state,
        text: action.payload,
      };

    case Types.TWO:
      return {
        ...state,
        num: action.payload,
      };

    default:
      return state;
  }
};
