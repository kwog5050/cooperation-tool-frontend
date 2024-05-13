import { createSlice } from "@reduxjs/toolkit";

const containerSizeSlice = createSlice({
    name: "containerSize",
    initialState: { size: 0 },
    reducers: {
        media: (state, action) => {
            state.size = action.payload;
        },
    },
});

export default containerSizeSlice.reducer;
export const { media } = containerSizeSlice.actions; 