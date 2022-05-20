import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProducts } from "../store/reducers/productsReducer";
import { IProduct } from "../types/types"


export const useHttp = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const request = (url: string) => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                dispatch(addProducts(json));
                setIsLoading(false);
            })
            .catch(() => console.log('Что-то пошло не так'))
    }

    return { request, products, isLoading };
}