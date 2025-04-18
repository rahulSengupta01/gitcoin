import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTasks, FaBriefcase, FaMoneyBillWave, FaComments, FaSignOutAlt } from "react-icons/fa";
import { auth, db } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [activeProjects, setActiveProjects] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return navigate("/login");

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      setUserData(userDoc.data());

      // Fetch Jobs
      const q = query(collection(db, "jobs"), where("postedBy", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const jobsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setJobs(jobsList);

      // Active Projects
      const activeJobs = jobsList.filter(job => job.status === "active");
      setActiveProjects(activeJobs.length);

      // Total Spent
      const completedJobs = jobsList.filter(job => job.status === "completed");
      const spent = completedJobs.reduce((sum, job) => sum + (job.paymentAmount || 0), 0);
      setTotalSpent(spent);

      // Recent Activity (last 3 jobs)
      const recent = [...jobsList]
        .sort((a, b) => b.timestamp - a.timestamp) // assuming timestamp exists
        .slice(0, 3);
      setRecentActivity(recent);
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="client-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">{userData?.name || "Client"}'s Panel</h2>
        <ul>
          <li><Link to="/my-project"><FaBriefcase className="icon" /> My Projects</Link></li>
          <li><Link to="/post-job"><FaTasks className="icon" /> Post a Job</Link></li>
          <li><Link to="/my-jobs"><FaTasks className="icon" /> My Jobs</Link></li> {/* Link to My Jobs Page */}
          <li><Link to="/transactions"><FaMoneyBillWave className="icon" /> Transactions</Link></li>
          <li><Link to="/messages"><FaComments className="icon" /> Messages</Link></li>
          <li onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt className="icon" /> Logout
          </li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1 className="welcome-text">Welcome, {userData?.name || "Client"}! 🚀</h1>

        {/* Overview Section */}
        <div className="overview">
          <div className="overview-box">
            <FaBriefcase className="icon" />
            <h3>{activeProjects} Active Projects</h3>
          </div>
          <div className="overview-box">
            <FaTasks className="icon" />
            <h3>{jobs.length} Jobs Posted</h3>
          </div>
          <div className="overview-box">
            <FaMoneyBillWave className="icon" />
            <h3>${totalSpent} Spent</h3>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            {recentActivity.length === 0 ? (
              <li>No recent activity yet.</li>
            ) : (
              recentActivity.map((job, index) => (
                <li key={index}>
                  ✔ {job.freelancerName || "Freelancer"} {job.status === "completed" ? "completed" : "worked on"} "{job.title}" - 
                  <span className={job.status === "completed" ? "paid" : "pending"}>
                    {job.status === "completed" ? `$${job.paymentAmount || 0} Paid` : "Under Review"}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
