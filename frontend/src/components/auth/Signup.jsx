import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Signup successful!');
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                className="mb-3 px-4 py-2 border rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="mb-3 px-4 py-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSignup}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Sign Up
            </button>
        </div>
    );
};

export default Signup;
