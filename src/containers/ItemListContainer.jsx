import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "../components/ItemList";

import logo from "../assets/logo.png";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    // 👉 Home: no mostrar productos (se mantiene igual)
    if (!categoryId) {
      setItems([]);
      return;
    }

    setLoading(true);

    const productsRef = collection(db, "products");

    const q = query(
      productsRef,
      where("category", "==", categoryId)
    );

    getDocs(q)
      .then(resp => {
        const items = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(items);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));

  }, [categoryId]);

  return (
    <>
      {/* logo */}
      {!categoryId && (
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <img
            src={logo}
            alt="Sneaker Shop"
            style={{ width: "600px", maxWidth: "90%" }}
          />
          <h2>Bienvenido</h2>
        </div>
      )}

      {/* productos */}
      {categoryId && (
        loading
          ? <p style={{ textAlign: "center" }}>Cargando productos...</p>
          : <ItemList items={items} />
      )}
    </>
  );
}