import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useHttp } from '../../hooks/useHttp'
import { IProduct, IProductState } from '../../types/types';


import ModalProduct from '../Modal/ModalProduct';
import HomeContainers from './HomeContainers';



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
                    <HomeFilter>
                        <p>Brandfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                    </HomeFilter>
                    <HomeProducts>
                        <HomeProductsTitle>The new arrivals</HomeProductsTitle>
                        <HomeContainers isLoading={isLoading} products={products}/>
                    </HomeProducts>
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
    // display: grid;
    // grid-template-columns: 1f 5fr;
    margin-top: 30px
`   

const HomeFilter = styled.div`
    flex-grow: 1;
`   

const HomeProducts = styled.div`
    flex-grow: 3;
`  

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`   
const HomeProductsTitle = styled.h1`

    font-size: 30px;
    font-weight: bold;
`


export default HomePage;