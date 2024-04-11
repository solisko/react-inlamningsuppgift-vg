import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";

const Home = () => {
  const { getProductsByCategory } = useContext(ShopContext);

  const cottonProducts = getProductsByCategory("cotton");
  const acrylicProducts = getProductsByCategory("acrylic");

  return (
    <div>
      <h1>Bomull</h1>
      <div className={styles.categoryWrapper}>
        {cottonProducts.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <img className={styles.image} src="" alt="" />
            <h3>{product.yarnName}</h3>
            <p>{product.yarnPrice}</p>
          </div>
        ))}
      </div>
      <h1>Akryl</h1>
      <div className={styles.categoryWrapper}>
        {acrylicProducts.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <img className={styles.image} src="" alt="" />
            <h3>{product.yarnName}</h3>
            <p>{product.yarnPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
