import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Gemini from "./components/GEMINI/Gemini";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gemini" element={<Gemini />} />
    </Routes>
  );
};

export default App;
