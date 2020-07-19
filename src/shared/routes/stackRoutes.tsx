import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ExampleScreen from '../../core/screens/ExampleScreen';
import AnotherExampleScreen from '../../core/screens/AnotherExampleScreen';
import CustomHeader from '../components/CustomHeader';

export type StackRoutesType = {
  ExampleScreen: undefined;
  AnotherExampleScreen: undefined;
};

const Stack = createStackNavigator<StackRoutesType>();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExampleScreen"
      headerMode="screen"
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
      }}>
      <Stack.Screen name="ExampleScreen" component={ExampleScreen} />
      <Stack.Screen
        name="AnotherExampleScreen"
        component={AnotherExampleScreen}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
