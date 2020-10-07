const express = require("express");
const routes = require("./routes/index");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Setup api routes
app.use("/api", routes);

// app.use("*", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.info(`Listening on PORT: ${PORT}`));
