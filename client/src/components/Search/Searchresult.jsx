import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Home/home.module.css";
import { Button, Card, Row, Col } from "../BootstrapComps/bootstrapComps";

export default function Searchresult() {
  const { products, addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { searchTerm } = location.state;
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(
        (product) =>
          product.yarnName
            .toLowerCase()
            .trim()
            .includes(searchTerm.trim().toLowerCase()) ||
          product.yarnCategory
            .toLowerCase()
            .trim()
            .includes(searchTerm.trim().toLowerCase()) ||
          product.yarnColor
            .toLowerCase()
            .trim()
            .includes(searchTerm.trim().toLowerCase())
      );
      setSearchResult(filtered);
    }
  }, [searchTerm, products]);

  const handleClick = (productId) => {
    navigate("/yarn/details", { state: { id: productId } });
  };

  return (
    <div className={styles.mainCont}>
      <h1>Search Result</h1>
      <Button variant="outline-warning" onClick={() => window.history.back()}>
        Back
      </Button>
      <div className={styles.wrapper}>
        {searchResult.length ? (
          searchResult.map((product, index) => (
            <Card
              onClick={() => {
                handleClick(product.yarnID);
              }}
              className={styles.productCard}
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
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: product.yarnColor,
                        borderRadius: "50%",
                        border: "1px solid black",
                        marginLeft: "20px",
                      }}
                    ></div>
                  </Col>
                  <Col>
                    <Card.Text>${product.yarnPrice}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No products were found.</p>
        )}
      </div>
    </div>
  );
}
