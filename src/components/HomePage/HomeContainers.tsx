import ReactLoading from 'react-loading';
import styled from 'styled-components'
import { IHomeContainers, IProduct, IProductState } from '../../types/types';
import HomePageContainer from './HomePageContainer'


const HomeContainers: React.FC<IHomeContainers>= (props) => {
    return(
        <>
        <HomeProductsTitle>The new arrivals</HomeProductsTitle>
        <HomeProductsContainers>
            {props.products && props.products.map((element: IProduct) => {
                return <HomePageContainer key={element.id} {...element}/>
            })}
            {props.isLoading ? <ReactLoading className={'loader'} type={'spin'} color={'black'} height={100} width={100}/> : null }
            {/* <ModalProduct/> */}

        </HomeProductsContainers>
        </>
    )
}

const HomeProductsTitle = styled.h1`

    font-size: 30px;
    font-weight: bold;
`


const HomeProductsContainers = styled.div`
    position: relative;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    grid-gap: 130px 30px;
    
`

export default HomeContainers;