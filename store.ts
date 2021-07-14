import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";

export const store = configureStore({
  reducer: todoSlice.reducer,
});
