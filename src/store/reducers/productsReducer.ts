import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../types/types";

const productsState: IProductState = {
    products: [],
    productsBasket: [],
    currentPosition: 0,
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
            state.currentPosition = action.payload
        },
        changeCategory (state, action) {
            state.currentCategory = action.payload
        },
        addProductsBasket (state, action) {
            
            
            state.productsBasket.push(({...Object.assign(state.products[action.payload.position], {count: action.payload.count})}))
            
           

            
            
            // console.log(state.productsBasket)
        },
        removeBasket (state) {
            state.productsBasket = []
        },
        addCount (state, action) {
            state.productsBasket[action.payload].count += 1;
        },
        removeCount (state, action) {
            state.productsBasket[action.payload].count -= 1;
        }
        
    }
})

export const { addProducts, changeId, changeCategory, addProductsBasket, removeBasket, addCount, removeCount } = productsReducer.actions;

export default productsReducer.reducer;