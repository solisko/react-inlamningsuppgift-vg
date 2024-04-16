import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";
// import YarnList from "./YarnList";

const Home = () => {
  const { products, categories, getYarnsByCategory } = useContext(ShopContext);

  const getYarnByName = (category) => {
    const yarnNames = {};
    products.forEach((product) => {
      if (product.yarnCategory === category && !yarnNames[product.yarnName]) {
        yarnNames[product.yarnName] = product;
      }
    });
    return Object.values(yarnNames);
  };

  return (
    <>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <div
            className={`${styles.categoryWrapper} row flex-nowrap overflow-auto`}
          >
            {getYarnByName(category).map((product, index) => (
              <div
                onClick={() => {
                  handleClick(product.yarnName);
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
      ))}
    </>
  );
};

export default Home;
