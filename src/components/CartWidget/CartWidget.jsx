import './CartWidget.css'
import bag from './assets/bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../Context/Context'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart'  className='CartWidget'  >
           <img src={bag} alt='cart-wiget'/>

           {totalQuantity > 0 && <span className='cart-quantity'>{totalQuantity}</span>}
        </Link>
    )
}
export default CartWidget