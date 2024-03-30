// TaskList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    border: "2px solid purple",
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    display: "flex-col",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    display: "flex-col",
  },
  listItem: {
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  completed: {
    textDecoration: "line-through",
    color: theme.palette.text.disabled,
  },
  sectionHeading: {
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  del: {
    color: theme.palette.error.main,

    "&:hover": {
      color: theme.palette.error.dark,
    },
    "&:active": {
      color: theme.palette.error.light,
    },
  },
}));

const TaskList = () => {
  const classes = useStyles();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (todoToDelete) => {
    const index = todos.findIndex((todo) => todo === todoToDelete);
    dispatch(removeTodo(index));
  };

  const handleToggle = (index) => {
    dispatch(toggleTodo(index));
  };

  const currentTasks = todos.filter((todo) => !todo.completed);
  const completedTasks = todos.filter((todo) => todo.completed);

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.grid}>
        <Typography
          variant="h6"
          className={classes.sectionHeading}
          color="secondary"
        >
          Current Tasks
        </Typography>
        <List>
          {currentTasks.map((todo, index) => (
            <ListItem
              key={index}
              dense
              button
              onClick={() => handleToggle(index)}
              className={classes.listItem}
            >
              <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
              <ListItemText primary={todo.text} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(todo)}
                >
                  <DeleteIcon className={classes.del} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.grid}>
        <Typography variant="h6" className={classes.sectionHeading}>
          Completed Tasks
        </Typography>
        <List className={classes.root}>
          {completedTasks.map((todo, index) => (
            <ListItem
              key={index}
              dense
              button
              onClick={() => handleToggle(index)}
              className={classes.listItem}
            >
              <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
              <ListItemText
                primary={todo.text}
                className={todo.completed ? classes.completed : ""}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(todo)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default TaskList;
