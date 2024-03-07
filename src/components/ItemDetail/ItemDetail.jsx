import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({name, img, category, price, description}) => {
  return (
    <article>
      <header>
        <h1> {name} </h1>
      </header>
      <picture>
        <img src= {img} style={{width:200}}/>
      </picture>
      <section>
        <p> Categoria: {category} </p>
        <p> Descripcion:{description} </p>
        <p>{price} </p>
      </section>  
      <footer>
        <ItemCount initial={1} stock={10}/>
      </footer>
    </article>
  )
}

export default ItemDetail