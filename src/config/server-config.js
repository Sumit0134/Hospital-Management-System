// Load environment variables (make sure dotenv is configured before using process.env)
const dotenv = require("./dotenv-config");

module.exports = {
  // Server port defined in .env (e.g., 3000)
  PORT: process.env.PORT,

  // Application name defined in .env (e.g., "Hospital Management System")
  APP_NAME: process.env.APP_NAME,
};
