import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner2 from '../Spinners/spinners2';
import {db} from '../../services/firebase/index'
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState(null);
    const [ loading, setLoading ] = useState(true)
    
    const { itemId } = useParams()
    
    useEffect(() => {
      setLoading(true)

      const docRef = doc(db, 'products' , itemId)

      getDoc(docRef)
      .then(response  => {
          const data =response.data()
          const productAdapted = {id: response.id, ...data }
          setProduct(productAdapted)
      })
      .catch(error => {
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