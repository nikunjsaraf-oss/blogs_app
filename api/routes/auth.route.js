import express from "express";
import { signup } from "../controllers/auth.controller.js";

// Initialize express router
const router = express.Router();

// Route for signup, uses signup function from auth controller
router.post("/signup", signup);

// Export the router
export default router;
