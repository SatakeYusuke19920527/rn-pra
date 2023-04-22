import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-rn';
import { RootStackParamList } from '../types/types';
type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBox: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('🚀 ~ file: FlexboxScreen.tsx:6 ~ useEffect ~ mouted flexbox:');
    return () => {
      console.log(
        '🚀 ~ file: FlexboxScreen.tsx:6 ~ useEffect ~ unmouted flexbox:',
      );
    };
  }, []);
  const handlePress = () => {
    navigation.navigate('Hello');
  };
  return (
    <View style={tw('flex-1 bg-gray-50 items-center')}>
      <View style={tw('w-full flex flex-row flex-wrap p-5')}>
        <TouchableOpacity
          onPress={handlePress}
          style={tw('w-5/12 h-32 bg-red-900 mt-4 ml-4 mr-2')}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={tw('w-5/12 h-32 bg-red-900 mt-4 ml-4 mr-2')}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={tw('w-5/12 h-32 bg-red-900 mt-4 ml-4 mr-2')}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={tw('w-5/12 h-32 bg-red-900 mt-4 ml-4 mr-2')}
        ></TouchableOpacity>
      </View>
      <Text>FlexboxScreen</Text>
      <Button
        title="Go to ReduxTK"
        onPress={() => navigation.navigate('ReduxTK')}
      />
    </View>
  );
};
