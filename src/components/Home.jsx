import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="">HOME</div>
      <Link to="/gemini">
        <button>.</button>
      </Link>
    </div>
  );
};

export default Home;
