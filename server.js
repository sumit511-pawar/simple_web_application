const express = require('express'); // Import Express
const app = express(); // Create an Express app
const PORT = process.env.PORT || 3000; // Define the port

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, DevOps!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
