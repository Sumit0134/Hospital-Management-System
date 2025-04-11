const mongoose = require("mongoose");
const colors = require("colors"); // Enables colored console logs for better readability

// Destructure MongoDB URI from environment variables
const { MONGODB_URI } = process.env;

/**
 * Establishes a connection to the MongoDB database.
 * If successful, logs a green "connected" message.
 * If there's an error, logs the error in red and exits the process.
 */
const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connected to Database.".green);
  } catch (error) {
    console.log("Error connecting to database: ".red, error);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = { connection };
