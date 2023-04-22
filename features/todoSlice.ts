import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type InitialStateType = {
  todos: [];
};

const initialState: InitialStateType = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    set_todos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { set_todos } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
