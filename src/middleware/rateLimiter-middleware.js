// Importing express-rate-limit package to apply rate limiting middleware
const rateLimit = require("express-rate-limit");

// Creating an API rate limiter middleware
const apiLimiter = rateLimit({
  // Set the time window for rate limiting to 15 minutes
  windowMs: 15 * 60 * 1000, 

  // Limit each IP to 5 requests per 15-minute window
  max: 5, 

  // Custom response message when limit is exceeded
  message: {
    success: false,
    error: "Too many requests from this IP, please try again after 15 minutes."
  },

  // Include standard rate limit info in response headers
  standardHeaders: true,

  // Disable legacy headers (X-RateLimit-*)
  legacyHeaders: false,
});

// Exporting the rate limiter middleware to be used in the application
module.exports = apiLimiter;
