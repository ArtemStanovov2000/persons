import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    time: number
}

const ressourceSlice = createSlice({
    name: "ressource",
    initialState: {
        time: 0
    } as InitialState,
    reducers: {
        updateStatusResources(state, action) {
            console.log(state)
            console.log(action)
        }
    }
})

export const { updateStatusResources } = ressourceSlice.actions
export default ressourceSlice.reducer