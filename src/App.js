// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme} >
        <Container maxWidth="sm"  >
          <Typography variant="h3" component="h1" gutterBottom className={classes.root}>
            Todo App
          </Typography>
          <TaskInput />
          <TaskList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
