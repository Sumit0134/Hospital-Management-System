/**
 * Custom error class to handle application-specific errors.
 * Extends the built-in Error class and adds a statusCode property.
 */

class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Call parent constructor (sets message)
    this.statusCode = statusCode; // Add custom status code property
  }
}

module.exports = AppError; // Export the custom error class for use in services and controllers
