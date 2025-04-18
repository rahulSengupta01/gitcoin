import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig"; // 🔥 Include `auth`
import { collection, addDoc } from "firebase/firestore";
import { FaBriefcase, FaDollarSign, FaClipboardList } from "react-icons/fa";
import "./PostJob.css";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    if (!jobTitle.trim() || !description.trim() || !budget.trim()) {
      setError("⚠️ Please fill in all fields.");
      setLoading(false);
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      setError("❌ You must be logged in to post a job.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "jobs"), {
        jobTitle,
        description,
        budget,
        postedBy: user.uid, // ✅ This is needed for MyJobs filtering
        postedAt: new Date(),
      });

      setSuccess("✅ Job posted successfully!");
      setTimeout(() => navigate("/client-dashboard"), 2000);
    } catch (err) {
      console.error("Error posting job:", err);
      setError("❌ Error posting job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-job-container">
      <h2>📌 Post a New Job</h2>

      {error && <p className="alert error">{error}</p>}
      {success && <p className="alert success">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaBriefcase className="icon" />
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FaClipboardList className="icon" />
          <textarea
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="input-group">
          <FaDollarSign className="icon" />
          <input
            type="number"
            placeholder="Budget ($)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Posting..." : "🚀 Post Job"}
        </button>
      </form>
    </div>
  );
};

export default PostJob;
