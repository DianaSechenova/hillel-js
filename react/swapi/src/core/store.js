import { configureStore } from '@reduxjs/toolkit';
import swapiSlice from './slise/slice.js';

export const store = configureStore({
  reducer: {
    swapi: swapiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return [
        ...getDefaultMiddleware()
    ]
  }
});
