import mongoose from "mongoose";

// Define the schema
const workSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: String, required: true },
    postedBy: { type: String, required: true },
  },
  { timestamps: true }
);

// Specify the collection explicitly
const Work = mongoose.model("Work", workSchema, "Works");  // "Works" is the collection name in MongoDB

export default Work;
