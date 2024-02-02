import { createSlice } from "@reduxjs/toolkit";
import population from "../data/GameData/population";
import { countWorkerPeoples } from "../data/GameData/population";

const ressourceSlice = createSlice({
    name: "ressource",
    initialState: {
        time: 0,
        oil: 30,
        people: population.length,
        workerPeople: countWorkerPeoples(),
        govermentBudget: 3500,
        savingsBudget: 40
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