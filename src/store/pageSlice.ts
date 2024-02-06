import { createSlice } from "@reduxjs/toolkit";

const startSlice = createSlice({
    name: "page",
    initialState: {
        page: "Ячейка"
    },
    reducers: {
        setPageReducer(state, action) {
            state.page = action.payload
        }
    }
})

export const { setPageReducer } = startSlice.actions
export default startSlice.reducer