import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { useAuthState } from '../hooks/useAuthState';
import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';

const Tab = createBottomTabNavigator();
export const SampleNavigator: FC = () => {
  const { user, isLoading } = useAuthState();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Second"
          component={SecondScreen}
          options={{
            tabBarBadge: 1,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
