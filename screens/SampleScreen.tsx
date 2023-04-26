import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../types/types';

// const Tab = createBottomTabNavigator();
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Sample'>;
};

export const SampleScreen: React.FC<Props> = ({ navigation }) => {
  const openModal = () => {
    navigation.navigate('Modal');
  };
  return (
    // <NavigationContainer independent={true}>
    //   <Tab.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         tabBarBadge: 1,
    //         tabBarIcon: ({ color, size }) => (
    //           <Ionicons name="home" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Second"
    //       component={SecondScreen}
    //       options={{
    //         tabBarBadge: 1,
    //         tabBarIcon: ({ color, size }) => (
    //           <Ionicons name="settings" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>Sample Screen</Text>
      <Button title="modal test open" onPress={openModal} />
    </View>
  );
};
