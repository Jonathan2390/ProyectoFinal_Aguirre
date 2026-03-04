import { useContext, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";


export default function Checkout() {
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            buyer,
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };

        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch(error => console.error(error));
    };

    if (orderId) {
        return (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <h2>¡Gracias por tu compra! 🎉</h2>
                <p>Tu código de orden es:</p>
                <strong>{orderId}</strong>
            </div>
        );
    }

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center" }}>El carrito está vacío</h2>;
    }

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={buyer.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={buyer.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={buyer.email}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Confirmar compra
                </button>
            </form>
        </div>
    );

}