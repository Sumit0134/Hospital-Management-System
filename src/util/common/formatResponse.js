const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("./response");

function formatSuccess(message = "Success", data = {}) {
  return {
    ...SuccessResponse,
    message,
    data,
  };
}

function formatError(error) {
  return {
    ...ErrorResponse,
    error: {
      message: error.message || "Something went wrong.",
      statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    },
  };
}

module.exports = {
  formatSuccess,
  formatError,
};
