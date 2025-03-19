import { useState } from "react";
import "./CreateTask.css"; // Import the CSS file
import Task from "../assets/3856147.png";

const CreateTask = () => {
  const [task, setTask] = useState({
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  const [showReview, setShowReview] = useState(false);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleReview = () => {
    if (task.description.split(" ").length < 50) {
      alert("Description must be at least 50 words.");
      return;
    }
    setShowReview(true);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      alert("Task Created Successfully!");
      setTask({ projectName: "", description: "", startDate: "", endDate: "", budget: "" });
      setShowReview(false);
    } else {
      alert("Failed to create task.");
    }
  };

  return (
    <div className="create-task-container">
      {/* Left Side - Form */}
      <div className="create-task-left">
        <h2>Create Task</h2>
        {!showReview ? (
          <form className="create-task-form">
            <select name="projectName" onChange={handleChange} value={task.projectName} required>
              <option value="">Select Project</option>
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
            </select>

            <textarea
              name="description"
              placeholder="Task Description (50+ words)"
              onChange={handleChange}
              value={task.description}
              required
            />

            <label>Start Date</label>
            <input type="date" name="startDate" onChange={handleChange} value={task.startDate} required />

            <label>End Date</label>
            <input type="date" name="endDate" onChange={handleChange} value={task.endDate} required />

            <input type="number" name="budget" placeholder="Budget ($)" onChange={handleChange} value={task.budget} required />

            <button type="button" onClick={handleReview}>Review Task</button>
          </form>
        ) : (
          <div className="review-container">
            <h3>Review Task</h3>
            <p><strong>Project Name:</strong> {task.projectName}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Start Date:</strong> {task.startDate}</p>
            <p><strong>End Date:</strong> {task.endDate}</p>
            <p><strong>Budget:</strong> ${task.budget}</p>

            <button type="button" onClick={handleSubmit}>Submit Task</button>
          </div>
        )}
      </div>

      {/* Right Side - Image/Illustration */}
      <div className="create-task-right">
      <img src={Task} alt="Task Illustration" />

      </div>
    </div>
  );
};

export default CreateTask;
