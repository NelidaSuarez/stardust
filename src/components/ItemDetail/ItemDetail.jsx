import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({ name, img, category, price, description, stock}) => {
  return (
    <article>
      
        <h1> {name} </h1>
    
      
        <img src= {img} style={{width:200}}/>
      
      
        <p> Categoria: {category} </p>
        <p> Descripcion:{description} </p>
        <p>${price} </p>
      
      
        <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log('cantidad agregada',quantity)}/>
    
    </article>
  )
}

export default ItemDetail