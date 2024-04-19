import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import styles from "./home.module.css";
import { Button, Card, Row, Col } from "../BootstrapComps/bootstrapComps";
import { GiYarn } from "react-icons/gi";

export default function YarnList() {
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const filteredProducts = products.filter(
    (product) => product.yarnName === name
  );

  const handleClick = (productId) => {
    navigate("/yarn/details", { state: { id: productId } });
  };

  return (
    <div>
      <h1>{name}</h1>
      <Button variant="outline-warning" onClick={() => window.history.back()}>
        Back
      </Button>
      <div className={styles.wrapper}>
        {filteredProducts.map((product, index) => (
          <Card
            onClick={() => {
              handleClick(product.yarnID);
            }}
            className={`${styles.productCard} shadow mb-4 rounded`}
            key={index}
          >
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
                  <GiYarn
                    color={product.yarnColor}
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </Col>
                <Col>
                  <Card.Text>${product.yarnPrice}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
