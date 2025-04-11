// This module handles password hashing and comparison using bcrypt
const bcrypt = require("bcrypt");

/**
 * Hashes a plain text password using bcrypt with a defined number of salt rounds.
 * @param {string} password - The plain text password to be hashed.
 * @returns {Promise<string>} - A hashed version of the password.
 */
async function hashedPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

/**
 * Compares a plain text password with a hashed password to check if they match.
 * @param {string} password - The plain text password.
 * @param {string} hashed - The hashed password to compare with.
 * @returns {Promise<boolean>} - True if the passwords match, false otherwise.
 */
async function comparedPassword(password, hashed) {
  return bcrypt.compare(password, hashed);
}

module.exports = {
  hashedPassword,
  comparedPassword,
};
