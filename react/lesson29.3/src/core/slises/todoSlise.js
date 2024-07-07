import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: true,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setItems, addItem } = todoSlice.actions;
export default todoSlice.reducer;
