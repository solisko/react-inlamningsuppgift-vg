import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation } from "react-router-dom";
import styles from "./itemdetails.module.css";

const Items = () => {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const location = useLocation();
  const product = products.filter((prod) => prod.yarnID === location.state.id)[0];

  const amountInCart = cartItems[product.yarnID];

  return (
    <div className={styles.itemWrapper}>
      <button onClick={() => window.history.back()}>Back to Home</button>
      <div className={styles.itemCard}>
        {product ? (
          <>
            <h2>{product.yarnName}</h2>
            <h5>{product.yarnCategory} </h5>
            <p>Färger:</p>
            <ul>
              {product.yarnColors.map((color, cIndex) => (
                <li key={cIndex}>{color}</li>
              ))}
            </ul>
            <p>Pris: {product.yarnPrice}</p>
            <section className="detailsSection">
              <table>
                <thead>
                  <tr>
                    <th>Detaljer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Vikt</strong>
                    </td>
                    <td>{product.yarnWeight}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Löplängd</strong>
                    </td>
                    <td>{product.yarnLength}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Viktgrupp</strong>
                    </td>
                    <td>{product.yarnGroup}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Rekomenderade nålar</strong>
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
export default Items;
