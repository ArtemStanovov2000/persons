import { createSlice } from "@reduxjs/toolkit";
import population from "../data/GameData/population";
import { countWorkerPeoples } from "../data/GameData/population";
import { countChildrens, countPensioners } from "../data/GameData/population";

const ressourceSlice = createSlice({
    name: "ressource",
    initialState: {
        people: {
            population: {
                name: "Всего людей",
                value: population.length
            },
            workerPeoples: {
                name: "Трудоспособных",
                value: countWorkerPeoples()
            },
            pensioners: {
                name: "Пенсионеров",
                value: countPensioners()
            },
            childrens: {
                name: "Детей",
                value: countChildrens()
            },
        },
        fossils: {
            extractedOil: {
                name: "Добытой нефти",
                value: 30
            },
            exploredOil: {
                name: "Разведанной нефти",
                value: 42716
            }
        },
        money: {
            govermentBudget: {
                name: "Бюджет",
                value: 4000
            },
            savingsBudget: {
                name: "Резервы",
                value: 400
            }
        }
    },
    reducers: {
        updateStatusResources(state, action) {
        }
    }
})

export const { updateStatusResources } = ressourceSlice.actions
export default ressourceSlice.reducer