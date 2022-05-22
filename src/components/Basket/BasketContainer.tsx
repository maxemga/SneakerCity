import Image from 'next/image'
import styled from 'styled-components'

const BasketContainer: React.FC = () => {
    return(
        <BasketProductsContainer>
            <BasketContainerContent>
                <BasketContainerImage>
                    <Image src={require('./../../../public/images/Header/f.png')} height={100} width={100} objectFit={'contain'}/>
                </BasketContainerImage>
                <BasketContainerTitle>
                    <h2>Jordan Delta 2</h2>
                    <h3>15.99$</h3>
                </BasketContainerTitle>
                <BasketContainerButtons>
                    
                </BasketContainerButtons>
                <Flex>

                </Flex>
                <BasketContainerPrice>
                    <p>15.99$</p>
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
        
    }
    h3 {
        color: rgba(0, 0, 0, 0.65);
    }
`

const BasketContainerButtons = styled.div`
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


export default BasketContainer;