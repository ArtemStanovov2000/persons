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
                    isVisible: true
                }
            }
        }
    },
    reducers: {
        setStateInformation(state, action) {
            state.data = {
                texture: {
                    name: action.payload.texture.name,
                    destroyCost: action.payload.texture.destroyCost,
                    maintenanceCosts: action.payload.texture.maintenanceCosts,
                },
                infrastructure: {
                    name: action.payload.infrastructure.name
                }
            }
        }
    }
})

export const { setStateInformation } = aboutCellSlice.actions
export default aboutCellSlice.reducer