import {combineReducers} from 'redux';

import {exampleReducer} from './example/reducer';

export const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
