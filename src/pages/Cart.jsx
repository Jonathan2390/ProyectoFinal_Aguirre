import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, removeItem, clearCart, totalPrice } =
        useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="cart-container-page">
                <h2>El carrito está vacío</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="cart-container-page">
            <h2>Carrito</h2>

            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <div>
                        <h4>{item.title}</h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>

                    <button onClick={() => removeItem(item.id)}>
                        Eliminar
                    </button>
                </div>
            ))}

            <h3>Total: ${totalPrice()}</h3>

            <button onClick={clearCart}>
                Vaciar carrito
            </button>

            <br /><br />

            {/* 🔥 BOTÓN CLAVE */}
            <Link to="/checkout">
                <button>
                    Finalizar compra
                </button>
            </Link>
        </div>
    );
}