// app.js

const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

var bodyParser = require("body-parser");
//  BODY PARSER
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// MODALS IMPORT
const leadForm = require("./modals/leadFrom");

// ROUTES IMPORT
////////
// const formRoute = require("./Routes/formRoute");
const formRoute = require("./Routes/formRoute")(app);

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://sukhendu:sukhendu@project1.ccrjnjw.mongodb.net/?retryWrites=true&w=majority&appName=Project1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Set the viewsdf engine to hbs
app.set("view engine", "hbs");

// MongoDB Connection

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
