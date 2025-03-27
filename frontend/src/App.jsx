import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import FindWork from './components/FindWork.jsx';
import HireTalent from './components/HireTalent.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Navbar />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/hirework" element={<HireTalent />} />
      
      </Routes>
    
    </>
  );
}

export default App;
