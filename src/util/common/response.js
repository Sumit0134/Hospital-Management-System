/**
 * This file defines standard response templates for successful and error scenarios.
 * These templates are reused across the application to maintain a consistent response structure.
 */

const { StatusCodes } = require("http-status-codes");

// Default structure for a successful response
const SuccessResponse = {
  success: true,
  message: "Successfully completed the request", // Default message
  data: {}, // Placeholder for any data to be returned
};

// Default structure for an error response
const ErrorResponse = {
  success: false,
  error: {
    message: "Something went wrong", // Default error message
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR, // Default HTTP status code
  },
};

module.exports = { SuccessResponse, ErrorResponse }; // Exporting for use in formatting response utilities
