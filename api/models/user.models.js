import mongoose from "mongoose";

// Define the schema for User model
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true }, // username field, it is unique and required
    email: { type: String, unique: true, required: true }, // email field, it is unique and required
    password: { type: String, required: true }, // password field, it is required
  },
  { timestamps: true } // Enable timestamps, it will add createdAt and updatedAt fields
);

// Create User model using the schema
const user = mongoose.model("User", userSchema);

// Export the User model
export default user;
