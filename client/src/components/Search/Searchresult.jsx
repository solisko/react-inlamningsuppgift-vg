import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";

export default function SearchResult() {
  const { products } = useContext(ShopContext);

  const handleClick = (productId) => {
    navigate("/yarn/item", { state: { id: productId } });
  };

  return (
    <div>
      <h2>Search Result</h2>
      <div>
        {products.lenght ? (
          products.map((product) => (
            <div
              onClick={() => {
                handleClick(product.yarnID);
              }}
              className={`${styles.productCard} col-sm-4 p-0`}
              key={index}
            >
              <img className={styles.image} src="" alt="" />
              <section className={styles.namePriceSection}>
                <h4>{product.yarnName}</h4>
                <p>{product.yarnPrice}</p>
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
