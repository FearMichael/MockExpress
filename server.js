const express = require("express");
const posts = require("./routes/posts");
const todos = require("./routes/todos");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/posts", posts);
app.use("/todos", todos);


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));