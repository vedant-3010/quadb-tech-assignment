// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { text: "Learn React", completed: true },
    { text: "Learn Redux", completed: false },
    { text: "Build a React App", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload);
    },
    toggleTodo: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice;
