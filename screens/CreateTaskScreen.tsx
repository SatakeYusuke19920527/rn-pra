import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-rn';
import { IconButton } from '../components/IconButton';
import { Title } from '../components/Title';
import { useCreateTask } from '../hooks/useCreateTask';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
};

export const CreateTaskScreen: FC<Props> = ({ navigation }) => {
  const { createErr, editedTask, createTask, onChangeTask, resetInput } =
    useCreateTask({
      navigation,
    });
  return (
    <SafeAreaView style={tw('flex-1 bg-gray-100')}>
      <View style={tw('flex-row px-4 justify-between w-full')}>
        <TouchableOpacity
          onPress={() => {
            resetInput(), navigation.goBack();
          }}
        >
          <AntDesign name="close" size={25} color="gray" />
        </TouchableOpacity>
        <View />
      </View>
      <Title first="New" last="Task" />
      <View style={tw('mb-5 mx-1 items-center ')}>
        <TextInput
          style={tw('w-5/6')}
          autoCapitalize="none"
          autoFocus
          multiline
          placeholder="New task ?"
          value={editedTask.title}
          onChangeText={(txt: string) => onChangeTask(txt)}
        />
      </View>
      <IconButton name="plus" size={20} color="gray" onPress={createTask} />
      {createErr !== '' && (
        <Text style={tw('text-red-500 my-3 font-semibold')}>{createErr}</Text>
      )}
    </SafeAreaView>
  );
};
