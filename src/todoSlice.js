// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [
        { text: 'Learn React', completed: true },
        { text: 'Learn Redux', completed: false },
        { text: 'Build a React App', completed: false },
        { text: 'Build a Redux App', completed: false}
  ];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const newState = state.filter((todo, index) => index !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    },
    toggleTodo: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed;
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice;