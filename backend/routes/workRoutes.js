// workRoutes.js
import express from "express";
import Work from "../models/Work.js";  // Make sure this path is correct

const router = express.Router();

// POST a new job
router.post("/", async (req, res) => {
  const { title, description, skills, postedBy } = req.body;

  if (!title || !description || !skills || !postedBy) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newWork = new Work({
    title,
    description,
    skills,
    postedBy,
  });

  try {
    const savedWork = await newWork.save();
    res.status(201).json(savedWork);
  } catch (err) {
    res.status(500).json({ error: "Failed to post job", details: err.message });
  }
});

export default router;
