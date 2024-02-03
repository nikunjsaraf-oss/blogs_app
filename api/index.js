// Import the express, mongoose and dotenv modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database using the connection string from environment variables
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		// Log a success message when database connection is established
		console.log('Database is connected');
	})
	.catch((error) => {
		// Log the error if database connection fails
		console.log(error);
	});

// Initialize the express application
const app = express();

// Start the server on port 3000
app.listen(3000, () => {
	// Log a message when the server starts successfully
	console.log('Server is running on port 3000');
});
