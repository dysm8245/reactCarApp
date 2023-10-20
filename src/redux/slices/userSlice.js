import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        first: "first name",
        last: "last name",
        email: "email",
        username: "username",
        password: "password",
        token: null
    },
    reducers:{
        chooseFirst: (state, action) => {state.first = action.payload},
        chooseLast: (state, action) => {state.last = action.payload},
        chooseEmail: (state, action) => {state.email = action.payload},
        chooseUsername: (state, action) => {state.username = action.payload},
        choosePassword: (state, action) => {state.password = action.payload},
        chooseToken: (state, action) => {state.token = action.payload}
    }
})

export const user = userSlice.reducer
export const {chooseFirst, chooseLast, chooseEmail, chooseUsername, choosePassword, chooseToken} = userSlice.actions