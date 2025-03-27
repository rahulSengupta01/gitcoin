import React, { useState } from "react";
import "./HireTalent.css";

const HireTalent = () => {
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    skills: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  // Add or update a job
  const addOrUpdateJob = () => {
    if (jobDetails.title && jobDetails.description && jobDetails.skills) {
      const updatedJobs = [...jobs];
      if (editingIndex !== -1) {
        // Update existing job
        updatedJobs[editingIndex] = jobDetails;
        setSuccessMessage("Job updated successfully!");
      } else {
        // Add new job
        updatedJobs.push(jobDetails);
        setSuccessMessage("Job posted successfully!");
      }
      setJobs(updatedJobs);
      setEditingIndex(-1);
      setTimeout(() => setSuccessMessage(""), 3000);
      setJobDetails({ title: "", description: "", skills: "" });
    }
  };

  // Edit a job
  const editJob = (index) => {
    setJobDetails(jobs[index]);
    setEditingIndex(index);
  };

  // Delete a job
  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    setSuccessMessage("Job deleted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Remove all jobs
  const removeAllJobs = () => {
    setJobs([]);
    setSuccessMessage("All jobs removed successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="hire-talent-container">
      {/* Left Container: Job Posting Form */}
      <div className="left-container">
        <h2>Hire Talent</h2>
        <div className="job-form">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={jobDetails.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={jobDetails.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Required Skills (comma separated)"
            value={jobDetails.skills}
            onChange={handleChange}
          />
          <div className="button-group">
            <button onClick={addOrUpdateJob} className="post-job-btn">
              {editingIndex !== -1 ? "Update Job" : "Post Job"}
            </button>
            <button onClick={removeAllJobs} className="remove-job-btn">
              Remove All Jobs
            </button>
          </div>
          {successMessage && (
            <div className="toast-message">{successMessage}</div>
          )}
        </div>
      </div>

      {/* Right Container: Job Listings */}
      <div className="right-container">
        <h2>Posted Jobs</h2>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>
                <strong>Skills:</strong> {job.skills}
              </p>
              <div className="job-actions">
                <button className="edit-btn" onClick={() => editJob(index)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteJob(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default HireTalent;
