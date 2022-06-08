import styled from 'styled-components'
import Image from 'next/image'
import { IProduct } from '../../types/types'
import { useActions } from '../../hooks/useActions'

const HomePageContainer: React.FC<IProduct> = (props: IProduct) => {
    const { changeId, showModalProduct } = useActions();

    const changeModal = (e: Event) => {
        changeId(props.id);
        showModalProduct();
        e.stopPropagation();
       
    }

    return(
        <>
        <HomeProductsContainer onClick={(event: any) => changeModal(event)}>
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
        
        </>
    )
}

const HomeProductsContainer = styled.div`
    cursor: pointer;
    background-color: white;
    box-sizing: content-box;  
    
 `

const HomeProductsContainerImage = styled.div`
    background-color: #F5F5F5;
    padding: 30px 10px;
`

const HomeProductsContainerInfo = styled.div`

`

const HomeProductsContainerTitle = styled.h2`
    margin-top: 30px;
    text-align: left;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

const HomeProductsContainerPrice = styled.p`
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
    text-align: left;
`

export default HomePageContainer;