import React, { useState } from 'react';
import '../../styles/JoinWaitlistSection.css';

const JoinWaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setSubmitted(true);
  };

  return (
    <section className="join-waitlist">
      <div className="waitlist-container">
        {/* Left: Join Waitlist */}
        <div className="waitlist-content">
          <h2 className="animated-text">Be among the first to experience the decentralized freelance revolution!</h2>
          <p className="subtext">Join our waitlist today and unlock exclusive early access, VIP updates, and more!</p>

          {submitted ? (
            <div className="thank-you-message">
              <p>Thank you for joining the waitlist! You'll be the first to know when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={isValid ? "" : "error"}
              />
              {!isValid && <p className="error-message">Please enter a valid email address.</p>}
              <button type="submit" className="join-button">Join Waitlist</button>
            </form>
          )}
        </div>

        {/* Right: CTA */}
        <div className="cta-section">
          <h2>Join the Web3 Freelance Revolution</h2>
          <p>Sign up now and start earning securely.</p>
          <button className="cta-button">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlistSection;
