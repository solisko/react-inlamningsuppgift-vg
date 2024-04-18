import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";
import cart from "../Assets/cart.png";
import logo2 from "../Assets/logo2.png";
import logo1 from "../Assets/logo1.png";
import Search from "../Search/Search";

import { Button } from "../BootstrapComps/bootstrapComps";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";
import Logout from "../Login/Logout";

const Navigation = () => {
  const { cartItems, loggedIn, setLoggedIn } = useContext(ShopContext);

  const cartCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <nav className={styles.navBar}>
      <div className={styles.siteLogoDiv}>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <h1>YarnHub</h1>
          <img className={styles.logo} src={logo2} alt="" />
        </NavLink>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.searchLoginDiv}>
          <Search />
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button>Log in</Button>
          </NavLink>
          <Logout/>
        </div>
        <div className={styles.cartDiv}>
          <NavLink style={{ textDecoration: "none" }} to="/cart">
            <img src={cart} alt="" />
            <div className={styles.counter}>{cartCount}</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
