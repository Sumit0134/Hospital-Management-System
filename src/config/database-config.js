const mongoose = require("mongoose");

const colors=require("colors");

const { MONGODB_URI } = process.env;

const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connected to Database.".green);
  } catch (error) {
    console.log("Error connecting to database: ".red, error);
    process.exit(1);
  }
};

module.exports = { connection };
