import { useState } from "react"
import { useCart } from "../../Context/Context";
import {db } from '../../services/firebase/index'
import { addDoc, collection,  documentId, getDocs, query, where, writeBatch } from "firebase/firestore";

const Checkout = () => {
      const [loading, setLoading] = useState(false);
      const [orderCreated, setOrderCreated]= useState (false)

      const {cart, totalQuantity, getTotal, clearCart} = useCart();
      const total = getTotal ()

    const createOrder = async () =>{
        setLoading(true)
        try {
        const objOrdedr = {
          buyer:{
            firtsName: "Nelida",
            lastName: "Suarez",
            phone: "1234567899",
            address: "Aca no es"
          },
            items: cart,
            totalQuantity,
            total,
            date: new Date()
        };

        const ids = cart.map((item)=> item.id);

        const productRef = collection(db, "products" );

        const productsAddedFromFirestore = await getDocs(
          query(productRef, where(documentId(), "in", ids)))
          const { docs } = productsAddedFromFirestore;

          const outOfStock = [];
          const batch = writeBatch(db)

          docs.forEach((doc) =>{
            const dataDoc = doc.data()
            const stockDB = dataDoc.stock;

            const productAddedToCart = cart.find( (prod)=> prod.id === doc.id );
            const prodQuantity = productAddedToCart?.quantity 

            if(stockDB >= prodQuantity){ 
              batch.update(doc.ref, {stock: stockDB - prodQuantity})
              }else {
                outOfStock.push ({id: doc.id, ...dataDoc})
              }
          });
          if(outOfStock.length === 0){
            await batch.commit();

            const orderRef = collection(db, "orders");
            const orderAdded =await addDoc(orderRef, objOrdedr);
            console.log( `El id de su orden es : ${orderAdded.id}`);
            clearCart()
            setOrderCreated(true)
          }else {
            console.log("Hay productos fuera de stock")
          } 
        }catch(error) {
          console.log(error) 
        }finally{
          setLoading(false)
        }
    }
    if(loading) {
      return <h1>Generando orden... </h1>
    }
    if(orderCreated){
      return (
        <h1>Orden generada correctamente!</h1>
      )
    }

    return (
      <>
    <div>Checkout</div>
        <button onClick={createOrder}> Generar orden </button>
        </>
  )
}

export default Checkout