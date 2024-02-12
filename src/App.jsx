
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  

  return (
    <>
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting={"¡Revive la magia del pasado con nuestros vinilos y equipos retro!"}/>
      </div>
    </>
  )
}

export default App
