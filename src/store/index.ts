import { configureStore } from "@reduxjs/toolkit";
import startSlice from "./startSlice";
import ressourceSlice from "./ressourceSlice";
import aboutCellSlice from "./aboutCellSlice";

export default configureStore({
    reducer: {
        start: startSlice,
        ressource: ressourceSlice,
        aboutCell: aboutCellSlice
    }
})