// Import the express module
import express from 'express';

// Initialize the express application
const app = express();

// Start the server on port 3000
app.listen(3000, () => {
	// Log a message when the server starts successfully
	console.log('Server is running on port 3000');
});
