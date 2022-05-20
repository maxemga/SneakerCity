import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../types/types";

const productsState: IProductState = {
    products: [],
    currentId: 0
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
        }
    }
})

export const { addProducts, changeId } = productsReducer.actions;

export default productsReducer.reducer;