import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../../../src/store/reducers/productsReducer";

export const Plus=(props: any)=>{
    const dispatch = useDispatch();
    const sel = useSelector((state: any) => state.productsReducer.productsBasket);

    return(<svg onClick={() => {
        
        dispatch(addCount(props.id))
        console.log(props.id)
    }} key={Date.now()}  cursor={'pointer'} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3.75V14.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.75 9H14.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
    

)
}
