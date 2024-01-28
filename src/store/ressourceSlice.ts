import { createSlice } from "@reduxjs/toolkit";

const ressourceSlice = createSlice({
    name: "ressource",
    initialState: {
        time: 0,
        oil: 30,
        people: 1000,
        workerPeople: 570,
        govermentBudget: 3500
    },
    reducers: {
        updateStatusResources(state, action) {
            state.govermentBudget += action.payload
            state.govermentBudget = Number(state.govermentBudget.toFixed(4))
        }
    }
})

export const { updateStatusResources } = ressourceSlice.actions
export default ressourceSlice.reducer