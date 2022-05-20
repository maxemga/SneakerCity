import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../types/types";


const modalState: IModalState = {
    isOpen: false
}

const modalReducer = createSlice({
    name: 'modalReducer',
    initialState: modalState,
    reducers: {
        showModal (state) {
            state.isOpen = true
        },
        hideModal (state) {
            state.isOpen = false
        }
    }
})

export const { showModal, hideModal } = modalReducer.actions;

export default modalReducer.reducer;