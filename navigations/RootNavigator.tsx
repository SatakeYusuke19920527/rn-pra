import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FlexBox } from '../screens/FlexboxScreen';
import Hello from '../screens/HelloScreen';
import { ReduxTK } from '../screens/ReduxTKScreen';

const Stack = createStackNavigator();
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReduxTK">
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="FlexBox" component={FlexBox} />
        <Stack.Screen name="ReduxTK" component={ReduxTK} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
