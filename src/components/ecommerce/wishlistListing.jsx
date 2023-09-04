import React from "react";
import CardList from "../CardList";
import { useSelector } from "react-redux";

const WishlistListing = () => {
  const wishlist = useSelector((state) => state?.wishlist?.wishlist);
  return (
    <>
      <CardList products={wishlist} />
    </>
  );
};

export default WishlistListing;
