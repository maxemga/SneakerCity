
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IHomeContainers, IProduct } from '../../types/types';
import HomePageContainer from './HomePageContainer'


const HomeContainers: React.FC<IHomeContainers>= (props) => {
    const currentCategory = useTypedSelector(state => state.productsReducer.currentCategory);
    const minCurrentPrice = useTypedSelector(state => state.productsReducer.productsCurrentMinPrice);
    const maxCurrentPrice = useTypedSelector(state => state.productsReducer.productsCurrentMaxPrice);




    return(
        <>
        <HomeProductsTitle>The new arrivals</HomeProductsTitle>
        <HomeProductsContainers>
    
            {currentCategory == 'all' ? props.products && props.products.filter((element: IProduct) => element.price >= minCurrentPrice && element.price <= maxCurrentPrice).map((element: IProduct) => {
                return <HomePageContainer key={element.id} {...element}/>
            }):
            props.products && props.products.filter((element: IProduct) => element.category == currentCategory && element.price >= minCurrentPrice && element.price <= maxCurrentPrice).map((element: IProduct) => {
                return <HomePageContainer key={element.id} {...element}/>
            })
            }

          
            

             
            {props.isLoading ? <ReactLoading className={'loader'} type={'spin'} color={'black'} height={100} width={100}/> : null }
        </HomeProductsContainers>
        </>
    )
}

const HomeProductsTitle = styled.h1`

    font-size: 30px;
    font-weight: bold;
`


const HomeProductsContainers = styled.div`
    position: relative;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    grid-gap: 30px 30px;
    @media (max-width: 1920px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1920px) {
        
    }

    @media (max-width: 1440px) {
        grid-template-columns: 1fr 1fr; 
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;      
    }

    @media (max-width: 420px) {
        grid-template-columns: 1fr;      
    }
    
`

export default HomeContainers;