import './ItemListContainer.css'
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import SpinnerList from '../Spinners/spinners'


import { db } from '../../services/firebase/'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greetings }) => {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { categoryId } = useParams()
    


    useEffect ( ()=> {
        setLoading(true)
        const collectioRef = categoryId
        ? query (collection(db, "products"), where ("category", "==", categoryId ) )
        :collection(db, "products")
        getDocs(collectioRef)
            .then    ((querySnapshot) => {
                
                const products = querySnapshot.docs.map((doc)=> {
                    return {id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            })
          
            .finally(()=> {
                setLoading(false);
            });








    }, [categoryId])

    if(loading){
        return <div> 
            <h3>Cargando productos...</h3>
            <SpinnerList/>
        </div>

    }

    return (
        <section className='fondo'>
            <div className='fondo1'>
        <div className='ItemListContainer'>
            <h1> {greetings} </h1>
            <ItemList products={products}/>
        </div>
        </div>
        </section>
    )
}
export default ItemListContainer