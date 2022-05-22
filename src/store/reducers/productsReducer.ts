import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../types/types";

const productsState: IProductState = {
    products: [],
    currentId: 0,
    currentCategory: 'all'
}

const productsReducer = createSlice({
    name: 'productsReducer',
    initialState: productsState,
    reducers: {
        addProducts (state, action) {
            state.products = action.payload;
        },
        changeId (state, action) {
            state.currentId = action.payload
        },
        changeCategory (state, action) {
            state.currentCategory = action.payload
        }
    }
})

export const { addProducts, changeId, changeCategory } = productsReducer.actions;

export default productsReducer.reducer;