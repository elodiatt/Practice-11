const express = require('express');
const app = express();

// API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from your first Express API!' });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});