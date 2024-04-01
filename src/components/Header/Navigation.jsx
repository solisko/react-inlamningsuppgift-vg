import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";
import cart from "../Assets/cart.png"

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <div className={siteNameDiv} >

      <h1>YarnHub</h1>
      </div>
      <div className={styles.navLinksDiv}>
        <span>
          <NavLink to="/">Hem</NavLink>
        </span>
        <button>
          <NavLink to="/create">Skapa konto</NavLink>
        </button>
        <button>
          <NavLink to="/login">Logga in</NavLink>
        </button>
        <div className={styles.cartDiv}></div>
        <span>
          <NavLink to="/basket"><img src={cart} alt="" /></NavLink>
        </span>
      </div>
    </nav>
  );
};
export default Navigation;
