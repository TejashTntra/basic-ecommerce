import React, { useEffect, useState } from "react";
import { callHomePageApi } from "./common";
import CardList from "../CardList";

const DisplayProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callHomePageApi("listing", setProducts);
  }, []);
  return (
    <>
      <CardList products={products} />
    </>
  );
};

export default DisplayProductList;
