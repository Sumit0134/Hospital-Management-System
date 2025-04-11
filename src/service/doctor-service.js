// Doctor service layer that handles business logic for doctor operations

const { StatusCodes } = require("http-status-codes");
const { DoctorRepository } = require("../repository");
const AppError = require("../util/app/app-error");
const { hashedPassword } = require("../util/helper/hash");

// Create an instance of the DoctorRepository to interact with the database
const doctorRepository = new DoctorRepository();

/**
 * Creates a new doctor after checking if the email already exists.
 * Hashes the password before storing it.
 * @param {Object} data - The doctor data (name, email, password, etc.)
 * @returns {Object} - The created doctor object
 */
async function createDoctor(data) {
  // Check if a doctor already exists with the given email
  const existingDoctor = await doctorRepository.get({ email: data.email });
  if (existingDoctor) {
    throw new AppError(
      "Doctor with this email id already exists. Please login.",
      StatusCodes.CONFLICT
    );
  }

  // Hash the password before saving
  data.password = await hashedPassword(data.password);

  // Create the doctor
  const doctor = await doctorRepository.create(data);

  return doctor;
}

/**
 * Fetches all doctors from the system.
 * @returns {Array} - List of all doctors
 */
async function getAllDoctors() {
  const doctors = await doctorRepository.getAll();
  return doctors;
}

/**
 * Fetches a single doctor by their ID.
 * Throws an error if the doctor does not exist.
 * @param {string} id - The doctor’s unique ID
 * @returns {Object} - The found doctor object
 */
async function getDoctorById(id) {
  const doctor = await doctorRepository.get({ _id: id });

  if (!doctor) {
    throw new AppError("Doctor not found with the given id.", StatusCodes.NOT_FOUND);
  }

  return doctor;
}

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
};
