import styled from 'styled-components'
import BasketContainer from './BasketContainer';

const BasketContainers: React.FC = () => {
    return(
        <BasketProductsContainers>
            <BasketContainer/>
            <BasketContainer/>
            <BasketContainer/>
        </BasketProductsContainers>
    )
}

const BasketProductsContainers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export default BasketContainers;