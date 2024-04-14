import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "../CartItems/cartitems.module.css";

export default function CartItems({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className={`${styles.productCard} col-sm-4 p-0`}>
      <img className={styles.image} src="" alt="" />
      <section className={styles.namePriceSection}>
        <h3>{product.yarnName}</h3>
        <p>{product.yarnPrice}</p>
      </section>
      <div>
        <button onClick={() => removeFromCart(product.yarnID)}>-</button>
        <input type="text" value={cartItems[product.yarnID]} />
        <button onClick={() => addToCart(product.yarnID)}>+</button>
      </div>
    </div>
  );
}
