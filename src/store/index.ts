import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";



const reducers = combineReducers({
    productsReducer: productsReducer
})

export const store = configureStore({
    reducer: reducers
})