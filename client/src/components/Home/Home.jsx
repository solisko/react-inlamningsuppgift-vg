import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
import { Card } from "../BootstrapComps/bootstrapComps";
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
              <Card
                key={index}
                onClick={() => {
                  navigate("/yarn", { state: { name: product.yarnName } });
                }}
                className={`${styles.productCard} col-sm-4 p-0 shadow mb-5 rounded`}
              >
                <Card.Img
                  variant="top"
                  src=""
                  style={{
                    width: "100%",
                    height: "310px",
                    backgroundColor: "gray",
                  }}
                />

                <Card.Body className={styles.namePriceSection}>
                  <Card.Title>{product.yarnName}</Card.Title>
                  <span>Press to see color options</span>
                  <span>${product.yarnPrice}</span>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
