import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Alert, View } from 'react-native';
import tw from 'tailwind-rn';
import { IconButton } from '../components/IconButton';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { auth } from '../plugins/firebase';
import { CreateTagScreen } from '../screens/CreateTagScreen';
import { TagListScreen } from '../screens/TagListScreen';
import { logout, selectUser } from '../slices/userSlice';
import { RootStackParamList } from '../types/types';
import { SampleNavigator } from './SampleNavigator';
import { TaskStackNavigator } from './TaskStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch {
      Alert.alert('Logout error');
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b',
          },
          headerTitle: user.email,
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          headerRight: () => (
            <View style={tw('mr-3')}>
              <IconButton
                name="logout"
                size={20}
                color="white"
                onPress={signOut}
              />
            </View>
          ),
        }}
      >
        <Stack.Screen name="TagList" component={TagListScreen} />
        <Stack.Screen name="TaskStack" component={TaskStackNavigator} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="CreateTag" component={CreateTagScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b',
          },
          headerTitle: user.email,
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          headerRight: () => (
            <View style={tw('mr-3')}>
              <IconButton
                name="logout"
                size={20}
                color="white"
                onPress={signOut}
              />
            </View>
          ),
        }}
      >
        <Stack.Screen name="SampleNav" component={SampleNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
