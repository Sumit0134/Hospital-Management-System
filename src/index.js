/**
 * Entry point for the Hospital Management System backend application.
 * Sets up middleware, database connection, routes, and starts the server.
 */

const express = require("express");
const app = express();

const config = require("./config"); // Custom configuration (e.g., DB, server)
const middleware = require("./middleware"); // Custom middleware (rate limiter, error handler)

const colors = require("colors"); // Adds color to console logs
const morgan = require("morgan"); // Logger middleware for HTTP requests
const helmet = require("helmet"); // Sets various HTTP headers for security

// Middleware setup
app.use(morgan("dev")); // Logs HTTP requests in dev format
app.use(helmet()); // Secures app by setting various HTTP headers
app.use(express.json()); // Parses incoming JSON requests

// Apply rate limiting middleware globally
app.use(middleware.RateLimit);

// Establish MongoDB connection using custom configuration
config.DatabaseConfig.connection();

// Routes
const apiRoutes = require("./route");

// Root route - test endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the backend of Hospital Management System!");
});

// API routes prefix
app.use("/api", apiRoutes);

// Global error handler middleware (should be last middleware)
app.use(middleware.ErrorHandler);

// Start the server
app.listen(config.ServerConfig.PORT, () => {
  console.log(`Server is running successfully on port: `.yellow + `${config.ServerConfig.PORT}`.cyan);
});
