
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart,totalQuantity, total  } = useContext(CartContext)

    if (totalQuantity === 0 ) {
        return (
            <div>
                <h1> El carrito está vacio </h1>
                <Link to='/' > Productos </Link>
            </div>
        )
    }

    return (
        <div>
            <h1> Carrito</h1>
            {cart.map( p => <CartItem key={p.id} {...p}/>)}
            <h3> Total ${ total  }  </h3>
            <button onClick={() => clearCart()} > Vaciar carrito </button>
            <Link to='/checkout'> Checkout </Link>
        </div>
    )
}

export default Cart