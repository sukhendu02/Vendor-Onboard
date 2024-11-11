// app.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to hbs
app.set('view engine', 'hbs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
