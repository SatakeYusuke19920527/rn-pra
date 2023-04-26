import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useAuthState } from '../hooks/useAuthState';
import { ModalScreen } from '../screens/ModalScreen';
import { SampleScreen } from '../screens/SampleScreen';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const SampleNavigator: FC = () => {
  const { user, isLoading } = useAuthState();
  return (
    <Stack.Navigator initialRouteName="Sample">
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Sample" component={SampleScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
