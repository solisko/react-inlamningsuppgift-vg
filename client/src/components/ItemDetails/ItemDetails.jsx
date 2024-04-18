import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./itemdetails.module.css";

const ItemDetails = () => {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const location = useLocation();
  const product = products.filter(
    (prod) => prod.yarnID === location.state.id
  )[0];

  const amountInCart = cartItems[product.yarnID];
  const cartItemIDs = Object.keys(cartItems);
  console.log(cartItemIDs)

  return (
    <div className={styles.itemWrapper}>
      <button onClick={() => window.history.back()}>Back</button>
      <h1>Yarn Details</h1>
      <div className={styles.itemCard}>
        {product ? (
          <>
            <section className={styles.nameBtnSection}>
              <h2>{product.yarnName}</h2>
              <button>Go to cart</button>
            </section>
            <h5>
              {product.yarnCategory.charAt(0).toUpperCase() +
                product.yarnCategory.slice(1).toLowerCase()}
            </h5>
            <p>{product.yarnColor}</p>
            <p>Price: ${product.yarnPrice}</p>
            <section className="detailsSection">
              <table>
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
            <Button
              // style={{ backgroundColor: "#149403", borderColor: "#149403" }}
              onClick={() => addToCart(product.yarnID)}
            >
              Add to cart {amountInCart > 0 && <>({amountInCart})</>}
            </Button>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
};
export default ItemDetails;
