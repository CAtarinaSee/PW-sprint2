import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ex1">TodoApp</Link>
        </li>
        <li>
          <Link to="/ex2">TodoAppLocalStorage</Link>
        </li>
        <li>
          <Link to="/ex3">TodoAppContador</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
