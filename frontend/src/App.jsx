import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import FindWork from './components/FindWork';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-task" element={<CreateTask/>} />
        <Route path="/find-work" element={<FindWork/>}/>
      
      </Routes>
    
    </>
  );
}

export default App;
