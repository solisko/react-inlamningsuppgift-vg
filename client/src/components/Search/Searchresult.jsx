import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Home/home.module.css";

export default function Searchresult() {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { searchTerm } = location.state;
  const [searchResult, setSearchResult] = useState([]);

  // const amountInCart = cartItems[product.yarnID];

  console.log(searchTerm);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(
        (product) =>
          product.yarnName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.yarnCategory
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.yarnColor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(filtered);
    }
  }, [searchTerm, products]);

  const handleClick = (productId) => {
    navigate("/yarn/item", { state: { id: productId } });
  };

  return (
    <div className={styles.mainCont}>
      <h2>Search Result</h2>
      <div className={styles.wrapper}>
        {searchResult.length ? (
          searchResult.map((product, index) => (
            <div
              onClick={() => {
                handleClick(product.yarnID);
              }}
              className={styles.productCard}
              key={index}
            >
              <img className={styles.image} src="" alt="" />
              <section className={styles.namePriceSection}>
                <h4>{product.yarnName}</h4>
                <h5>{product.yarnColor}</h5>
                <p>${product.yarnPrice}</p>
                <button onClick={() => addToCart(product.yarnID)}>
                  Add to cart{" "}
                  {cartItems[product.yarnID] > 0 && (
                    <>({cartItems[product.yarnID]})</>
                  )}
                </button>
              </section>
            </div>
          ))
        ) : (
          <p>No products were found.</p>
        )}
      </div>
    </div>
  );
}
