import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "../Home/home.module.css";
import { Card, Button, Row, Col } from "../BootstrapComps/bootstrapComps";

export default function CartItems({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <Card className={`${styles.productCardCart} shadow mb-4 rounded`}>
      <Card.Img
        variant="top"
        src=""
        style={{
          width: "100%",
          height: "310px",
          backgroundColor: "gray",
        }}
      />
      <Card.Body className={styles.namePriceSection}>
        <Card.Title>{product.yarnName}</Card.Title>
        <Row>
          <Col>
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: product.yarnColor,
                borderRadius: "50%",
                border: "1px solid black",
                marginLeft: "20px"
              }}
            ></div>
          </Col>

          <Col>
            <Card.Text>${product.yarnPrice}</Card.Text>
          </Col>
        </Row>
        <Button variant="light" onClick={() => removeFromCart(product.yarnID)}>
          -
        </Button>
        <span>{cartItems[product.yarnID]}</span>
        <Button variant="light" onClick={() => addToCart(product.yarnID)}>
          +
        </Button>
      </Card.Body>
    </Card>
  );
}
