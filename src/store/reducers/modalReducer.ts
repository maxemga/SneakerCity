import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../types/types";


const modalState: IModalState = {
    isOpenProduct: false,
    isOpenMenu: false
}

const modalReducer = createSlice({
    name: 'modalReducer',
    initialState: modalState,
    reducers: {
        showModalProduct (state) {
            state.isOpenProduct = true
        },
        hideModalProduct (state) {
            state.isOpenProduct = false
        },
        showModalMenu (state) {
            state.isOpenMenu = true
        },
        hideModalMenu (state) {
            state.isOpenMenu = false
        },
    }
})

export const { showModalProduct , hideModalProduct , showModalMenu, hideModalMenu } = modalReducer.actions;

export default modalReducer.reducer;