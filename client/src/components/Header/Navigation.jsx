import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";
import cart from "../Assets/cart.png";
import logo4 from "../Assets/logo4.png";
import Search from "../Search/Search";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";
import { Button } from "../BootstrapComps/bootstrapComps";

const Navigation = () => {
  const { cartItems, loggedIn, handleLogout } = useContext(ShopContext);

  const cartCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <nav className={styles.navBar}>
      <div className={styles.siteLogoDiv}>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <img
            className={styles.logo}
            src={logo4}
            alt=""
            style={{ width: "400px", margin: "auto" }}
          />
        </NavLink>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.searchDiv}>
          <Search />
        </div>
        <div className={styles.loginCartDiv}>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button variant="warning">Log in</Button>
          </NavLink>
          <div className={styles.cartDiv}>
            <NavLink style={{ textDecoration: "none" }} to="/cart">
              <img src={cart} alt="" />
              <div className={styles.counter}>{cartCount}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// <Navbar className={`${styles.navBar} shadow-sm`}>
//   <Container>
//     <NavLink
//       to="/"
//       style={{ textDecoration: "none" }}
//       className={styles.siteLogoDiv}
//     >
//       <Navbar.Brand className={styles.siteLogoDiv}>
//         <img src={logo4} alt="" style={{ width: "300px" }} />
//       </Navbar.Brand>
//     </NavLink>

//     <Search />
//     <Nav className={styles.searchLoginDiv}>
//       {loggedIn ? (
//         <Button onClick={handleLogout}>Log out</Button>
//       ) : (
//         <NavLink to="/login" style={{ textDecoration: "none" }}>
//           <Button variant="warning">Log in</Button>
//         </NavLink>
//       )}
//       <div className={styles.cartDiv}>
//         <NavLink to="/cart" style={{ textDecoration: "none" }}>
//           <img src={cart} alt="" />
//           <div className={styles.counter}>{cartCount}</div>
//         </NavLink>
//       </div>
//     </Nav>
//   </Container>
// </Navbar>
//   );
// };
export default Navigation;
