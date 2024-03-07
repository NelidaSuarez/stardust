import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter , Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      <div className='App ' >
        <BrowserRouter>
          <NavBar/>
          <h4>¡Revive la magia del pasado con nuestros vinilos y equipos retro!</h4>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={ <ItemDetailConteiner/>}/>
              <Route path='*' element={ <h1>404 NOT FOUND </h1>}/>              
            


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
