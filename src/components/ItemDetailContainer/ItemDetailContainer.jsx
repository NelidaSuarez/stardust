import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner2 from '../Spinners/spinners2';

import {db} from '../../services/firebase/index'
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState(null);
    const [ loading, setLoading ] = useState(true)
    
    const { itemId } = useParams()
    
    useEffect( ()=> {
      getDoc(doc(db, "products", itemId ))
      .then((querySnapshot) => {
          
        const product = {id: querySnapshot.id, ...querySnapshot.data ()}
        setProduct(product)
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