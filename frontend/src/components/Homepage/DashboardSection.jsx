import React from "react";
import "../../styles/DashboardSection.css"; // Import the CSS file
import { FaUsers, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const DashboardSection = () => {
  const earningsData = [
    { month: "Jan", earnings: 4000 },
    { month: "Feb", earnings: 6000 },
    { month: "Mar", earnings: 5500 },
    { month: "Apr", earnings: 8000 },
  ];

  const projectsData = [
    { name: "Completed", value: 75 },
    { name: "In Progress", value: 50 },
  ];

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <h2 className="dashboard-title">🚀 Dashboard Overview</h2>

      {/* Stats Overview */}
      <div className="stats-container">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>12K+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <h3>8.5K</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <FaDollarSign className="stat-icon" />
          <h3>$2.3M</h3>
          <p>Total Earnings</p>
        </div>
      </div>

      {/* Charts & Insights */}
      <div className="charts-section">
        <div className="chart-box">
          <h3>Earnings Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={earningsData}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#4CAF50" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Project Status</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectsData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FF9800" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>🔹 Top Features</h2>
        <div className="features-grid">
          <div className="feature-card">Instant & Secure Payments</div>
          <div className="feature-card">Global Work Access</div>
          <div className="feature-card">Skill-Based Merit System</div>
          <div className="feature-card">Decentralized & Transparent</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;