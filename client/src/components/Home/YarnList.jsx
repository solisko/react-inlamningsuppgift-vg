import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function YarnList() {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const filteredProducts = products.filter(
    (product) => product.yarnName === name
  );

  const handleClick = (productId) => {
    navigate("/yarn/details", { state: { id: productId } });
  };

  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.wrapper}>
        {filteredProducts.map((product, index) => (
          <div
            onClick={() => {
              handleClick(product.yarnID);
            }}
            className={styles.productCard}
            key={index}
          >
            <img className={styles.image} src="" alt="" />
            <section className={styles.namePriceSection}>
              <h4>{product.yarnName}</h4>
              <h5>{product.yarnColor}</h5>
              <p>${product.yarnPrice}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
