import { createSlice } from "@reduxjs/toolkit";
import { territory } from "../data/GameData/InitialGameData";

const startSlice = createSlice({
    name: "start",
    initialState: {
        start: territory
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