import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect ( ()=> {
         const asyncFunc =categoryId ? getProductsByCategory : getProducts
         asyncFunc (categoryId)

        
        .then( Response =>{
            setProducts(Response)
        } )
        .catch( error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <div>
            <h1> {greetings} </h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer