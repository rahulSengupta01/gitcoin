import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // Correct ES Module import

dotenv.config(); // ✅ Load environment variables first

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // ✅ Use CORS once

// ✅ Debugging: Check if MONGO_URI is loading properly
console.log("MongoDB URI:", process.env.MONGO_URI);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout if no connection in 5s
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes); // ✅ Routes should be defined after middleware

// Default Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

const PORT = process.env.PORT || 5001; // Change 5000 to 5001
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
