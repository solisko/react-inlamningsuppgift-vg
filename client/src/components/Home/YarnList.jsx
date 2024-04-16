import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";

export default function YarnList({ category }) {
  const { getProductsByCategory } = useContext(ShopContext);

  return (
    <div>
        {getProductsByCategory(category).map((product, index) => (
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
  );
}
