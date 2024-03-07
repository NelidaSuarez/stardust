import { Link } from "react-router-dom"


const Item = ({id, name, img,  price, stock}) => {
  return (
    <article>
      <head>
        <h2> {name} </h2>
      </head>
      <picture>
        <img src={img} style={{width:100}} />
      </picture>
      <section>
        <h2> $ {price} </h2>
        <p>Stock disponible:{stock} </p>
        </section>
        <footer>
          <Link to={`/item/${id} `}></Link>
        </footer>
    </article>
  )
}

export default Item