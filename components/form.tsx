import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Todo from "../features/todoSlice";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const form = () => {
  const [todo, setTodo] = useState<string>("");

  const dispatch = useDispatch<Dispatch<PayloadAction<string>>>();

  const checkTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const addTodo = (todo: string) => {   //storeにdispatch
    dispatch(Todo.actions.add(todo));
  };
  const pushAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <TextField onChange={checkTodo} value={todo} type="text" />
      <Button
        variant="contained"
        style={{ margin: "10px" }}
        onClick={pushAddTodo}
      >
        追加
      </Button>
    </div>
  );
};

export default form;
