import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/e-commerce-listing")}>Lets Go</Button>
    </>
  );
};

export default Home;
