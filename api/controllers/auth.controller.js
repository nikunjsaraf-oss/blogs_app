import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";

// Controller for user signup
export const signup = async (request, response) => {
  // Destructure user input from request body
  const { username, email, password } = request.body;

  // Check if any required field is missing or empty
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return response.status(400).json({ error: "Please fill all fields" });
  }

  // Hash the user's password using bcrypt
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Create a new user with hashed password
  const newUser = User({ username, email, password: hashedPassword });

  try {
    // Save the new user to the database
    await newUser.save();
    // Return success message if signup is successful
    return response.json("Signup successful");
  } catch (error) {
    // Return error message if signup fails
    return response.status(500).json({ error: error.message });
  }
};
