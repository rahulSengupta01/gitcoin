import mongoose from "mongoose";

// Define the task schema
const taskSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    budget: { type: Number, required: true },
  },
  { timestamps: true }
);

// Specify the collection name
const Task = mongoose.model("Task", taskSchema, "CreateTask"); // "CreateTask" collection

export default Task;
