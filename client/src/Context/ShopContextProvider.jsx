import { createContext, useState } from "react";
import allProducts from "../components/Assets/all_product";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const [items, setItems] = useState(allProducts);

  const getProductsByCategory = (category) => {
    return items.filter((product) => product.yarnCategory === category);
  };

  return (
    <ShopContext.Provider value={{ items, getProductsByCategory }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;