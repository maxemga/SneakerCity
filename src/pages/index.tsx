import type { NextPage } from 'next'
import HomePage from './../components/HomePage/HomePage'
import { store } from '../store'
import { Provider } from 'react-redux'
import Header from '../components/Header/Header'







const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <HomePage/>     
      </div>
    </Provider>
  )
}

export default Home;
