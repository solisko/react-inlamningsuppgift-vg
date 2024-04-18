import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";

const Home = () => {
  const { products, categories } = useContext(ShopContext);
  const navigate = useNavigate();

  const groupYarnByName = (category) => {
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
            {groupYarnByName(category).map((product, index) => (
              <div
                onClick={() =>
                  navigate("/yarn", { state: { name: product.yarnName } })
                }
                className={`${styles.productCard} col-sm-4 p-0`}
                key={index}
              >
                <img className={styles.image} src="" alt="" />
                <section className={styles.namePriceSection}>
                  <h4>{product.yarnName}</h4>
                  <span>Press to see color options</span>
                  <span>${product.yarnPrice}</span>
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
