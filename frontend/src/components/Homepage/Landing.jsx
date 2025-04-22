import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./Landing.css";
import DashboardSection from "./DashboardSection";
import JoinWaitlistSection from "./JoinWaitlistSection";
import TrendingGigs from "./TrendingGigs";
import HowItWorks from "./HowItWorks";
import Footer from "../Footer/Footer";

// Add image imports
import img1 from "../../assets/53933.jpg";
import img2 from "../../assets/50720.jpg";
import img3 from "../../assets/52233.jpg";

const Landing = () => {
  const navigate = useNavigate();
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="landing-container">
        {/* Hero Section */}
        <div className="hero">
          <h1>"Empowering Freelancers, Redefining <br /> Work—"</h1>
          <p>Welcome to the Future <br />of Web3 Freelancing. 🚀</p>
          <div className="buttons">
            <button className="find-work" onClick={() => navigate("/find-work")}>
              Find Work
            </button>
            <button className="hire-talent" onClick={() => navigate("/hire-talent")}>
              Hire Talent
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
<div className="main-content">
  {/* Two Column Layout */}
  <div className="content-wrapper">
    
    {/* Left: Features Section */}
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

    {/* Right: Image Slider Section */}
    <div className="image-slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="image-slider"
      />
    </div>

  </div>
</div>

      </div>

      {/* Additional Sections */}
      <DashboardSection />
      <TrendingGigs />
      <HowItWorks />
      <JoinWaitlistSection />
      
    </>
  );
};

export default Landing;
