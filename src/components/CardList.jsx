import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardList = ({ products }) => {
  const navigate = useNavigate();

  const trimString = (string, stringLength) => {
    return string.substring(0, stringLength);
  };

  return (
    <>
      {products.map((product) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {product.category}
            </Card.Subtitle>

            <Card.Text>{trimString(product.description, 70)}</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Card.Title> Price: {product.price}</Card.Title>
              </ListGroup.Item>
              <ListGroup.Item>Rating: {product.rating.rate}</ListGroup.Item>
              <ListGroup.Item>Count: {product.rating.count}</ListGroup.Item>
            </ListGroup>

            <Button
              onClick={() =>
                navigate(`/e-commerce-listing/products/${product.id}`)
              }
              variant="primary"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardList;
