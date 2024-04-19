import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";
import cart from "../Assets/cart.png";
import logo2 from "../Assets/logo2.png";
import logo1 from "../Assets/logo1.png";
import Search from "../Search/Search";
import {
  Button,
  Navbar,
  Nav,
  Container,
} from "../BootstrapComps/bootstrapComps";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";

const Navigation = () => {
  const { cartItems, loggedIn, setLoggedIn, handleLogout } =
    useContext(ShopContext);

  const cartCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <Navbar className={`${styles.navBar} shadow-sm`}>
      <Container>
        <NavLink to="/" className={styles.siteLogoDiv}>
          <Navbar.Brand className={styles.siteLogoDiv}>
            <h1>YarnHub</h1>
          </Navbar.Brand>
        </NavLink>
        <Nav className={styles.searchLoginDiv}>
          <Search />
          {loggedIn ? (
            <Button onClick={handleLogout}>Log out</Button>
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button variant="warning">Log in</Button>
            </NavLink>
          )}
          <div className={styles.cartDiv}>
            <NavLink to="/cart" style={{ textDecoration: "none" }}>
              <img src={cart} alt="" />
              <div className={styles.counter}>{cartCount}</div>
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
