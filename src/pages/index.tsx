import type { NextPage } from 'next'
import HomePage from './../components/HomePage/HomePage'
import { store } from '../store'
import { Provider } from 'react-redux'

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div>
        <HomePage/>
      </div>
    </Provider>
  )
}

export default Home
