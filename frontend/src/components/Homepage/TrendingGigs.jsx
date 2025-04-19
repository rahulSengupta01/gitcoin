import React, { useState, useEffect } from "react";
import "../../styles/TrendingGigs.css";
import { FaFire, FaFilter } from "react-icons/fa";

const TrendingGigs = () => {
  const gigs = [
    { title: "Full-Stack Web Development", category: "Web Development", price: "$500 - $1500" },
    { title: "Graphic Design & Branding", category: "Design", price: "$200 - $1000" },
    { title: "SEO Optimization", category: "Marketing", price: "$300 - $1200" },
    { title: "Mobile App Development", category: "App Development", price: "$600 - $2000" },
    { title: "Content Writing & Blogging", category: "Writing", price: "$100 - $800" },
    { title: "UX Research & Audit", category: "Design", price: "$250 - $900" }
  ];

  const categories = ["All", "Web Development", "Design", "Marketing", "App Development", "Writing"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsPerSlide = 3;

  const filteredGigs = selectedCategory === "All"
    ? gigs
    : gigs.filter(gig => gig.category === selectedCategory);

  const totalSlides = Math.ceil(filteredGigs.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="trending-gigs-container">
      <div className="trending-header">
        <h2 className="section-title">
          <FaFire className="fire-icon" /> Trending Gigs
        </h2>
        <div style={{ position: "relative" }}>
          <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>
            <FaFilter /> Filter
          </button>
          {showFilters && (
            <div className="filter-dropdown">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowFilters(false);
                  
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="section-subtitle">Explore the most in-demand freelance services right now!</p>

      <div className="gigs-carousel">
        <div
          className="gigs-slider"
          style={{
            transform: `translateX(-${currentSlide * 50}%)`,
            transition: "transform 1.5s ease-in-out",
            width: `${totalSlides * 100}%`
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * cardsPerSlide;
            const slideItems = filteredGigs.slice(startIndex, startIndex + cardsPerSlide);
            return (
              <div className="slide" key={slideIndex}>
                {slideItems.map((gig, index) => (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingGigs;
