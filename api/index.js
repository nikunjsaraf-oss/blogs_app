// Import required modules for the server
import express from "express"; // Express.js framework for building the server
import mongoose from "mongoose"; // Mongoose for MongoDB interactions
import dotenv from "dotenv"; // dotenv for loading environment variables
import userRoutes from "./routes/user.route.js"; // Import user routes
import authRoutes from "./routes/auth.route.js"; // Import auth routes

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database using the connection string from environment variables
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // Log a success message when the database connection is established
    console.log("Database is connected");
  })
  .catch((error) => {
    // Log the error if the database connection fails
    console.log(error);
  });

// Initialize the express application
const app = express();

// Use express.json() middleware for parsing JSON request bodies
app.use(express.json());

// Start the server on port 3000
app.listen(3000, () => {
  // Log a message when the server starts successfully
  console.log("Server is running on port 3000");
});

// Use userRoutes for handling routes under the '/api/user' path
app.use("/api/user", userRoutes);

// Use authRoutes for handling routes under the '/api/auth' path
app.use("/api/auth", authRoutes);
