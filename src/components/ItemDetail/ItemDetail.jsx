import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from 'react-router-dom' 
import { CartContext } from "../../Context/Context"



const ItemDetail = ({ id, name, img, category, price, description, stock, }) => {
    const [ quantityAdded, setQuantityAdded ] = useState(0)

    const { addItem } = useContext (CartContext)

    const handleOnAdd = ( quantity ) => {
        setQuantityAdded( quantity )    

    const item = {
      id, name, price, quantity
    }

    addItem ( item )

  } 

  return (
    <article className='fondo'>
      
        <h1> {name} </h1>
    
      
        <img src= {img} style={{width:200}}/>
      

        <p> Categoria: {category} </p>

        <p> Descripcion:{description} </p>
        <p>$ {price} </p>
      
      
        <footer>
          { 
          quantityAdded > 0 ? (
            <Link to='/cart'> Comprar </Link>
          ):(
             <ItemCount initial = {1} stock={stock} onAdd={handleOnAdd}/> 
          )
        
          }
        </footer>
    
    </article>
  )
}

export default ItemDetail