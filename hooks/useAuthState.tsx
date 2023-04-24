import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { auth } from '../plugins/firebase';
import { login, logout, selectUser } from '../slices/userSlice';

export const useAuthState = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setIsLoading(true);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email!,
          }),
        );
      } else {
        dispatch(logout());
      }
      setIsLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);
  return {
    user,
    isLoading,
  };
};
