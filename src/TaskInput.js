// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import { Box, TextField, Button } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo({ text: task.trim(), completed: false }));
      setTask('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" mt={2} mb={2}>
      <TextField
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        fullWidth
        mr={1}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;