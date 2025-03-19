import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Navbar.css";
import logo from "../assets/react.svg";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const Navbar = () => {
  const navigate = useNavigate();  // Create navigate function

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Gitcoin Logo" className="logo" />
        <span className="site-name">Gitcoin</span>
      </div>

      <ul className="nav-links">
        {["Product", "Customer", "Pricing", "Learn"].map((item, index) => (
          <li key={index} className="nav-item">
            {item} <FaChevronDown className="dropdown-icon" />
          </li>
        ))}
      </ul>

      <div className="nav-buttons">
        {/* Navigate to CreateTask page */}
        <button className="task-button" onClick={() => navigate("/create-task")}>
          Create a Task
        </button>

        {/* Navigate to Login/Signup page */}
        <button className="signup-button" onClick={() => navigate("/login")}>
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
