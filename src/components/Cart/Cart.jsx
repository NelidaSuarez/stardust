import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart,totalQuantity, getTotal  } = useContext(CartContext)

    if (totalQuantity === 0 ) {
        return (
            <div>
                <h1> El carrito está vacio </h1>
                <Link to='/' > Productos </Link>
            </div>
        )
    }

    return (
        <div > 
            <h1 className='h1'> Su carrito</h1>
           <div > {cart.map( p => <CartItem key={p.id} {...p}/>)}</div>
            <h3 > Total ${ getTotal()  }  </h3>
            <button onClick={() => clearCart()} className='button-vaciar'> Vaciar carrito 🗑</button>
            <Link to='/checkout' > Checkout </Link>
        </div>
    )
}

export default Cart