import { format } from 'date-fns';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { db } from '../plugins/firebase';
import { resetEditedTask, selectTag } from '../slices/todoSlice';
import { selectUser } from '../slices/userSlice';
import { Task } from '../types/types';

export const useGetTasks = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const tag = useAppSelector(selectTag);
  const [tasks, setTasks] = useState<Task[]>();
  const [getErr, setGetErr] = useState('');

  useEffect(() => {
    const q = query(
      collection(db, 'users', user.uid, 'tags', tag.id, 'tasks'),
      orderBy('createdAt', 'desc'),
    );
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        setTasks(
          snapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                title: doc.data().title,
                completed: doc.data().completed,
                createdAt: format(
                  doc.data({ serverTimestamps: 'estimate' }).createdAt.toDate(),
                  'yyyy-MM-dd HH:mm',
                ),
              } as Task),
          ),
        );
      },
      (err: any) => {
        setGetErr(err.message);
      },
    );
    return () => {
      unsub();
      dispatch(resetEditedTask());
    };
  }, []);
  return {
    tasks,
    getErr,
  };
};
