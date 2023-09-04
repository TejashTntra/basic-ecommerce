import React from "react";
import CardList from "../CardList";
import { useSelector } from "react-redux";

const CartListing = () => {
  const cart = useSelector((state) => state?.cart?.cart);
  return (
    <>
      <CardList products={cart} />
    </>
  );
};

export default CartListing;
