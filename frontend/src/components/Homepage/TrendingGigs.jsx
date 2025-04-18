import React from "react";
import "../../styles/TrendingGigs.css"; // Import the CSS file
import { FaFire } from "react-icons/fa";

const TrendingGigs = () => {
  const gigs = [
    { title: "Full-Stack Web Development", category: "Web Development", price: "$500 - $1500" },
    { title: "Graphic Design & Branding", category: "Design", price: "$200 - $1000" },
    { title: "SEO Optimization", category: "Marketing", price: "$300 - $1200" },
    { title: "Mobile App Development", category: "App Development", price: "$600 - $2000" },
    { title: "Content Writing & Blogging", category: "Writing", price: "$100 - $800" }
  ];

  return (
    <div className="trending-gigs-container">
      <h2 className="section-title"><FaFire className="fire-icon" /> Trending Gigs</h2>
      <p className="section-subtitle">Explore the most in-demand freelance services right now!</p>
      <div className="gigs-grid">
        {gigs.map((gig, index) => (
          <div className="gig-card" key={index}>
            <div className="gig-content">
              <h3 className="gig-title">{gig.title}</h3>
              <p className="gig-category">Category: {gig.category}</p>
              <p className="gig-price">💲 {gig.price}</p>
              <button className="gig-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGigs;