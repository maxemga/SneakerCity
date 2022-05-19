import styled from 'styled-components'
import Image from 'next/image'
import { IProduct } from '../../types/types'
import { useEffect } from 'react'

const HomePageContainer: React.FC<IProduct> = (props: IProduct) => {

    return(
        <HomeProductsContainer>
            <HomeProductsContainerImage>
                <Image
                    src={props.image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    objectFit={'contain'}
                />
            </HomeProductsContainerImage>
            <HomeProductsContainerInfo>

                <HomeProductsContainerTitle>{props.title}</HomeProductsContainerTitle>
                <HomeProductsContainerPrice>{props.price}$</HomeProductsContainerPrice>

            </HomeProductsContainerInfo>
        </HomeProductsContainer>
    )
}

const HomeProductsContainer = styled.div`
   cursor: pointer;
    height: 500px;
 `

const HomeProductsContainerImage = styled.div`
    background-color: #F5F5F5;
    padding: 30px 10px;
`

const HomeProductsContainerInfo = styled.div`
`

const HomeProductsContainerTitle = styled.h2`
    margin-top: 30px;
    font-size: 20px;
`

const HomeProductsContainerPrice = styled.p`
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
`

export default HomePageContainer;