import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";

const Home = () => {
  const { getProductsByCategory } = useContext(ShopContext);

  const categories = ["cotton", "acrylic", "wool"];

  return (
    <>
      {categories.map((category, categoryIndex) => (
        <div className={styles.container} key={categoryIndex}>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <div className={styles.categoryWrapper}>
            {getProductsByCategory(category).map((product, index) => (
              <div className={styles.productCard} key={index}>
                <img className={styles.image} src="" alt="" />
                <section className={styles.namePriceSection} >
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
