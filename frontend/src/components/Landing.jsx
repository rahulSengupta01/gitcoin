import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./navbar.jsx";
import "./Landing.css"; // Importing the CSS file

const Landing = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="landing-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <h1>"Empowering Freelancers, Redefining <br /> Work—"</h1>
        <p>Welcome to the Future <br />of Web3 Freelancing. 🚀</p>
        <div className="buttons">
          <button className="find-work" onClick={() => navigate("/find-work")}>
            Find Work
          </button>
          <button className="hire-talent" onClick={() => navigate("/hirework")}>
            Hire Talent
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="main-content">
        {/* Features Section */}
        <div className="features">
          <div className="feature-item">
            <h3>Decentralized & Transparent</h3>
            <p>No hidden fees, no corporate control.</p>
          </div>
          <div className="feature-item">
            <h3>Instant & Secure Payments</h3>
            <p>Crypto-based escrow ensures fair transactions.</p>
          </div>
          <div className="feature-item">
            <h3>Merit-Based System</h3>
            <p>Skills & performance determine ranking, not platform bias.</p>
          </div>
          <div className="feature-item">
            <h3>Global Access</h3>
            <p>Work from anywhere, hire from anywhere.</p>
          </div>
        </div>

        {/* Profile & Payment Section */}
        <div className="payment-section">
          {/* Freelancer Profile */}
          <div className="profile-card">
            <h4>Rahul</h4>
            <p className="email">rahulsengupta001@...</p>
            <div className="invoice">
              <p>Invoice</p>
              <h2>$2,17,000/-</h2>
              <p>08th FEB, 2025</p>
            </div>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" />
                Credit Card
              </label>
              <label>
                <input type="radio" name="payment" />
                Bank Account
              </label>
            </div>
            <button className="pay-button">Pay</button>
          </div>

          {/* Credit Card Display */}
          <div className="credit-card">
            <p>Credit Card</p>
            <h2>2100 **** ****</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
