import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import DisplayProductList from "./components/ecommerce/displayProductListing";
import DisplayProductShowPage from "./components/ecommerce/displayProductShowPage";
import EcommerceNavbar from "./components/ecommerceNavbar";
import CartListing from "./components/ecommerce/cartListing";
import WishlistListing from "./components/ecommerce/wishlistListing";

function App() {
  return (
    <>
      <EcommerceNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-commerce-listing" element={<DisplayProductList />} />
          <Route
            path="/e-commerce-listing/products/:id"
            element={<DisplayProductShowPage />}
          />
          <Route path="/e-commerce/cart" element={<CartListing />} />
          <Route path="/e-commerce/wishlist" element={<WishlistListing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
