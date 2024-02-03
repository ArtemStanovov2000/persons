import { createSlice } from "@reduxjs/toolkit";

const startSlice = createSlice({
    name: "page",
    initialState: {
        page: "button1"
    },
    reducers: {
        setPageReducer(state, action) {
            state.page = action.payload
        }
    }
})

export const { setPageReducer } = startSlice.actions
export default startSlice.reducer