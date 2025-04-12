const { StatusCodes } = require("http-status-codes");
const { DoctorService } = require("../service");

const {formatSuccess} = require("../util/common/formatResponse");

/**
 * Creates a new doctor using the request body data.
 * Delegates the creation logic to the DoctorService.
 */
async function createDoctor(req, res, next) {
  try {
    const doctor = await DoctorService.createDoctor(req.body);

    // Respond with a 201 Created status and the newly created doctor data
    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("Doctor created successfully", doctor));
  } catch (error) {
    // Passes the error to the error handling middleware
    next(error);
  }
}

/**
 * Retrieves all doctors from the system.
 * If no doctors are found, a relevant message is returned.
 */
async function getAllDoctors(req, res, next) {
  try {
    const doctors = await DoctorService.getAllDoctors();

    // Conditionally set the message based on whether doctors were found
    const message = doctors.length === 0 
      ? "No doctor found in the system" 
      : "All doctors fetched successfully";

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, doctors));
  } catch (error) {
    // Passes the error to the error handling middleware
    next(error);
  }
}

/**
 * Retrieves a doctor by their ID from the request parameters.
 * Responds with either the found doctor or a not-found message.
 */
async function getDoctorById(req, res, next) {
  try {
    const doctor = await DoctorService.getDoctorById(req.params.id);

    // Conditionally set the message based on whether a doctor was found
    const message = doctor 
      ? "Doctor fetched successfully with the given id" 
      : "No doctor found in the system with the given id";

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, doctor));
  } catch (error) {
    // Passes the error to the error handling middleware
    next(error);
  }
}

// Export the controller functions
module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById
};
