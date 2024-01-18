import { configureStore } from "@reduxjs/toolkit";
import startSlice from "./startSlice";

export default configureStore({
    reducer: {
        start: startSlice
    }
})