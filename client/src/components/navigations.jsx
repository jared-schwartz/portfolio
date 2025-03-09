import { Link } from "react-router-dom";

function Navigations() {
  return (
    <nav id="navbar">
      <h2>Jared Schwartz's Portfolio</h2>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
    </nav>
  );
}

export default Navigations;
