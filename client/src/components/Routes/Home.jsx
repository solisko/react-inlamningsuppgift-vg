import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";

const Home = () => {
  const { getProductsByCategory } = useContext(ShopContext);
  const navigate = useNavigate();
  const categories = ["cotton", "acrylic", "wool"];

  const handleClick = (productId) => {
    navigate("/item", { state: { id: productId } });
  };

  return (
    <>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <div
            className={`${styles.categoryWrapper} row flex-nowrap overflow-auto`}
          >
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
