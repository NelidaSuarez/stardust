
import { useCart } from '../../Context/Context';


const CartItem = ({id, name, quantity, price}) => {
    const {removeItem} = useCart() 
    const handleRemove = (id) => {
      removeItem(id);
    };

  return (
    <article >
      <header >
        <h2 >{name}</h2>
      </header>
      <section >
        <p >Cantidad: {quantity}</p>
        <p >Precio x unidad: $ {price}</p>
      </section>
      <footer >
        <p >Subtotal: $ {price * quantity}</p>
        <button  onClick={() => handleRemove(id)}>
          Eliminar producto
        </button>
      </footer>
    </article>
  );
}
export default CartItem;