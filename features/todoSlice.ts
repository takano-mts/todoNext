import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface List {
  id: number;
  name: string;
}
let todoId = 0;

export interface Todo {
  todos: List[];
}
const initialState: Todo = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: ++todoId,
            name: action.payload,
          },
        ],
      };
    },
    delete: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id != action.payload),
      };
    },
  },
});

export default todoSlice;
