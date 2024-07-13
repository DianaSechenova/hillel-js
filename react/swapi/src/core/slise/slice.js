import { createSlice } from '@reduxjs/toolkit';

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    data: undefined,
    action: 'people/1',
    loader: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setAction: (state, action) => {
      state.action = action.payload;
    },
    clearResults: (state) => {
      state.data = undefined;
    },
    clearAction: (state) => {
      state.action = 'people/1';
    },
  },
});

export default swapiSlice;
