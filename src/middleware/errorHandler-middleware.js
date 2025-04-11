const { StatusCodes } = require('http-status-codes');

function errorHandler(err, req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    console.error("ERROR STACK:", err.stack);
    console.error("ERROR NAME:", err.name);
    console.error("ERROR MESSAGE:", err.message);
  }

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Something went wrong.";

  return res.status(statusCode).json({
    success: false,
    error: message
  });
};

module.exports = errorHandler;
