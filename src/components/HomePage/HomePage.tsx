import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useHttp } from '../../hooks/useHttp'
import { IProduct, IProductState } from '../../types/types';


import ModalProduct from '../Modal/ModalProduct';
import HomeContainers from './HomeContainers';
import HomeFilter from './HomeFilter';



const HomePage: React.FC = () => {

    const modal = useSelector((state: any) => state.modalReducer);
    const { request, products, isLoading } = useHttp();

    useEffect(() => {
        request('https://fakestoreapi.com/products');    

    }, [])


    return(
        <>
        <HomeBlock>
            <Wrapper>
               <HomeContent>
                    <HomeFilterBlock>
                        <HomeFilter/>
                    </HomeFilterBlock>
                    <HomeProductsBlock>
                        <HomeContainers isLoading={isLoading} products={products}/>
                    </HomeProductsBlock>
               </HomeContent>
            </Wrapper>
        </HomeBlock>
        {modal.isOpen ? <ModalProduct/> : null}
        </>

    )
}

const HomeBlock = styled.div`
`

const HomeContent = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 100px; 
    margin-top: 30px
`   

const HomeFilterBlock = styled.div`
    flex-grow: 1;
`   

const HomeProductsBlock = styled.div`
    flex-grow: 3;
`  

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`   


export default HomePage;