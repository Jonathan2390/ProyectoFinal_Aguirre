import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // 🔹 Agregar producto al carrito
    const addItem = (item, quantity) => {
        const existingItem = cart.find(prod => prod.id === item.id);

        if (existingItem) {
            const updatedCart = cart.map(prod =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + quantity }
                    : prod
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // 🔹 Eliminar producto
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    // 🔹 Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // 🔹 Total de unidades
    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    // 🔹 Total a pagar
    const totalPrice = () => {
        return cart.reduce(
            (acc, prod) => acc + prod.price * prod.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
}