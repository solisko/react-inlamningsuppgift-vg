import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./cart.module.css";
import CartItems from "../CartItems/CartItems"

export default function Cart() {
  const { items, cartItems } = useContext(ShopContext);

  return (
    <div className={styles.cartWrapper}>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className={styles.cartItems}>
        {items.map((product, index)=>{
          if (cartItems[product.yarnID] !== 0){
            return <CartItems key={index} product={product} />
          }
        })}
      </div>
    </div>
  );
}
