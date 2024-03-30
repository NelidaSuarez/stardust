
import { useState } from "react";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useCart } from "../../Context/Context";
import { db } from '../../services/firebase/index';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal();

    const createOrder = async (userData) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    firstName: userData.name,
                    phone: userData.phone,
                    email: userData.email
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };

            const ids = cart.map((item) => item.id);
            const productRef = collection(db, "products");
            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), "in", ids)));
            const { docs } = productsAddedFromFirestore;
            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;
                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderNumber(orderAdded.id); 
                clearCart();
                setOrderCreated(true);
            } else {
                console.log("Hay productos fuera de stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Generando orden...</h1>;
    }

    if (orderCreated) {
        return (
            <div>
                <h1>Orden creada con éxito.</h1>
                <p>Número de orden: {orderNumber}</p>
            </div>
        );
    }

    return (
        <>
            <div className="check">Checkout</div>
            <CheckoutForm  onConfirm={createOrder} />
        </>
    );
};

export default Checkout;

