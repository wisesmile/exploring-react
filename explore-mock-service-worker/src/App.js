import React from "react";
import Routes from "./routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/user">User</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
