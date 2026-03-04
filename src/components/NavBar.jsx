import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.logo}>
        Sneaker Shop
      </NavLink>

      <div style={styles.links}>
        <NavLink to="/category/baloncesto">Baloncesto</NavLink>
        <NavLink to="/category/futbol">Fútbol</NavLink>
        <NavLink to="/category/lifestyle">Lifestyle</NavLink>
      </div>

      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    background: "#111",
    color: "white"
  },
  links: {
    display: "flex",
    gap: 20
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
