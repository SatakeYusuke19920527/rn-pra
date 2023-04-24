import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
