// API Route Index
// This file aggregates all the route modules and applies them under a versioned API path.

// Importing required modules
const express = require("express");
const PatientRoutes = require("./patient-routes"); // Patient-related routes
const DoctorRoutes = require("./doctor-routes");   // Doctor-related routes
const AppointmentRoutes=require("./appointment-routes") // Appointment-related routes

const router = express.Router(); // Creating a new router instance

// Using versioned routing (/api/v1)
// All patient routes will be prefixed with /api/v1
router.use("/v1", PatientRoutes);

// All doctor routes will also be prefixed with /api/v1
router.use("/v1", DoctorRoutes);

// AAl appointment routes will be prefixed with /api/v1
router.use("/v1", AppointmentRoutes);

// Exporting the combined router for use in the main app
module.exports = router;
