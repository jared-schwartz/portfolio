import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <nav id="navbar">
      <h2>Jared Schwartz's Portfolio</h2>
        <div id="links">
          <Link to="/">About Me</Link>
          <Link to="/projects">Projects</Link>
        </div>
    </nav>
  );
}

export default Navigations;
