import { createSlice } from "@reduxjs/toolkit";
import { territory } from "../data/GameData/InitialGameData";
import CellType from "../data/GameData/InitialGameData";

interface InitialState {
    start: CellType[][]
}

const startSlice = createSlice({
    name: "start",
    initialState: {
        start: territory
    } as InitialState,
    reducers: {
        addData(state, action) {
            console.log(state)
            console.log(action)
        }
    }
})

export const { addData } = startSlice.actions
export default startSlice.reducer