import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProducts } from "../store/reducers/productsReducer";
import { IProduct } from "../types/types"


export const useHttp = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<IProduct[]>([])

    const request = (url: string) => {
        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(() => console.log('Что-то пошло не так'))
    }

    return { request, products };
}