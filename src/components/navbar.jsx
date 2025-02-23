import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/react.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo & Name */}
      <div className="navbar-left">
        <img src={logo} alt="Gitcoin Logo" className="logo" />
        <span className="site-name">Gitcoin</span>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="nav-links">
        {[
          "Product",
          "Customer",
          "Pricing",
          "Learn",
        ].map((item, index) => (
          <li key={index} className="nav-item">
            {item} <FaChevronDown className="dropdown-icon" />
          </li>
        ))}
      </ul>

      {/* Right: Buttons */}
      <div className="nav-buttons">
        <button className="task-button">Create a Task</button>
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
