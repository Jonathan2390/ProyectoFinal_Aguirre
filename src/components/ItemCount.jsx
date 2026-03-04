import { useState } from "react";

export default function ItemCount({ stock = 1, initial = 1, onAdd }) {
  const safeStock =
    typeof stock === "number" && stock > 0 ? stock : 1;

  const safeInitial =
    typeof initial === "number" && initial > 0
      ? Math.min(initial, safeStock)
      : 1;

  const [count, setCount] = useState(safeInitial);

  const increment = () => {
    if (count < safeStock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (typeof onAdd === "function") {
      onAdd(count);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>

      <span style={{ margin: 10 }}>{count}</span>

      <button onClick={increment}>+</button>

      <br />

      <button onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
}