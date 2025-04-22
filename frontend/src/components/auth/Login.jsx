import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import loginImage from '../../assets/login.avif'; // Import your login image here
import signup from '../../assets/signup.jpg'; // Import your signup image here
import { useAuth } from '../../context/auth-context';//Import useAuth

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CLIENT');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const { currentUser } = useAuth(); //Authenticated user
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSignupSuccess(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('token', userCredential.user.accessToken);
      console.log("Login Successful", userCredential.user);
      
      if (role === 'CLIENT') {
        navigate('/client-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSignupSuccess(true);
    } catch (error) {
      setError(error.message);
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
               {/* Role Selection Dropdown */}
               <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  padding: '10px',
                  marginBottom: '15px',
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  backgroundColor: 'white',
                }}
              >
                <option value="student">CLIENT</option>
                <option value="faculty">USER</option>
              </select>
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
      src={signup}
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
