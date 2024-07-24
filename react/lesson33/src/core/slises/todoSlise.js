import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setItems, addItem, resetAll,setLoading, initializeFromLocalStorage } = todoSlice.actions;
export default todoSlice.reducer;
