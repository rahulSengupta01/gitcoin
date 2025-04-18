import React from "react";
import "../../styles/HowItWork.css"; // Import the CSS file
import { FaSearch, FaUserCheck, FaMoneyCheckAlt, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="step-icon" />,
      title: "Find the Right Gig",
      description: "Browse through trending gigs and select the best fit for your needs.",
    },
    {
      icon: <FaUserCheck className="step-icon" />,
      title: "Hire or Get Hired",
      description: "Connect with freelancers or clients and initiate collaboration.",
    },
    {
      icon: <FaMoneyCheckAlt className="step-icon" />,
      title: "Secure Payments",
      description: "Payments are securely handled through an escrow system.",
    },
    {
      icon: <FaRocket className="step-icon" />,
      title: "Get the Work Done",
      description: "Work efficiently and deliver high-quality projects on time.",
    },
  ];

  return (
    <div className="how-it-works-container">
      <h2 className="section-title">🚀 How It Works</h2>
      <p className="section-subtitle">A simple process to connect freelancers and clients effortlessly.</p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            {step.icon}
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
