import { createSlice } from "@reduxjs/toolkit";

const aboutCellSlice = createSlice({
    name: "aboutCell",
    initialState: {
        data: {
            texture: {
                name: "кусты",
                destroyCost: 3,
                backgroundImage: "",
                maintenanceCosts: 0
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