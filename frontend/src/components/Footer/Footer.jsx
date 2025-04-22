import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaArrowUp,FaGithub } from "react-icons/fa";
import logo from "./../../assets/react.svg"; // Adjust path if needed
import "./../../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="modern-footer">
      {/* Brand Section */}
      <div className="footer-brand">
        <img src={logo} alt="Gitcoin Logo" />
        <h2>Gitcoin</h2>
      </div>

      {/* Top Grid: Links + Newsletter + Social */}
      <div className="footer-top-grid">
        {/* Footer Links */}
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/events">Events</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <form
            className="newsletter-form"
            action="https://formspree.io/f/mqaelyeq" // Replace this with your Formspree form ID
            method="POST"
          >
            <p className="newsletter-title">Stay Updated</p>
            <input
              type="email"
              name="email" // Name attribute for Formspree to capture
              placeholder="Your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>📍 Roorkee, UK | 📞 (+91)-8299157846</p>
        <p>© 2025 Gitcoin. All Rights Reserved</p>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>

      {/* Back to Top */}
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
