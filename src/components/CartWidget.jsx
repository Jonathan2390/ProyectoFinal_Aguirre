import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.png";


export default function CartWidget() {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();

    return (
        <Link to="/cart" className="cart-link">
            <div className="cart-container">
                <img
                    src={cartIcon}
                    alt={`Carrito (${quantity} items)`}
                    className="cart-icon"
                />

                {quantity > 0 && (
                    <span className="cart-badge">
                        {quantity}
                    </span>
                )}
            </div>
        </Link>
    );
}