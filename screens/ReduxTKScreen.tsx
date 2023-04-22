import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import tw from 'tailwind-rn';
import { selectTodo } from '../features/todoSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;
export const ReduxTK: FC<Props> = ({ navigation }) => {
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('🚀 ~ file: FlexboxScreen.tsx:6 ~ RTK ~ mouted flexbox:');
    return () => {
      console.log('🚀 ~ file: FlexboxScreen.tsx:6 ~ RKT ~ unmouted flexbox:');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-50 items-center justify-center')}>
      <Text>ReduxTKScreen</Text>
      <Button
        title="Go to Hello"
        onPress={() => navigation.navigate('Hello')}
      />
    </View>
  );
};
