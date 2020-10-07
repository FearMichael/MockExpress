const express = require("express");

const todoRoutes = require("./todos");
const postsRoutes = require("./posts");

const AppRouter = express.Router();

AppRouter.use("/todos", todoRoutes);
AppRouter.use("/posts", postsRoutes);
