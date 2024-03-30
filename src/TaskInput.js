// TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    gap: theme.spacing(1),
  },
  input: {
    marginRight: theme.spacing(1),
  },

  button: {
    maxHeight: "50px",
  },
}));

const TaskInput = () => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo({ text: task.trim(), completed: false }));
      setTask("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={classes.inputContainer}
      paddingBottom={4}
    >
      <TextField
        className={classes.input}
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        fullWidth
      />
      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
