import { createContext, useState } from "react";
import allProducts from "../components/Assets/all_product";

export const ShopContext = createContext();

const emptyCart = () => {
  let cart = {};
  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopProvider = (props) => {
  const [items, setItems] = useState(allProducts);
  const [cartItems, setCartItems] = useState(emptyCart());

  const addToCart = (yarnId) => {
    setCartItems((prev) => ({ ...prev, [yarnId]: prev[yarnId] + 1 }));
  };

  const removeFromCart = (yarnId) => {
    setCartItems((prev) => ({ ...prev, [yarnId]: prev[yarnId] - 1 }));
  };

  const getProductsByCategory = (category) => {
    return items.filter((product) => product.yarnCategory === category);
  };

  return (
    <ShopContext.Provider
      value={{
        items,
        getProductsByCategory,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
