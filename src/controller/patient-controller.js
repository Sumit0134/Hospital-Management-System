const { StatusCodes } = require("http-status-codes");
const { PatientService } = require("../service");
const formatSuccess = require("../util/common/formatResponse");

/**
 * Controller to create a new patient
 * @route POST /api/patients
 */
async function createPatient(req, res, next) {
  try {
    const patient = await PatientService.createPatient(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("Patient created successfully", patient));
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to get all patients from the system
 * @route GET /api/patients
 */
async function getAllPatients(req, res, next) {
  try {
    const patients = await PatientService.getAllPatients();

    const message = patients.length === 0
      ? "No patients found in the system"
      : "All patients fetched successfully";

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, patients));
  } catch (error) {
    next(error);
  }
}

/**
 * Controller to fetch a specific patient by ID
 * @route GET /api/patients/:id
 */
async function getPatientById(req, res, next) {
  try {
    const patient = await PatientService.getPatientById(req.params.id);

    const message = patient
      ? "Patient fetched successfully with the given id"
      : "No patient found in the system with the given id";

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, patient));
  } catch (error) {
    next(error);
  }
}

// Export controller methods
module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
};
