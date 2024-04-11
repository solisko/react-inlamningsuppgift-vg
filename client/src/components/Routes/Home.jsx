import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./home.module.css";

const Home = () => {
  const { getProductsByCategory } = useContext(ShopContext);

  const categories = ["cotton", "acrylic", "wool"];

  return (
    <>
      {categories.map((category, categoryIndex) => (
        <div className={styles.container} key={categoryIndex}>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <div
            className={`${styles.categoryWrapper} row flex-nowrap overflow-auto`}
          >
            {getProductsByCategory(category).map((product, index) => (
              <div className={`${styles.productCard} col-sm-4 p-0`} key={index}>
                <img className={styles.image} src="" alt="" />
                <section className={styles.namePriceSection}>
                  <h3>{product.yarnName}</h3>
                  <p>{product.yarnPrice}</p>
                </section>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
