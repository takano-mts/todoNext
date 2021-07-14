import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import todoSlice, { Todo } from "../features/todoSlice";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Form from "../components/form";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const TodoList = () => {
  const todos = useSelector<Todo, Todo["todos"]>((state) => state.todos);
  const dispatch = useDispatch<Dispatch<PayloadAction<number>>>();
  const deleteTodo = (todoid: number) => {
    dispatch(todoSlice.actions.delete(todoid));
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">TODOあぷり</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Form />
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.name}
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    onClick={() => deleteTodo(todo.id)}
                    startIcon={<DeleteIcon />}
                  >
                    削除
                  </Button>
                </li>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoList;
