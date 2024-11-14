// app.js

const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const PORT = 3000;

// Set the view engine to hbs
app.set("view engine", "hbs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Register the partials directory
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route
app.get("/", (req, res) => {
  res.render("index", { title: "Welcome", message: "Hello, World!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
