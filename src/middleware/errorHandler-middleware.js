const { StatusCodes } = require('http-status-codes');

function errorHandler(err, req, res, next) {
  // Show detailed errors in development mode
  if (process.env.NODE_ENV === 'development') {
    console.error("ERROR STACK:", err.stack);
    console.error("ERROR NAME:", err.name);
    console.error("ERROR MESSAGE:", err.message);
  }

  let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  let message = err.message || "Something went wrong.";

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    statusCode = StatusCodes.BAD_REQUEST;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  // Handle duplicate key error (e.g., unique email constraint)
  if (err.code && err.code === 11000) {
    statusCode = StatusCodes.CONFLICT;
    const field = Object.keys(err.keyValue);
    message = `Duplicate value entered for ${field}. Please use another value.`;
  }

  return res.status(statusCode).json({
    success: false,
    error: message,
  });
}

module.exports = errorHandler;
