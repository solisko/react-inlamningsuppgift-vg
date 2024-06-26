import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "../Home/home.module.css";
import CartItems from "./CartItems";
import Checkout from "../Cart/Checkout";
import { Button } from "../BootstrapComps/bootstrapComps";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { products, cartItems, fetchProducts } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const getSubtotal = () => {
    if (!products || products.length === 0) {
      return 0;
    }
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemDetails = products.find(
          (product) => product.yarnID === Number(item)
        );
        if (itemDetails) {
          totalAmount += cartItems[item] * itemDetails.yarnPrice;
        }
      }
    }
    return totalAmount;
  };

  return (
    <div>
      <h1>Your cart</h1>
      <Button variant="outline-warning" onClick={() => window.history.back()}>
        Back
      </Button>
      <div className={styles.wrapper}>
        {products.map((product, index) => {
          if (cartItems[product.yarnID] !== 0) {
            return <CartItems key={index} product={product} />;
          }
        })}
      </div>
      {getSubtotal() > 0 ? (
        <div>
          <h4>Subtotal: ${getSubtotal()}</h4>
          <Checkout />
          <Button
            variant="outline-warning"
            onClick={() => {
              navigate("/");
            }}
            style={{ marginLeft: "80px" }}
          >
            Continue shopping
          </Button>
        </div>
      ) : (
        <div className={styles.emptyWrapper}>
          <h2>Your cart is empty!</h2>
        </div>
      )}
    </div>
  );
}
