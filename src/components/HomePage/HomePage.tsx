import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useHttp } from '../../hooks/useHttp'
import { IProduct, IProductState } from '../../types/types';
import HomePageContainer from './HomePageContainer'

const HomePage: React.FC = () => {
    const { request, products } = useHttp();
    // const products = useSelector((state: any) => state.productsReducer.products)

    useEffect(() => {
        request('https://fakestoreapi.com/products');    
        console.log(products)   
    }, [])


    return(
        <HomeBlock>
            <Wrapper>
               <HomeContent>
                    <HomeFilter>
                        <p>Brandfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                    </HomeFilter>
                    <HomeProducts>
                        <HomeProductsTitle>The new arrivals</HomeProductsTitle>
                        <HomeProductsContainers>
                            {products && products.map((element: IProduct) => {
                                return <HomePageContainer key={element.id} {...element}/>
                            })}
                        </HomeProductsContainers>
                    </HomeProducts>
               </HomeContent>
            </Wrapper>
        </HomeBlock>
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
const HomeProductsContainers = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    grid-gap: 130px 30px;
    
`


export default HomePage;