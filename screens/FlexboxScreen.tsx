import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-rn';
import { selectTodo } from '../features/todoSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBox: FC<Props> = ({ navigation }) => {
  const todos = useAppSelector(selectTodo);
  console.log('🚀 ~ file: FlexboxScreen.tsx:12 ~ todos:', todos);
  const dispatch = useAppDispatch();
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
    <ScrollView>
      <View style={tw('flex-1 flex-col bg-gray-50')}>
        <View style={tw('w-full flex flex-row flex-wrap')}>
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
          <TouchableOpacity
            onPress={handlePress}
            style={tw('w-5/12 h-32 bg-red-900 mt-4 ml-4 mr-2')}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={tw('w-5/12 h-32 bg-red-900 mt-4 ml-4 mr-2')}
          ></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
