// Patient Routes
// This file handles all routes related to patient operations like creating a patient, fetching all patients, and fetching a specific patient by ID.

const express = require("express");
const { PatientController } = require("../controller"); // Importing the patient controller functions

const router = express.Router(); // Creating a new Express router

// Route to create a new patient
// Endpoint: POST /api/v1/create-patient
router.post("/create-patient", PatientController.createPatient);

// Route to get all patients
// Endpoint: GET /api/v1/get-all-patients
router.get("/get-all-patients", PatientController.getAllPatients);

// Route to get a patient by their ID
// Endpoint: GET /api/v1/get-patient-id/:id
router.get("/get-patient-id/:id", PatientController.getPatientById);

// Exporting the router to be used in the main route index
module.exports = router;
