import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
      
      </Routes>
    
    </>
  );
}

export default App;
