import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation } from "react-router-dom";
import styles from "./itemdetails.module.css";

const ItemDetails = () => {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const location = useLocation();
  const product = products.filter(
    (prod) => prod.yarnID === location.state.id
  )[0];

  const amountInCart = cartItems[product.yarnID];

  return (
    <div className={styles.itemWrapper}>
      <button onClick={() => window.history.back()}>Back</button>
      <h1>Yarn Details</h1>
      <div className={styles.itemCard}>
        {product ? (
          <>
            <h2>{product.yarnName}</h2>
            <h5>{product.yarnCategory} </h5>
            <p>{product.yarnColor}</p>
            <p>Price: ${product.yarnPrice}</p>
            <section className="detailsSection">
              <table>
                <thead>
                  <tr>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Weight</strong>
                    </td>
                    <td>{product.yarnWeight}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Length</strong>
                    </td>
                    <td>{product.yarnLength}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Group</strong>
                    </td>
                    <td>{product.yarnGroup}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Recommended needles</strong>
                    </td>
                    <td>{product.yarnNeedles}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <button onClick={() => addToCart(product.yarnID)}>
              Add to cart {amountInCart > 0 && <>({amountInCart})</>}
            </button>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
};
export default ItemDetails;
