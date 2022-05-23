import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeBasket } from '../../store/reducers/productsReducer';
import BasketContainers from './BasketContainers'
import { ToastContainer, toast } from 'react-toastify';

const BasketComponent: React.FC = () => {
    const dispatch = useDispatch();
    const productsBasket = useSelector((state: any) => state.productsReducer.productsBasket);

    const clearBasket = () => {
        dispatch(removeBasket());
        
        // toast.success('🦄 Wow so easy!', {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     });
    }
    
    return(
    <>
        <BasketBlock>
            <Wrapper>
                <BasketContent>
                    <BasketProducts>
                        <h2>Your shopping cart</h2>
                        <BasketContainers/>
                    </BasketProducts>
                    <BasketCalc>
                        <h2>Order summary</h2>
                        <BasketCalcTotal>
                            <h3>Sub total</h3>
                            <p>{productsBasket.length == 0 ? '00.00' : productsBasket.reduce((value1: number, {price}: any) => value1 + price, 0)}$</p>
                        </BasketCalcTotal>
                        <BasketCalcDelivery>
                            <h3>Delivery fee</h3>
                            <p>0$</p>
                        </BasketCalcDelivery>
                        <BasketCalcResult>
                            <p>{productsBasket.length == 0 ? '00.00' : productsBasket.reduce((value1: number, {price}: any) => value1 + price, 0)}$</p>
                        </BasketCalcResult>
                        <BasketCalcButton>
                            <button onClick={() => clearBasket()}>Proceed to checkout</button>
                        </BasketCalcButton>
                        {/* <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            /> */}
                    </BasketCalc>
                </BasketContent>
            </Wrapper>
        </BasketBlock>

        
    </>
    )
}

const BasketBlock = styled.div`
`

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`

const BasketContent = styled.div`
    display: flex;
    column-gap: 100px;
    justify-content: space-between;
    
`

const BasketProducts = styled.div`
    width: 100%;
    h2{ 
        font-size: 30px;
    }
`

const BasketCalc = styled.div`
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
`

const BasketCalcTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BasketCalcDelivery = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
`

const BasketCalcResult = styled.div`
    margin-top: 20px;
    float: right;
`

const BasketCalcButton = styled.div`
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





export default BasketComponent;