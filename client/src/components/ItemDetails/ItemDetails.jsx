import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
} from "../BootstrapComps/bootstrapComps";

const ItemDetails = () => {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();
  const product = products.filter(
    (prod) => prod.yarnID === location.state.id
  )[0];

  const amountInCart = cartItems[product.yarnID];
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <h1>Yarn Details</h1>
        </Col>
      </Row>
      <Row>
        <Row className="mb-4">
          <Col>
            <Button
              variant="outline-warning"
              onClick={() => window.history.back()}
            >
              Back
            </Button>
          </Col>
        </Row>
        <Col>
          <Card
            style={{ backgroundColor: "var(--pale-color)" }}
            className="shadow w-100"
          >
            <Card.Body>
              {product ? (
                <>
                  <Row>
                    <Col md={6}>
                      <Card.Title>{product.yarnName}</Card.Title>
                      <Card.Text>
                        <strong>Fiber</strong>{" "}
                        {product.yarnCategory.charAt(0).toUpperCase() +
                          product.yarnCategory.slice(1).toLowerCase()}
                      </Card.Text>
                      <Card.Text>
                        <strong>Color</strong> {product.yarnColor}
                      </Card.Text>
                      <Card.Text>
                        <strong>Price</strong> ${product.yarnPrice}
                      </Card.Text>
                      <Card.Text>
                        <strong>Weight</strong> {product.yarnWeight}
                      </Card.Text>
                      <Card.Text>
                        <strong>Length</strong> {product.yarnLength}
                      </Card.Text>
                      <Card.Text>
                        <strong>Group</strong> {product.yarnGroup}
                      </Card.Text>
                      <Card.Text>
                        <strong>Recomended needles</strong>{" "}
                        {product.yarnNeedles}
                      </Card.Text>
                    </Col>
                    <Col md={6}>
                      <div
                        style={{
                          width: "300px",
                          height: "300px",
                          backgroundColor: product.yarnColor,
                          borderRadius: "50%",
                          border: "1px solid var(--boot-color)",
                        }}
                      ></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        variant="warning"
                        onClick={() => addToCart(product.yarnID)}
                      >
                        Add to cart {amountInCart > 0 && <>({amountInCart})</>}
                      </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Button variant="outline-warning" onClick={goToCart}>
                        Go to cart
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <h2>Product not found</h2>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ItemDetails;
