import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './slise/swapiSlice'; 
import formReducer from './slise/formSlice'; 

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    form: formReducer,
  }
});
