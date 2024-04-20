import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const emptyCart = () => {
  let cart = {};
  for (let i = 1; i < 100 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : emptyCart();
  });

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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (yarnId) => {
    setCartItems((prev) => ({ ...prev, [yarnId]: prev[yarnId] + 1 }));
  };

  const removeFromCart = (yarnId) => {
    setCartItems((prev) => ({ ...prev, [yarnId]: prev[yarnId] - 1 }));
  };

  const getCartItemsArray = () => {
    return Object.keys(cartItems).reduce((array, currentValue) => {
      for (let i = 0; i < cartItems[currentValue]; i++) {
        array.push(currentValue);
      }
      return array;
    }, []);
  };

  const clearCart = () => {
    setCartItems(emptyCart());
    localStorage.removeItem("cartItems");
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("loggedIn", true);
        setLoggedIn(true);
        console.log("Logged in successfully!", data);
      } else {
        const errorMessage = await response.json();
        if (errorMessage.error === "Invalid username.") {
          alert("Invalid username. Please try again.");
        } else if (errorMessage.error === "Incorrect password.") {
          alert("Incorrect password. Please try again.");
        } else {
          throw new Error("Failed to login.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.removeItem("loggedIn");
        setLoggedIn(false);
        console.log("Logged out successfully!", data);
      } else {
        throw new Error("Failed to logout.");
      }
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
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
        categories,
        cartItems,
        addToCart,
        removeFromCart,
        getCartItemsArray,
        clearCart,
        setCartItems,
        handleLogout,
        handleLogin,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
