// Exported function for testing the API
export const test = (request, response) => {
	// Respond with a JSON message indicating that the API is working
	response.json({ message: 'API is working' });
};
