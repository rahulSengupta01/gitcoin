import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/react.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Check if current page is home
  const isHomePage = location.pathname === "/";

  // const dropdownItems = {
  //   Resources: [
  //     { name: "Documentation", path: "/docs" },
  //     { name: "Blog", path: "/blog" },
  //     { name: "Tutorials", path: "/tutorials" },
  //   ],
  //   Developers: [
  //     { name: "API Reference", path: "/developers/api" },
  //     { name: "SDKs", path: "/developers/sdks" },
  //     { name: "Open Source", path: "/developers/open-source" },
  //   ],
  // };

  // Static items always shown on home page
  const staticNavItems = [
    { name: "About", path: "/about" },
    { name: "Explore", path: "/explore" },
    { name: "Contact", path: "/contact" },
  ];

  // Home link shown only if NOT on home page
  const conditionalHomeLink = !isHomePage ? [{ name: "Home", path: "/" }] : [];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Gitcoin Logo" className="logo" />
        <span className="site-name">Gitcoin</span>
      </div>

      <ul className="nav-links">
        {/* Conditional Home link */}
        {conditionalHomeLink.map((item, index) => (
          <li key={index} className="nav-item" onClick={() => navigate(item.path)}>
            {item.name}
          </li>
        ))}

        {/* Static links (About, Contact...) */}
        {staticNavItems.map((item, index) => (
          <li key={index} className="nav-item" onClick={() => navigate(item.path)}>
            {item.name}
          </li>
        ))}

        {/* Dropdown menus */}
        {/* {Object.keys(dropdownItems).map((item, index) => (
          <li key={index + 10} className="nav-item">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown(index)}
            >
              {item}{" "}
              <FaChevronDown
                className={`dropdown-icon ${
                  activeDropdown === index ? "rotate" : ""
                }`}
              />
            </div>
            {activeDropdown === index && (
              <ul className="dropdown-menu">
                {dropdownItems[item].map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="dropdown-item"
                    onClick={() => navigate(subItem.path)}
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))} */}
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
