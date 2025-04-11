// Importing error handler middleware for centralized error handling
const ErrorHandler = require("./errorHandler-middleware");

// Importing rate limiter middleware to control request rate and prevent abuse
const RateLimit = require("./rateLimiter-middleware");

// Exporting all middlewares in a single object for easy import elsewhere
module.exports = {
  ErrorHandler,
  RateLimit,
};
