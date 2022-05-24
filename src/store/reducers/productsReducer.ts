import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../types/types";

const productsState: IProductState = {
    products: [],
    productsMinPrice: 0,
    productsMaxPrice: 0,
    productsCurrentMinPrice: 0,
    productsCurrentMaxPrice: 0,
    productsBasket: [],
    currentId: 0,
    currentPosition: 0,
    currentCategory: 'all'
}

const productsReducer = createSlice({
    name: 'productsReducer',
    initialState: productsState,
    reducers: {
        addProducts (state, action) {
            state.products = action.payload;
            state.productsMinPrice = Number(state.products.sort((a: any, b: any) => a.price - b.price)[0].price);
            state.productsMaxPrice = Number(state.products.sort((a: any, b: any) => a.price - b.price)[state.products.length - 1].price);
    
        },
        changeId (state, action) {
            state.currentId = action.payload;
            state.currentPosition = state.products.findIndex(el => el.id == state.currentId);
        },
        changeCategory (state, action) {
            state.currentCategory = action.payload;
        },
        addProductsBasket (state, action) {     
            let element = state.productsBasket.filter(el => el.id == state.currentId)   
            let positionElement = state.productsBasket.findIndex(el => el.id == state.currentId);

            if (element.length >= 1) {
                state.productsBasket[positionElement].count += action.payload.count 
            }
            else {
                state.productsBasket.push(Object.assign(state.products[action.payload.position], {count: action.payload.count}))
            }
         
        },
        removeBasket (state, action) {
            state.productsBasket = state.productsBasket.filter(el => el.id != action.payload);
        },
        removeBaskets (state) {
            state.productsBasket = [];
        },
        addCount (state, action) {
            let el = state.productsBasket[state.productsBasket.findIndex(item => item.id == action.payload)];
            el.count += 1;
           
        },
        removeCount (state, action) {
            let el = state.productsBasket[state.productsBasket.findIndex(item => item.id == action.payload)];
            el.count == 1 ? null : el.count -= 1;
        },
        changeCurrentPrice (state, action) {
            state.productsCurrentMinPrice = action.payload.min
            state.productsCurrentMaxPrice = action.payload.max
        }

        
    }
})

export const { addProducts, changeId, changeCategory, addProductsBasket, removeBaskets, addCount, removeCount, removeBasket, changeCurrentPrice } = productsReducer.actions;

export default productsReducer.reducer;