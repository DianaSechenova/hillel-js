import {createSlice} from "@reduxjs/toolkit";

const hotels = createSlice({
    name: 'hotels',
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export default hotels;
