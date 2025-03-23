import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import loginImage from '/src/assets/login.avif';
import signupImage from '/src/assets/6368592.jpg';
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For Sign Up
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear error message when toggling
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
     const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    localStorage.setItem('token', response.data.token);
    navigate('/Landing'); // Redirect to homepage after login
    } catch (error) {
      setError("Failed to log in. Check your email and password.");
      console.error("Login error:", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
      name,
      email,
      password,
    });
    localStorage.setItem('token', response.data.token);
    navigate('/Landing'); // Redirect to homepage after sign up
    } catch (error) {
      setError("Failed to create an account. Please try again.");
      console.error("Sign Up error:", error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(93, 159, 176, 0.1)',       
         backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8, // Adjust opacity as needed
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '700px',
          height: '500px',
          backgroundColor: 'rgba(54, 123, 169, 0.8)',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Left Side (Login/Signup Form) */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
            transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
            transform: isLogin ? 'translateX(0)' : 'translateX(100%)',
            opacity: isLogin ? 1 : 0,
            zIndex: 2,
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '50%',
            backgroundColor: 'white',
          }}
        >
          {isLogin ? (
            <div>
              <h2 style={{ marginBottom: '20px' }}>Login</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '10px',
                  marginBottom: '15px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: '10px',
                  marginBottom: '15px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '10px',
                  backgroundColor:' rgb(32, 106, 117)',
                  color: 'white',
                  width: '100%',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#206a75')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#274f56')}
                onClick={handleLogin}
              >
                Login
              </button>
              <p
                style={{ textAlign: 'center', marginTop: '20px', cursor: 'pointer', color: 'black' }}
                onClick={toggleForm}
              >
                Don't have an account? Sign Up
              </p>
            </div>
          ) : null}
        </div>

        {/* Signup Form */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
            transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
            transform: isLogin ? 'translateX(-100%)' : 'translateX(0)',
            opacity: isLogin ? 0 : 1,
            zIndex: 2,
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '50%',
            backgroundColor: 'white',
          }}
        >
          {!isLogin ? (
            <div>
              <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  padding: '10px',
                  marginBottom: '15px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '10px',
                  marginBottom: '15px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: '10px',
                  marginBottom: '15px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '10px',
                  backgroundColor:' rgb(32, 106, 117)',
                  color: 'white',
                  width: '100%',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#206a75')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#274f56')}
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p
                style={{ textAlign: 'center', marginTop: '20px', cursor: 'pointer', color: 'black' }}
                onClick={toggleForm}
              >
                Already have an account? Login
              </p>
            </div>
          ) : null}
        </div>

        {/* Right Side (Image + Purple Background) */}
        <div
          style={{
            flex: '1',
            backgroundColor: '#206a75',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.6s ease-in-out',
            transform: isLogin ? 'translateX(0)' : 'translateX(100%)',
            zIndex: 1,
            position: 'absolute',
            right: '0',
            top: '0',
            height: '100%',
            width: '50%',
          }}
        >
          <div>
  {isLogin ? (
    <img
      src={loginImage}
      alt="Login Illustration"
      style={{ width: '100%', height: 'auto' }}
    />
  ) : (
    <img
      src={signupImage}
      alt="Signup Illustration"
      style={{ width: '100%', height: 'auto' }}
    />
  )}
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
