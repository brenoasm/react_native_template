import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {StackRoutesType} from 'src/shared/routes/stackRoutes';

type Props = StackScreenProps<StackRoutesType, 'ExampleScreen'>;

const ExampleScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Example screen!</Text>
      <Button
        title="Go to the other screen"
        onPress={() => navigation.push('AnotherExampleScreen')}
      />
    </View>
  );
};

export default ExampleScreen;
