import { configureStore } from "@reduxjs/toolkit";
import containerSizeSlice from "./slice/containerSizeSlice";
import sideMenuSlice from "./slice/sideMenuSlice";

const store = configureStore({
    reducer: {
        containerSize: containerSizeSlice,
        sideMenuContainer: sideMenuSlice,
    },
});

export default store;