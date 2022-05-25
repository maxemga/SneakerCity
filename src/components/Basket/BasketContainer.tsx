import Image from 'next/image'
import styled from 'styled-components'
import { Minus } from '../../../public/images/Basket/minus'
import { Plus } from '../../../public/images/Basket/plus'
import { useActions } from '../../hooks/useActions'
import { IProductBasket } from '../../types/types'

const BasketContainer: React.FC<IProductBasket> = (props: IProductBasket) => {
    const { removeBasket } = useActions();
    
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
                        <Minus id={props.id}/>
                        <ModalAddField>{props.count}</ModalAddField>
                        <Plus id={props.id}/>
                    </ModalInfoAdd>
                </BasketContainerButtons>
                <Flex>

                </Flex>
                <BasketContainerPrice>
                    <p>{(props.price*props.count).toFixed(2)}$</p>
                </BasketContainerPrice>
                <ModalCross onClick={() => removeBasket(props.id)}>
                            <span></span>
                        </ModalCross>
            </BasketContainerContent>
        </BasketProductsContainer>
    )
}

const ModalCross = styled.div`
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 40px;

    height: 50px;
    &:before, &:after {
        content: ""; 
        position: absolute; 
        width: 25px; 
        height: 5px; 
        background: #B2B2B2;
        border-radius: 5px;
    };
    &::before {
        transform: rotate(45deg)
    };
    &::after {
        transform: rotate(-45deg)
    };
`


const BasketProductsContainer = styled.div`
    background-color: #F5F5F5;
    width: 100%;
`

const BasketContainerContent = styled.div`
    padding: 20px 30px;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 1200px) {
        display: block;
        text-align: center;
    }
    
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

    @media (max-width: 1200px) {
        h2 {
            overflow: visible;
            width: 100%;
        }
        h3 {
            display: none;
        }
    }
`

const BasketContainerButtons = styled.div`
    
    margin-left: 25%;
    @media (max-width: 1600px) {
        margin-left: 10%;
    }
    @media (max-width: 1600px) {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    @media (max-width: 1024px) {
        margin-top: 20px;
    }
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
    line-height: 10px;
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