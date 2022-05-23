import type { NextPage } from 'next'
import styled from 'styled-components'
import { Provider } from 'react-redux';
import BasketComponent from '../components/Basket/BasketComponent';
import FooterComponent from '../components/Footer/FooterComponents';
import Header from '../components/Header/Header';
import { store } from '../store'

const Basket: NextPage = () => {
  return (
  <Provider store={store}>
    <BasketPage>
      <Header/>
      <BasketComponent/>
      <Flex/>
      <FooterComponent/>
    </BasketPage>  
  </Provider>
  )
}

const BasketPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Flex = styled.div`
  flex: 1;
`


export default Basket;
