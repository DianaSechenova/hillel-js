import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slises/todoSlise";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
