import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
