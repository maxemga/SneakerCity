import styled from 'styled-components'
import BasketContainers from './BasketContainers'

const BasketComponent: React.FC = () => {
    return(
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
                            <p>15.99$</p>
                        </BasketCalcTotal>
                        <BasketCalcDelivery>
                            <h3>Delivery fee</h3>
                            <p>0$</p>
                        </BasketCalcDelivery>
                        <BasketCalcResult>
                            <p>15.99$</p>
                        </BasketCalcResult>
                        <BasketCalcButton>
                            <button>Proceed to checkout</button>
                        </BasketCalcButton>
                    </BasketCalc>
                </BasketContent>
            </Wrapper>
        </BasketBlock>
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