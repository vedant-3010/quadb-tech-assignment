// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Container, Typography } from "@mui/material";


const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
          Todo App
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
