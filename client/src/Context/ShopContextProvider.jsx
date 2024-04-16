import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const emptyCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(emptyCart());

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setProducts(data);
      const category = [
        ...new Set(data.map((product) => product.yarnCategory)),
      ];
      setCategories(category);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (yarnId) => {
    setCartItems((prev) => ({ ...prev, [yarnId]: prev[yarnId] + 1 }));
  };

  const removeFromCart = (yarnId) => {
    setCartItems((prev) => ({ ...prev, [yarnId]: prev[yarnId] - 1 }));
  };

  const getYarnsByCategory = (category) => {
    return products.filter((product) => product.yarnCategory === category);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        products,
        fetchProducts,
        getYarnsByCategory,
        categories,
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
