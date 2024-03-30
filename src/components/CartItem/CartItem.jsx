import './CartItem.css'
import { useCart } from '../../Context/Context';


const CartItem = ({id, name,img, quantity, price}) => {
    const {removeItem} = useCart() 
    const handleRemove = (id) => {
      removeItem(id);
    };

  return (
    <article className='card-article' >

      <header className='card-herader' >
       
        <h2 className='name'>{name}</h2>
        
      </header>

      <picture className='img'>
        <img src={img} style={{width:120}} />
      </picture>

      <section className='card-section-footer'>
        <p className='card-p'>Cantidad: {quantity}</p>
        <p className='card-p' >Precio x unidad: $ {price}</p>
      </section>

      <footer className='card-section-footer' >
        <p className='card-p'>Subtotal: $ {price * quantity}</p>
        <button className='card-remove' onClick={() => handleRemove(id)}>
          🗑
        </button>
      </footer>

    </article>
  );
}
export default CartItem;