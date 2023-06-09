import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { db } from '../plugins/firebase';
import { resetEditedTask, selectTag } from '../slices/todoSlice';
import { selectUser } from '../slices/userSlice';

export const useToggleDeleteTask = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const tag = useAppSelector(selectTag);
  const [toggleErr, setToggleErr] = useState('');
  const [deleteErr, setDeleteErr] = useState('');

  const toggleCompleted = useCallback(
    async (idx: string, bool: boolean) => {
      setToggleErr('');
      try {
        await setDoc(
          doc(db, 'users', user.uid, 'tags', tag.id, 'tasks', idx),
          {
            completed: !bool,
          },
          { merge: true },
        );
        dispatch(resetEditedTask());
      } catch (err: any) {
        dispatch(resetEditedTask());
        setToggleErr(err.message);
      }
    },
    [user],
  );
  const deleteTask = useCallback(
    async (idx: string) => {
      setDeleteErr('');
      try {
        await deleteDoc(
          doc(db, 'users', user.uid, 'tags', tag.id, 'tasks', idx),
        );
        dispatch(resetEditedTask());
      } catch (err: any) {
        dispatch(resetEditedTask());
        setDeleteErr(err.message);
      }
    },
    [user],
  );
  return {
    tag,
    toggleErr,
    deleteErr,
    deleteTask,
    toggleCompleted,
  };
};
