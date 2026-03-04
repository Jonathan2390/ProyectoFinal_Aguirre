import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const { id, title, image, price, stock } = item;

  const handleAdd = (qty) => {
    addItem(
      {
        id: String(id),
        title,
        price,
        image
      },
      qty
    );
    setAdded(true);
  };

  return (
    <div className="item-detail">
      {image && (
        <img
          src={image}
          alt={title}
          width="300"
        />
      )}

      <h2>{title}</h2>
      <h3>${price}</h3>

      {/*PRODUCTO SIN STOCK */}
      {stock === 0 ? (
        <p className="out-of-stock">Producto agotado</p>
      ) : !added ? (
        <ItemCount
          stock={stock}
          initial={1}
          onAdd={handleAdd}
        />
      ) : (
        <p className="added-message">
          Producto agregado al carrito
        </p>
      )}
    </div>
  );
}