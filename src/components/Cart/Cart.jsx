import { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";
import CartItem from '../CartItem../CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity,  } = useContext(CartContext)
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
        { cart.map (p => <CartItem key = {p.id} { ...p}/>) }
        <h3> Total ${  }  </h3>
        <button onClick={() => clearCart()} > Vaciar carrito </button>
        <Link to='/checkout'> Checkout </Link>
        </div>
    )
}

export default Cart