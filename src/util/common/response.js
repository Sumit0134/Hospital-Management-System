const { StatusCodes } = require("http-status-codes");

const SuccessResponse = {
  success: true,
  message: "Successfully completed the request",
  data: {},
};

const ErrorResponse = {
  success: false,
  error: {
    message: "Something went wrong",
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR
  }
};

module.exports = { SuccessResponse, ErrorResponse };
