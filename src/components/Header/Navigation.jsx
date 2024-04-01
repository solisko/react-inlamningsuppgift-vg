import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";
import cart from "../Assets/cart.png";

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.siteLogoDiv}>
        <h1>YarnHub</h1>
      </div>
      <ul className={styles.linksDiv}>
        <li>
          <NavLink to="/">Hem</NavLink>
        </li>
        <li>
          <button>
            <NavLink to="/create">Skapa konto</NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink to="/login">Logga in</NavLink>
          </button>
        </li>
      </ul>
      <div className={styles.cartDiv}>
        <NavLink to="/basket">
          <img src={cart} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;
