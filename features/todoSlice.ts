import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type TodoType = {
  id: number;
  todo: string;
};

type InitialStateType = {
  todos: TodoType[];
};

const initialState: InitialStateType = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    set_todos: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { set_todos } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
