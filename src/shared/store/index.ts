import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';

import {rootReducer} from './rootReducer';

const createPersistence = (key: string) => ({
  key: key,
  storage: AsyncStorage,
});

const enhancers = compose(applyMiddleware(logger));

const persisted = persistReducer(
  createPersistence('persistedStore'),
  rootReducer,
);

const store = createStore(persisted, {}, enhancers);

const persistor = persistStore(store);

export {store, persistor};
