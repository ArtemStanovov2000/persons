import { createSlice } from "@reduxjs/toolkit";
import { territory } from "../data/GameData/InitialGameData";

const startSlice = createSlice({
    name: "start",
    initialState: {
        start: territory
    } as object,
    reducers: {
        addData(state, action) {
            console.log(state)
            console.log(action)
        }
    }
})

export const { addData } = startSlice.actions
export default startSlice.reducer