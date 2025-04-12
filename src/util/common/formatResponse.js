/**
 * Utility function to format successful API responses in a consistent structure.
 * Uses a predefined SuccessResponse object and extends it with custom message and data.
 */

const { SuccessResponse, ErrorResponse } = require("./response");

/**
 * @param {string} message - A custom success message to return (default: "Success")
 * @param {Object} data - The data to send back with the response (default: empty object)
 * @returns {Object} A formatted success response object
 */
function formatSuccess(message = "Success", data = {}) {
  return {
    ...SuccessResponse, // Spread default structure from SuccessResponse
    message,
    data,
  };
}

function formatError(error, statusCode) {
  return {
    ...ErrorResponse,
    success: false,
    error: {
      message: error,
      statusCode
    }
  };
}

module.exports = { formatSuccess, formatError }; // Export for use in controllers
