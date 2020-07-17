import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from './store/index';

import StackRoutes from './routes/stackRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
