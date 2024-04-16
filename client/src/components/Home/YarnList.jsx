import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function YarnList() {
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const filteredProducts = products.filter(
    (product) => product.yarnName === name
  );

  const handleClick = (productId) => {
    navigate("/yarn/item", { state: { id: productId } });
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>
        {filteredProducts.map((product, index) => (
          <div
            onClick={() => {
              handleClick(product.yarnID);
            }}
            className={`${styles.productCard} col-sm-4 p-0`}
            key={index}
          >
            <img className={styles.image} src="" alt="" />
            <section className={styles.namePriceSection}>
              <h4>{product.yarnName}</h4>
              <p>{product.yarnPrice}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
