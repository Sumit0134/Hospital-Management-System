const { StatusCodes } = require("http-status-codes");
const { SuccessResponse } = require("./response");

function formatSuccess(message = "Success", data = {}) {
  return {
    ...SuccessResponse,
    message,
    data,
  };
}

module.exports = formatSuccess;
