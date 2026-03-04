import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then(resp => {
        if (resp.exists()) {
          setItem({ id: resp.id, ...resp.data() });
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));

  }, [itemId]);

  return (
    <>
      {loading
        ? <p style={{ textAlign: "center" }}>Cargando producto...</p>
        : <ItemDetail item={item} />
      }
    </>
  );
}