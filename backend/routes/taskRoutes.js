import express from "express";
import Task from "../models/Task.js";  // Make sure the path is correct

const router = express.Router();

// POST a new task
router.post("/", async (req, res) => {
  const { projectName, description, startDate, endDate, budget } = req.body;

  // Check if all fields are present
  if (!projectName || !description || !startDate || !endDate || !budget) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Create a new task
  const newTask = new Task({
    projectName,
    description,
    startDate,
    endDate,
    budget,
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask); // Send back the created task
  } catch (err) {
    res.status(500).json({ error: "Failed to create task", details: err.message });
  }
});

export default router;
