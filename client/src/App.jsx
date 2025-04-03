import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigations";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

