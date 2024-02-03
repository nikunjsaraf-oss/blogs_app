// Import the express module
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('Database is connected');
	})
	.catch((error) => {
		console.log(error);
	});

// Initialize the express application
const app = express();

// Start the server on port 3000
app.listen(3000, () => {
	// Log a message when the server starts successfully
	console.log('Server is running on port 3000');
});
