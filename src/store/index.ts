import { configureStore } from "@reduxjs/toolkit";
import startSlice from "./startSlice";
import ressourceSlice from "./ressourceSlice";
import aboutCellSlice from "./aboutCellSlice";
import pageSlice from "./pageSlice";
import taxSlice from "./taxSlice";

export default configureStore({
    reducer: {
        start: startSlice,
        ressource: ressourceSlice,
        aboutCell: aboutCellSlice,
        page: pageSlice,
        tax: taxSlice
    }
})