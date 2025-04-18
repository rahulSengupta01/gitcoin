import { Link } from "react-router-dom";
import "./../../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/join-us">Join Our Team</Link></li>
            </ul>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="footer-column center">
            <h3>Get Updates</h3>
            <p>Subscribe to our newsletter to receive updates and special announcements.</p>
            <input type="email" placeholder="*Email" className="footer-input" />
            <input type="text" placeholder="*First Name" className="footer-input" />
            <button className="signup-btn">SIGN UP</button>
          </div>

          {/* Right Column */}
          <div className="footer-column">
            <h3>Send Us A Message</h3>
            <p>(845)-356-1234</p>
            <p>285 Hungry Hallow Road</p>
            <p>Chestnut Ridge, NY 10977</p>
            <div className="footer-badge">ACCREDITED</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Your Company. All Rights Reserved</p>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link> | Website by <a href="#">829 Studios</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
