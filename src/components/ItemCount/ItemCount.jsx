
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd  }) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock ){
            setQuantity (prev => prev + 1 )
        }
    } 

    const decrement = () => {
        if(quantity > 1){
            setQuantity (prev => prev - 1 )
        }
    } 


  return (
    <div  >
        <div style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}  >
            <button   onClick={decrement}>-</button>
            <h3 >{quantity}</h3>
            <button  onClick={increment}>+</button>
        </div>
        <button onClick={ ()=> onAdd(quantity)} disabled={!stock}  >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount