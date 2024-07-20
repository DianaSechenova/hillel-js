import todoReducer from "./slises/todoSlise";
import {rootSaga} from "./saga/rootSaga.js";
import {sagaMiddleware} from "./middlewares.js";
import {configureStore} from "@reduxjs/toolkit";
import swapiSlice from "./slises/swapiSlice.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    swapi: swapiSlice.reducer
  },
  middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
});
sagaMiddleware.run(rootSaga)