import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/buyer-choice">Buyer Choice</Link>
    </div>
  );
};

export default Home;
