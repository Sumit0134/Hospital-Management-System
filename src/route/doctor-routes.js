// Doctor Routes
// This file defines routes related to doctor functionalities like creation, fetching all doctors, or fetching a doctor by ID.

const express = require("express");
const { DoctorController } = require("../controller"); // Importing doctor controller functions

const router = express.Router(); // Creating a new router instance

// Route to create a new doctor
// Method: POST
// Endpoint: /api/doctor/create-doctor
router.post("/create-doctor", DoctorController.createDoctor);

// Route to get all doctors
// Method: GET
// Endpoint: /api/doctor/get-all-doctors
router.get("/get-all-doctors", DoctorController.getAllDoctors);

// Route to get a doctor by ID
// Method: GET
// Endpoint: /api/doctor/get-doctor-id/:id
router.get("/get-doctor-id/:id", DoctorController.getDoctorById);

// Exporting the router to use in the main application
module.exports = router;
