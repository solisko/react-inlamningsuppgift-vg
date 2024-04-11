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
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <button>
            <NavLink style={{ textDecoration: "none" }} to="/create">
              Create Account
            </NavLink>
          </button>
        </li>
        <li>
          <button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              Log in
            </NavLink>
          </button>
        </li>
      </ul>
      <div className={styles.cartDiv}>
        <NavLink style={{ textDecoration: "none" }} to="/cart">
          <img src={cart} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;
