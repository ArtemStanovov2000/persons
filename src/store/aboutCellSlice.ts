import { createSlice } from "@reduxjs/toolkit";

const aboutCellSlice = createSlice({
    name: "aboutCell",
    initialState: {
        data: {
            texture: {
                name: {
                    name: "Тип",
                    value: "Лес"
                },
                destroyCost: {
                    name: "Строимость разрушения",
                    value: 3
                },
                backgroundImage: "",
                maintenanceCosts: {
                    name: "Госрасходы",
                    value: 0
                }
            },
            infrastructure: {
                name: "Пустая клетка",
                backgroundImage: "",
                humanResources: 0,
                maintenanceCosts: 0,
                oilProduction: 0,
                electricityProduction: 0,
                fuelProduction: 0,
                capacityPeople: 0
            }
        }
    },
    reducers: {
        setStateInformation(state, action) {
            state.data = {
                texture: action.payload.texture,
                infrastructure: action.payload.infrastructure
            }
            state.data = action.payload
        }
    }
})

export const { setStateInformation } = aboutCellSlice.actions
export default aboutCellSlice.reducer