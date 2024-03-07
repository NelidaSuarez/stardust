import { Link } from "react-router-dom"


const Item = ({id, name, img,  price, stock}) => {
  return (
    <article>
      
        <h2> {name} </h2>
      
      
        <img src={img} style={{width:100}} />
      
      
        <h2> $ {price} </h2>
        <p>Stock disponible:{stock} </p>
        
        
          <Link to={`/item/${id} `}></Link>
        
    </article>
  )
}

export default Item