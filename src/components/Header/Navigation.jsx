import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <h1>YarnHub</h1>
      <div className={styles.navLinks}>
        <span>
          <NavLink to="/">Hem</NavLink>
        </span>
        <span>
          <NavLink to="/create">Skapa konto</NavLink>
        </span>
        <span>
          <NavLink to="/login">Logga in</NavLink>
        </span>
        <span>
          <NavLink to="/basket">Varukorg</NavLink>
        </span>
      </div>
    </nav>
  );
};
export default Navigation;
