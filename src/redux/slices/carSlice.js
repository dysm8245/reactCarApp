import { createSlice } from '@reduxjs/toolkit'

const carSlice = createSlice({
    name: "car",
    initialState:{
        make: "Make",
        model: "Model",
        year: "Year",
        id: null
    },
    reducers:{
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseId: (state, action) => {state.id = action.payload}
    }
})

export const car = carSlice.reducer
export const {chooseMake, chooseModel, chooseYear, chooseId} = carSlice.actions