import { Link } from "react-router-dom"


const Item = ({id, name, img,  price, stock}) => {
  return (
    <article  >
      <div>

      <header className="header">
        <h2> {name} </h2>
      </header>

      <picture>
        <img src={img} style={{width:120}} />
      </picture>


        <h2> $ {price} </h2>


        <p>Stock disponible:{stock} </p>
        
        
          <Link to={`/item/${id} `}>Ver detalles</Link>
        
          </div>
    </article>
  )
}

export default Item