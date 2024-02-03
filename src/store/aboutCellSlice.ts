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
                backgroundImage: {
                    name: "Изображение",
                    value: ""
                },
                maintenanceCosts: {
                    name: "Госрасходы",
                    value: 0
                }
            },
            infrastructure: {
                name: {
                    name: "Тип",
                    value: "Пусто"
                },
                backgroundImage: {
                    name: "Изображение",
                    value: ""
                },
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