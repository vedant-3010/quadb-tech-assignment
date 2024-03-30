// TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from './todoSlice';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeTodo(index));
  };

  const handleToggle = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index} dense button onClick={() => handleToggle(index)}>
          <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
          <ListItemText
            primary={todo.text}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;