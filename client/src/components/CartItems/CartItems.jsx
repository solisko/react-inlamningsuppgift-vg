import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "../Home/home.module.css";

export default function CartItems({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className={styles.productCard}>
      <img className={styles.image} src="" alt="" />
      <section className={styles.namePriceSection}>
        <h3>{product.yarnName}</h3>
        <p>${product.yarnPrice}</p>
        <button onClick={() => removeFromCart(product.yarnID)}>-</button>
        <span>{cartItems[product.yarnID]}</span>
        <button onClick={() => addToCart(product.yarnID)}>+</button>
      </section>
    </div>
  );
}
