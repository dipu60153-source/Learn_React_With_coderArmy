
import './App.css'
import { Counting } from './Counting'
import { Provider } from 'react-redux'
import store from './Store'


function App() {


  return (
    <Provider store={store}>
     <Counting/>
   </Provider>
  )
}

export default App
