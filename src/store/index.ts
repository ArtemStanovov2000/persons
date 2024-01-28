import { configureStore } from "@reduxjs/toolkit";
import startSlice from "./startSlice";
import ressourceSlice from "./ressourceSlice";

export default configureStore({
    reducer: {
        start: startSlice,
        ressource: ressourceSlice
    }
})