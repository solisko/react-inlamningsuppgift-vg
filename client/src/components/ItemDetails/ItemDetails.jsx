import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Table,
} from "../BootstrapComps/bootstrapComps";

const ItemDetails = () => {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const productId = location.state ? location.state.id : null;
  
  const product = productId ? products.filter(prod => prod.yarnID === productId)[0] : null;

  const amountInCart = product ? cartItems[product.yarnID] : 0;

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
        <Col xs={12} md={8} lg={8} className="mx-auto">
          <Card
            style={{ backgroundColor: "var(--pale-color)" }}
            className="shadow w-100"
          >
            <Card.Body>
              {product ? (
                <>
                  <Row>
                    <Card.Title style={{ fontSize: "28px" }}>
                      <strong>{product.yarnName}</strong>
                    </Card.Title>
                    <Col md={6}>
                      <Table striped bordered>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Fiber</strong>
                            </td>
                            <td>
                              {product.yarnCategory.charAt(0).toUpperCase() +
                                product.yarnCategory.slice(1).toLowerCase()}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Color</strong>
                            </td>
                            <td>{product.yarnColor}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Price</strong>
                            </td>
                            <td>${product.yarnPrice}</td>
                          </tr>
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
                              <strong>Recomended needles</strong>
                            </td>
                            <td>{product.yarnNeedles}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                      <div
                        style={{
                          width: "280px",
                          height: "280px",
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
