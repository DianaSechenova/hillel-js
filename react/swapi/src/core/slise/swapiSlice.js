import { createSlice } from '@reduxjs/toolkit';

export const getSwapiData = (url) => async (dispatch) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${url}`);
    const data = await response.json();
    dispatch(getSwapiDataSuccess(data));
  } catch (error) {
    dispatch(getSwapiDataError(error.toString()));
  }
};

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    value: '',
    data: null,
    error: null,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    clearData: (state) => {
      state.data = null;
      state.value = '';
    },
    getSwapiDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    getSwapiDataError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setValue,
  clearData,
  getSwapiDataSuccess,
  getSwapiDataError,
} = swapiSlice.actions;
export default swapiSlice.reducer;
