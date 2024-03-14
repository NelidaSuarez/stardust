import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner2 from '../Spinners/spinners2';

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState(null);
    const [ loading, setLoading ] = useState(true)
    
    const { itemId } = useParams()
    
    useEffect( ()=> {
            getProductById(itemId)
            .then( Response => {
                setProduct(Response)
            })
            .catch( error => {
                console.log(error)
            })
            .finally(()=>{
              setLoading(false)
            })
    }, [itemId])


  return (
    <div className="ItemDetailContainer">
      { loading ? <div> <h3>Cargando producto...</h3><Spinner2/></div> : <ItemDetail {...product}/>}
    </div>
  );
};

export default ItemDetailContainer