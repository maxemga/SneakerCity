
import styled from 'styled-components'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IProduct } from '../../types/types';
import BasketContainer from './BasketContainer';

const BasketContainers: React.FC = () => {
    const productsBasket = useTypedSelector(state=> state.productsReducer.productsBasket);

    return(
        <BasketProductsContainers>
            {productsBasket.length == 0 ? <p>The basket is empty</p> : productsBasket.map((element: IProduct[]) => {
                return <BasketContainer {...element}/>
            })}
           
        </BasketProductsContainers>
    )
}

const BasketProductsContainers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    p {
        color: rgba(0, 0, 0, 0.65);

        font-size: 30px;
        margin-top: 50px;
    }
`

export default BasketContainers;