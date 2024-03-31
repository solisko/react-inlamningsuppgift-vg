import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const [items, setItems] = useState([]);

  return (
    <ShopContext.Provider value={{ items }}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopProvider;
