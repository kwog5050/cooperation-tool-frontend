import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: "sideMenuSlice",
    initialState: { isSide: false, size: 0 },
    reducers: {
        toggle: (state) => {
            state.isSide = !state.isSide;
        },
        on: (state) => {
            state.isSide = true;
        },
        off: (state) => {
            state.isSide = false;
        },
        width: (state, action) => {
            state.size = action.payload;
        },
    },
});

export default sideMenuSlice.reducer;
export const { toggle, on, off, width } = sideMenuSlice.actions; 