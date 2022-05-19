import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../types/types";

const productsState: IProductState = {
    products: []
}

const productsReducer = createSlice({
    name: 'productsReducer',
    initialState: productsState,
    reducers: {
        addProducts (state, action) {
            state.products.push(action.payload);
        }
    }
})

export const { addProducts } = productsReducer.actions;

export default productsReducer.reducer;