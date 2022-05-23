import { useDispatch } from "react-redux"
import { removeCount } from "../../../src/store/reducers/productsReducer";

export const Minus=(props: any)=>{
    const dispatch = useDispatch();

    return(<svg onClick={() => {
        dispatch(removeCount(1))
    }} cursor={'pointer'} width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 1H12.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)
}
