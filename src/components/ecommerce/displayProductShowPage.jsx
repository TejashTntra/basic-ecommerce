import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { callHomePageApi } from "./common";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../actions";

const DisplayProductShowPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const handleCartClick = () => {
    dispatch(addToCart(product));
  };
  const handleWishlistClick = () => {
    dispatch(addToWishlist(product));
  };
  const params = useParams();
  useEffect(() => {
    callHomePageApi("show", setProduct, params.id);
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={product.image} fluid />
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title> {product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title> Price: ${product.price}</Card.Title>
                <Card.Text>
                  {" "}
                  Rating: {product?.rating?.rate}/{product?.rating?.count} votes
                </Card.Text>
                <Button onClick={handleCartClick} variant="primary">
                  Add to Cart
                </Button>
                <Button onClick={handleWishlistClick} variant="primary">
                  Add to Wishlist
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Button onClick={() => navigate(-1)} variant="primary">
        Go to Home Page
      </Button>
    </>
  );
};

export default DisplayProductShowPage;
