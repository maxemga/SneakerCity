import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Minus } from '../../../public/images/Basket/minus'
import { Plus } from '../../../public/images/Basket/plus'
import { IProduct, IProductBasket } from '../../types/types'

const BasketContainer: React.FC<IProductBasket> = (props: IProductBasket) => {
    // const [count, setCount] = useState<number>(1);
    

    return(
        <BasketProductsContainer>
            <BasketContainerContent>
                <BasketContainerImage>
                    <Image src={props.image} height={100} width={100} objectFit={'contain'}/>
                </BasketContainerImage>
                <BasketContainerTitle>
                    <h2>{props.title}</h2>
                    <h3>{props.price}$</h3>
                </BasketContainerTitle>
                <BasketContainerButtons>
                    <ModalInfoAdd>
                        <Minus/>
                        <ModalAddField>{props.count}</ModalAddField>
                        <Plus/>
                    </ModalInfoAdd>
                </BasketContainerButtons>
                <Flex>

                </Flex>
                <BasketContainerPrice>
                    <p>{props.price*props.count}$</p>
                </BasketContainerPrice>
            </BasketContainerContent>
        </BasketProductsContainer>
    )
}

const BasketProductsContainer = styled.div`
    background-color: #F5F5F5;
    width: 100%;
`

const BasketContainerContent = styled.div`
    padding: 20px 30px;
    display: flex;
    align-items: center;
`

const BasketContainerImage = styled.div`
    background-color: white;
    border-radius: 15px;
`

const BasketContainerTitle = styled.div`
    margin-left: 30px;
    h2 {
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    h3 {
        color: rgba(0, 0, 0, 0.65);
    }
`

const BasketContainerButtons = styled.div`
    margin-left: 25%;
`

const BasketContainerPrice = styled.div`
    justify-content: flex-end;
    p {
        font-size: 25px;
        font-weight: bold;
    }
`

const Flex = styled.div`
    flex: 1;
`

const ModalInfoAdd = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`
const ModalAddField = styled.p`
    border: 1px solid rgba(0, 0, 0, 0.65);
    padding: 25px;
    border-radius: 8px;
    margin: 0;
    line-height: 0;

`
const ModalAddButton = styled.button`
    cursor: pointer;
    background-color: #D90429;
    color: white;
    border: none;
    outline: none;
    padding: 20px 30px;
    font-weight: bold;
    font-size: 20px;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
        transition: 0.3s;
    }
`


export default BasketContainer;