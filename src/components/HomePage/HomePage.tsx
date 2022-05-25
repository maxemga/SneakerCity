import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { useHttp } from '../../hooks/useHttp'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {  hideModals } from '../../store/reducers/modalReducer';
import FooterComponent from '../Footer/FooterComponents';
import ModalMenu from '../Modal/ModalMenu';
import ModalProduct from '../Modal/ModalProduct';
import HomeContainers from './HomeContainers';
import HomeFilter from './HomeFilter';



const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const modal = useTypedSelector(state => state.modalReducer);
    const products = useTypedSelector(state=> state.productsReducer.products);
    const { request, isLoading } = useHttp();

    useEffect(() => {
        products.length == 0 ? request('https://fakestoreapi.com/products') : null;
    }, [])


    return(
        <>
        <HomeBlock onClick={() => dispatch(hideModals())}>
            <Wrapper>
               <HomeContent>
                    <HomeFilterBlock>
                        <HomeFilter/>
                    </HomeFilterBlock>
                    <HomeProductsBlock>
                        <HomeContainers isLoading={isLoading} products={products}/>
                        <Flex/>
                        {isLoading == true ? null : <FooterComponent/>}
                    </HomeProductsBlock>
               </HomeContent>
            </Wrapper>
        </HomeBlock>
        {modal.isOpenProduct ? <ModalProduct/> : null}
        {modal.isOpenMenu ? <ModalMenu/> : null}
        </>

    )
}

const HomeBlock = styled.div`
`

const HomeContent = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 100px; 
    margin-top: 30px;

    @media (max-width: 768px) {
        column-gap: 0; 
    }
    
    
`   

const HomeFilterBlock = styled.div`
    flex-grow: 1;
`   

const Flex = styled.div`
    flex: 1;
`

const HomeProductsBlock = styled.div`
    flex-grow: 3;
`  

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`   


export default HomePage;