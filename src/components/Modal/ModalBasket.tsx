

import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const ModalBasket: React.FC = () => {
    const { hideModalMenu, removeBaskets } = useActions();
    const productsBasket = useTypedSelector(state => state.productsReducer.productsBasket);
    const modal = useTypedSelector(state => state.modalReducer);

    const clearBasket = () => {
        productsBasket.length == 0 ? toast.error('Basket is empty') : toast.success('The order has been placed');
        removeBaskets();       
    }

    return(
        <MenuModal>
            <MenuContent>
                <HeaderCross onClick={() => hideModalMenu()}>
                    <span></span>
                </HeaderCross>
                <ModalBasketCalc>
                        <h2>Order summary</h2>
                        <ModalBasketCalcTotal>
                            <h3>Sub total</h3>
                            <p>{productsBasket.length == 0 ? '00.00' : productsBasket.reduce((value1: number, {price}: any) => value1 + price, 0)}$</p>
                        </ModalBasketCalcTotal>
                        <ModalBasketCalcDelivery>
                            <h3>Delivery fee</h3>
                            <p>0$</p>
                        </ModalBasketCalcDelivery>
                        <ModalBasketCalcResult>
                            <p>{productsBasket.length == 0 ? '00.00' : productsBasket.reduce((value1: number, {price}: any) => value1 + price, 0)}$</p>
                        </ModalBasketCalcResult>
                        <ModalBasketCalcButton>
                            <button onClick={() => clearBasket()}>Proceed to checkout</button>
                        </ModalBasketCalcButton>
                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </ModalBasketCalc>
                
               
            </MenuContent>
        </MenuModal>
    )
}

const ModalBasketCalc = styled.div`
    width: 500px;
    h2 {
        color: rgba(0, 0, 0, 0.75);
    }
    h3 {
        color: rgba(0, 0, 0, 0.65);
        line-height: 0;
    }
    p {
        font-size: 25px;
        font-weight: bold;
        line-height: 0;
    }

    @media (max-width: 768px) {
        width: 300px;
        display: block;
    }

    @media (max-width: 340px) {
        width: 200px;
    }
`

const ModalBasketCalcTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ModalBasketCalcDelivery = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
`

const ModalBasketCalcResult = styled.div`
    margin-top: 20px;
    float: right;
`

const ModalBasketCalcButton = styled.div`
    margin-top: 150px;
    transition: .3s;
    button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: #D90429;
        color: white;
        font-weight: bold;
        font-size: 20px;
        padding: 20px 40px;
    }
    &:hover {
        opacity: 0.7;
        transition: .3s;
    }
`

const MenuModal = styled.div`
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    background-color: white;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    height: 100%;

    @media (max-width: 768px) {
        display: block;
    }
    
`


const HeaderCross = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-top: 50px;
    width: 100%;
    align-items: center;
    height: 50px;
    &:before, &:after {
        content: ""; 
        position: absolute; 
        width: 35px; 
        height: 8px; 
        background: #D90429;
        border-radius: 5px;
    };
    &::before {
        transform: rotate(45deg)
    };
    &::after {
        transform: rotate(-45deg)
    };
`

const MenuContent = styled.div`
    padding: 0 60px;

`

export default ModalBasket;