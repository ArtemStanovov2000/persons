import { createSlice } from "@reduxjs/toolkit";

const aboutCellSlice = createSlice({
    name: "aboutCell",
    initialState: {
        data: {
            texture: {
                name: {
                    label: "Тип",
                    value: "Лес"
                },
                destroyCost: {
                    label: "Строимость разрушения",
                    value: 3
                },
                maintenanceCosts: {
                    label: "Госрасходы",
                    value: 0
                }
            },
            infrastructure: {
                name: {
                    label: "Тип",
                    value: "Пусто",
                }
            }
        }
    },
    reducers: {
        setStateInformation(state, action) {
            state.data = action.payload
        }
    }
})

export const { setStateInformation } = aboutCellSlice.actions
export default aboutCellSlice.reducer