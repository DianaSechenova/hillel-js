import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slises/todoSlise";
import {rootSaga} from "./saga/rootSaga.js";
import {sagaMiddleware} from "./middlewares.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
});
sagaMiddleware.run(rootSaga)