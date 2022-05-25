import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalReducer";
import productsReducer from "./reducers/productsReducer";



const reducers = combineReducers({
    productsReducer: productsReducer,
    modalReducer: modalReducer
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof reducers>;