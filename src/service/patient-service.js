// Patient Service Layer
// This file contains business logic related to patients like creating a patient, retrieving all patients, or fetching a patient by ID.

const { StatusCodes } = require("http-status-codes");
const { PatientRepository } = require("../repository"); // Importing the patient repository for database operations
const AppError = require("../util/app/app-error"); // Custom error class to handle application-specific errors
const { hashedPassword } = require("../util/helper/hash"); // Utility function to hash passwords securely

const patientRepository = new PatientRepository(); // Creating an instance of the repository

// Function to create a new patient
async function createPatient(data) {
    // Check if a patient already exists with the same email
    const existingPatient = await patientRepository.get({ email: data.email });
    if (existingPatient) {
      // If patient exists, throw a conflict error
      throw new AppError(
        "Patient with this email id already exists. Please login.",
        StatusCodes.CONFLICT
      );
    }

    // Hash the patient's password before saving
    data.password = await hashedPassword(data.password);
    
    // Create and return the new patient
    const patient = await patientRepository.create(data);

    return patient;
}

// Function to fetch all patients
async function getAllPatients() {
  const patients = await patientRepository.getAll();
  return patients;
}

// Function to fetch a patient by their ID
async function getPatientById(id) {
  const patient = await patientRepository.get({ _id: id });

  // If patient is not found, throw a not found error
  if (!patient) {
    throw new AppError("Patient not found with the given id.", StatusCodes.NOT_FOUND);
  }

  return patient;
}

// Exporting all service functions
module.exports = {
  createPatient,
  getAllPatients,
  getPatientById
};
