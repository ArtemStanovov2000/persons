import { createSlice } from "@reduxjs/toolkit";
import { space } from "../data/initialGameData/InitialGameData";

const startSlice = createSlice({
    name: "start",
    initialState: {
        start: space
    },
    reducers: {
        addData(state, action) {
            console.log(state)
            console.log(action)
        }
    }
})

export const { addData, addDataResult } = startSlice.actions
export default startSlice.reducer