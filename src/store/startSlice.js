import { createSlice } from "@reduxjs/toolkit";
import { countCellInString, countStringInSpace } from "../data/data";

const space = []
for (let i = 0; i < countStringInSpace; i++) {
    const string = []
    for (let j = 0; j < countCellInString; j++) {
        string.push(j)
    }
    space.push(string)
}

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