import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/react.svg";

const Navbar = () => {
  const navigate = useNavigate();

  // Dropdown state management
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle the dropdown on click
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Dropdown items for each section
  const dropdownItems = {
    Product: ["Task Management", "Smart Contracts", "Platform Integrations"],
    Customer: ["Customer Support", "User Guides", "Community Forum"],
    Pricing: ["Free Tier", "Pro Subscription", "Enterprise"],
    Learn: ["Documentation", "Blog", "Webinars"],
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Gitcoin Logo" className="logo" />
        <span className="site-name">Gitcoin</span>
      </div>

      <ul className="nav-links">
        {Object.keys(dropdownItems).map((item, index) => (
          <li key={index} className="nav-item">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown(index)}
            >
              {item} <FaChevronDown className={`dropdown-icon ${activeDropdown === index ? "rotate" : ""}`} />
            </div>
            {activeDropdown === index && (
              <ul className="dropdown-menu">
                {dropdownItems[item].map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-buttons">
        <button className="task-button" onClick={() => navigate("/create-task")}>
          Create a Task
        </button>
        <button className="signup-button" onClick={() => navigate("/login")}>
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
