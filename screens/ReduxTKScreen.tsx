import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import tw from 'tailwind-rn';
import { selectTodo, set_todos } from '../features/todoSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;
export const ReduxTK: FC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  const todos = useAppSelector(selectTodo);
  console.log('🚀 ~ file: ReduxTKScreen.tsx:12 ~ todos:', todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(
      '🚀 ~ file: FlexboxScreen.tsx:6 ~ RTK ~ mouted flexbox:',
      todos,
    );
    return () => {
      console.log('🚀 ~ file: FlexboxScreen.tsx:6 ~ RKT ~ unmouted flexbox:');
    };
  }, []);
  const handleButton = () => {
    // ボタンが押されたときの処理
    console.log(text);
  };
  const addTodo = () => {
    dispatch(set_todos({ id: 1, todo: '筋トレ' }));
  };
  return (
    <View style={tw('flex-1 bg-gray-50 items-center justify-center')}>
      <Text>ReduxTKScreen</Text>
      {todos &&
        todos.map((td) => {
          return (
            <View style={tw('bg-blue-50 items-center justify-center')}>
              <Text>
                {td.id} : {td.todo}
              </Text>
            </View>
          );
        })}
      <Button title="Add TODO" onPress={addTodo} />
      <Button
        title="Go to Hello"
        onPress={() => navigation.navigate('Hello')}
      />
      <TextInput
        placeholder="ここに入力してください"
        value={text}
        onChangeText={setText}
      />
      <Button title="ボタン" onPress={handleButton} />
    </View>
  );
};
