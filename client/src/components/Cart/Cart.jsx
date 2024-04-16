import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./cart.module.css";
import CartItems from "../CartItems/CartItems";

export default function Cart() {
  const { products, cartItems } = useContext(ShopContext);

  const getSubtotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemDetails = products.find(
          (product) => product.yarnID === Number(item)
        );
        totalAmount += cartItems[item] * itemDetails.yarnPrice;
      }
    }
    return totalAmount;
  };

  return (
    <div className={styles.cartWrapper}>
      <button onClick={() => window.history.back()}>Back</button>
      <div>
        <h1>Your cart</h1>
      </div>
      <div className={styles.cartItems}>
        {products.map((product, index) => {
          if (cartItems[product.yarnID] !== 0) {
            return <CartItems key={index} product={product} />;
          }
        })}
      </div>
      {getSubtotal() > 0 ? (
        <div>
          <p>Subtotal: ${getSubtotal()}</p>
          <button>Continue shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
}
