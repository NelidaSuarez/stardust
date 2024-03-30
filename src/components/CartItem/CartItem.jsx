
import { useCart } from '../../Context/Context';


const CartItem = ({id, name,img, quantity, price}) => {
    const {removeItem} = useCart() 
    const handleRemove = (id) => {
      removeItem(id);
    };

  return (
    <article >
      <header >
        <h2 >{name}</h2>
      </header>
      <picture className='img'>
        <img src={img} style={{width:120}} />
      </picture>
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