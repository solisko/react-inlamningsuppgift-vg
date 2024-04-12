import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../CartItems/cartitems.module.css";

export default function CartItems({ product }) {
  return (
    <div className={`${styles.productCard} col-sm-4 p-0`}>
      <img className={styles.image} src="" alt="" />
      <section className={styles.namePriceSection}>
        <h3>{product.yarnName}</h3>
        <p>{product.yarnPrice}</p>
      </section>
    </div>
  );
}
