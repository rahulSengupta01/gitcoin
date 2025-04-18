import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaHome, FaProjectDiagram, FaEnvelope, FaMoneyBillWave, FaCog,
    FaSignOutAlt, FaBell, FaUser, FaChartLine
} from "react-icons/fa";
import "./UserDashboard.css";

const UserDashboard = () => {
    const navigate = useNavigate();
    const [earnings, setEarnings] = useState(0);
    const [projects, setProjects] = useState(0);
    const [messages, setMessages] = useState(0);
    const [successRate, setSuccessRate] = useState(0);

    useEffect(() => {
        // Simulating real-time data animation
        const interval = setInterval(() => {
            setEarnings((prev) => (prev < 3200 ? prev + 80 : 3200));
            setProjects((prev) => (prev < 12 ? prev + 1 : 12));
            setMessages((prev) => (prev < 5 ? prev + 1 : 5));
            setSuccessRate((prev) => (prev < 98 ? prev + 2 : 98));
        }, 200);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/login");
    };

    return (
        <div className="user-dashboard">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <h2 className="dashboard-title">Freelancer Hub</h2>
                <nav className="dashboard-nav">
                    <a href="#" className="sidebar-link"><FaHome /> Dashboard</a>
                    <a href="#" className="sidebar-link"><FaProjectDiagram /> Projects</a>
                    <a href="#" className="sidebar-link"><FaEnvelope /> Messages</a>
                    <a href="#" className="sidebar-link"><FaMoneyBillWave /> Payments</a>
                    <a href="#" className="sidebar-link"><FaCog /> Settings</a>
                </nav>
                <button className="dashboard-logout" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
            </aside>

            {/* Main Content */}
            <div className="dashboard-content">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Welcome, Freelancer!</h1>
                    </div>
                    <div className="header-right">
                        <FaBell className="header-icon" />
                        <FaUser className="header-icon" />
                    </div>
                </header>

                {/* Dashboard Overview */}
                <div className="dashboard-stats">
                    <div className="stat-card stat-earnings">
                        <h3>${earnings}</h3>
                        <p>Total Earnings</p>
                    </div>
                    <div className="stat-card stat-projects">
                        <h3>{projects}</h3>
                        <p>Active Projects</p>
                    </div>
                    <div className="stat-card stat-messages">
                        <h3>{messages}</h3>
                        <p>New Messages</p>
                    </div>
                    <div className="stat-card stat-success">
                        <h3>{successRate}%</h3>
                        <p>Job Success Rate</p>
                    </div>
                </div>

                {/* Recent Projects */}
                <section className="dashboard-section">
                    <h2>Recent Projects</h2>
                    <ul className="projects-list">
                        <li><FaChartLine /> Website Redesign - $500</li>
                        <li><FaChartLine /> Mobile App UI/UX - $1,200</li>
                        <li><FaChartLine /> SEO Optimization - $300</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default UserDashboard;
