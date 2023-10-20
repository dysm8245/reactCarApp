import { configureStore } from "@reduxjs/toolkit";
import { user } from "./slices/userSlice";
import { car } from "./slices/carSlice";
import { combineReducers } from 'redux'

const reducer = combineReducers({
    user,
    car
})

const store = configureStore({
    reducer,
    devTools: true,
});

export default store;