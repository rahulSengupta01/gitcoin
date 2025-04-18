import React, { useState } from "react";
import { db } from "../../firebaseConfig"; // Make sure the path to your firebaseConfig is correct
import { collection, addDoc } from "firebase/firestore";
import './PostProject.css'; // Add relevant CSS for styling

const PostProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Validation: Check if fields are empty
    if (!title.trim() || !description.trim()) {
      setError("⚠️ Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      // Add the project to Firestore
      await addDoc(collection(db, "projects"), {
        title,
        description,
        status,
        postedBy: "clientUID", // Replace with the actual client UID
        postedAt: new Date(),
      });

      // Success message
      setSuccess("✅ Project posted successfully!");
      setLoading(false);

      // Clear form fields to allow posting another project
      setTitle("");
      setDescription("");
      setStatus("Active");

    } catch (err) {
      setLoading(false);
      setError("❌ Error posting project. Please try again.");
    }
  };

  return (
    <div className="post-project-container">
      <h2>Post a New Project</h2>
      
      {/* Show error if any */}
      {error && <p className="error">{error}</p>}
      
      {/* Show success message if project was posted */}
      {success && <p className="success">{success}</p>}

      {/* Project posting form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Project"}
        </button>
      </form>

      {/* Optionally, provide a button to navigate back to the dashboard */}
      <button onClick={() => window.location.href = '/client-dashboard'}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default PostProject;
