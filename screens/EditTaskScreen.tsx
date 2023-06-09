import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { VFC } from 'react';
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
import { useEditTask } from '../hooks/useEditTask';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditTask'>;
};

export const EditTaskScreen: VFC<Props> = ({ navigation }) => {
  const { updateErr, editedTask, updateTask, onChangeTask, resetInput } =
    useEditTask({
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
      <Title first="Edit" last="Task" />
      <View style={tw('mb-5 mx-1 items-center')}>
        <TextInput
          style={tw('w-5/6')}
          autoCapitalize="none"
          autoFocus
          multiline
          placeholder="Edit task ?"
          value={editedTask.title}
          onChangeText={(txt: string) => onChangeTask(txt)}
        />
      </View>
      <IconButton name="edit" size={20} color="gray" onPress={updateTask} />
      {updateErr !== '' && (
        <Text style={tw('text-red-500 my-3 font-semibold')}>{updateErr}</Text>
      )}
    </SafeAreaView>
  );
};
