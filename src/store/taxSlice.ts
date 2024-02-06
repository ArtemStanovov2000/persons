import { createSlice } from "@reduxjs/toolkit";

const taxSlice = createSlice({
    name: "tax",
    initialState: {
        tax: {
            VAT: 0.2,
            income: 0.13,
            employer: 0.15
        }
    },
    reducers: {
        setVAT(state, action) {
            state.tax.VAT += action.payload
            state.tax.VAT = Number(state.tax.VAT.toFixed(3))
        },
        setIncome(state, action) {
            state.tax.income += action.payload
            state.tax.income = Number(state.tax.income.toFixed(3))
        },
        setEmployer(state, action) {
            state.tax.employer += action.payload
            state.tax.employer = Number(state.tax.employer.toFixed(3))
        }
    }
})

export const { setVAT, setIncome, setEmployer } = taxSlice.actions
export default taxSlice.reducer