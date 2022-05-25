import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { hideModalMenu, hideModalProduct, hideModals, showModalMenu, showModalProduct } from "../store/reducers/modalReducer";
import { addCount, addProducts, addProductsBasket, changeCategory, changeCurrentPrice, changeId, removeBasket, removeBaskets, removeCount } from "../store/reducers/productsReducer";


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({addProducts, changeId, changeCategory, addProductsBasket, removeBaskets, addCount, removeCount, removeBasket, changeCurrentPrice, showModalProduct , hideModalProduct, showModalMenu, hideModalMenu, hideModals}, dispatch);
}
