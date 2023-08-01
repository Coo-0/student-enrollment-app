const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
