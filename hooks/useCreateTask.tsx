import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { db } from '../plugins/firebase';
import {
  resetEditedTask,
  selectEditedTask,
  selectTag,
  setEditedTask,
} from '../slices/todoSlice';
import { selectUser } from '../slices/userSlice';
import { RootStackParamList } from '../types/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;
};

export const useCreateTask = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const tag = useAppSelector(selectTag);
  const editedTask = useAppSelector(selectEditedTask);
  const [createErr, setCreateErr] = useState('');
  const resetInput = () => {
    dispatch(resetEditedTask());
  };
  const onChangeTask = (txt: string) =>
    dispatch(setEditedTask({ ...editedTask, title: txt }));

  const createTask = async () => {
    setCreateErr('');
    if (editedTask?.title !== '') {
      try {
        await addDoc(
          collection(db, 'users', user.uid, 'tags', tag.id, 'tasks'),
          {
            title: editedTask.title,
            completed: false,
            createdAt: serverTimestamp(),
          },
        );
        dispatch(resetEditedTask());
        navigation.goBack();
      } catch (err: any) {
        dispatch(resetEditedTask());
        setCreateErr(err.message);
      }
    }
  };
  return {
    onChangeTask,
    editedTask,
    createErr,
    createTask,
    resetInput,
  };
};
