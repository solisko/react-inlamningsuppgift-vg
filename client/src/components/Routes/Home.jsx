import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";

const Home = () => {
  const { getProductsByCategory } = useContext(ShopContext);

  const cottonProducts = getProductsByCategory("cotton");
  const acrylicProducts = getProductsByCategory("acrylic");

  return (
    <div>
      <div>
        <h1>Bomull</h1>
        {cottonProducts.map((product, index) => (
          <div key={index}>
            <p>{product.yarnName}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Akryl</h1>
        {acrylicProducts.map((product, index) => (
          <div key={index}>
            <p>{product.yarnName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
