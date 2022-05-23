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
            state.currentPosition = action.payload;
        },
        changeCategory (state, action) {
            state.currentCategory = action.payload;
        },
        addProductsBasket (state, action) {

            // let st = state.productsBasket.find(el => el.id == action.payload.position);
            state.productsBasket.push(Object.assign(state.products[action.payload.position], {count: action.payload.count}));
            // state.productsBasket[st.id].count += action.payload.count;

            // console.log(state.productsBasket.find(el => el.id == action.payload.position))
            
        },
        removeBasket (state, action) {
            state.productsBasket = state.productsBasket.filter(el => el.id != action.payload);
        },
        removeBaskets (state) {
            state.productsBasket = [];
        },
        addCount (state, action) {
            state.productsBasket[action.payload].count += 1;
        },
        removeCount (state, action) {
            state.productsBasket[action.payload].count -= 1;
        }

        
    }
})

export const { addProducts, changeId, changeCategory, addProductsBasket, removeBaskets, addCount, removeCount, removeBasket } = productsReducer.actions;

export default productsReducer.reducer;