// Import required modules
import express from 'express'; // Express.js for creating route handlers
import { test } from '../controllers/user.controller.js'; // Import test function from the controller

// Create an instance of the express router
const router = express.Router();

// Define a route for testing the API
router.get('/test', test);

// Export the router to be used in other parts of the application
export default router;
