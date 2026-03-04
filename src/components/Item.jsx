import { Link } from "react-router-dom";

export default function Item({ id, title, image, price }) {
  return (
    <div style={styles.card} className ="item-card">
      <div style={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          style={styles.image}
        />
      </div>

      <h4>{title}</h4>
      <p>${price}</p>

      <Link to={`/item/${id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

const styles = {
  card: {
    width: 320,
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  imageContainer: {
    width: "100%",
    height: 180,
    overflow: "hidden",
    borderRadius: 8,
    background: "#f2f2f2"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"   // 🔥 CLAVE
  }
};
