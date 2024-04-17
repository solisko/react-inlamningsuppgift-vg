import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";
import cart from "../Assets/cart.png";
import Search from "../Search/Search";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";

const Navigation = () => {
    const { cartItems } = useContext(ShopContext);

    const cartCount = Object.values(cartItems).reduce(
        (total, count) => total + count,
        0
    );

    return (
        <nav className={styles.navBar}>
            <div className={styles.siteLogoDiv}>
                <h1>
                    <NavLink style={{ textDecoration: "none" }} to="/">
                        YarnHub
                    </NavLink>
                </h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.searchLoginDiv}>
                    <Search />
                    <button>
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                            Log in
                        </NavLink>
                    </button>
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
