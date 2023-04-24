import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { AuthScreen } from '../screens/AuthScreen';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AuthStackNavigator: FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Auth" component={AuthScreen} />
  </Stack.Navigator>
);
