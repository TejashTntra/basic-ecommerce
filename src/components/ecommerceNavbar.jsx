import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const EcommerceNavbar = () => {
  const cart = useSelector((state) => state?.cart?.cart);
  const wishlist = useSelector((state) => state?.wishlist?.wishlist);
  console.log("🚀 ~ file: ecommerceNavbar.jsx:8 ~ EcommerceNavbar ~ wishlist:", wishlist)

  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/e-commerce-listing">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/e-commerce/cart">Cart 🛒{cart?.length}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/e-commerce/wishlist">
          Wishlist 💙 {wishlist?.length}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default EcommerceNavbar;
