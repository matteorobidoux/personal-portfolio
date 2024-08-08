// Load environment variables from the .env file
require("dotenv").config();

const express = require("express");
const app = express();

// Access environment variables
const port = process.env.PORT || 3000;
// Example endpoint
app.get("/", (req, res) => {
	res.send("Hello World!");
});
