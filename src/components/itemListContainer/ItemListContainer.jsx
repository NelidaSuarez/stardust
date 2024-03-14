import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import SpinnerList from '../Spinners/spinners'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect ( ()=> {
        setLoading(true)
        const asyncFunc =categoryId ? getProductsByCategory : getProducts
         asyncFunc (categoryId)

        
        .then( Response =>{
            setProducts(Response)
        } )
        .catch( error => {
            console.log(error)
        })
        .finally( ()=>{
            setLoading(false)
        })
    }, [categoryId])

    if(loading){
        return <div> 
            <h3>Cargando productos...</h3>
            <SpinnerList/>
        </div>

    }

    return (
        <div className='ItemListContainer'>
            <h1> {greetings} </h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer