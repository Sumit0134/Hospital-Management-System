/**
 * Appointment Routes
 * ------------------
 * This file defines all the RESTful API routes related to Appointment operations.
 * Routes are connected to controller methods for creating, retrieving, updating,
 * and cancelling appointments.
 */

const express = require("express");
const router = express.Router();

// Importing the AppointmentController
const { AppointmentController } = require("../controller");

// Route to create a new appointment
router.post("/create-appointment", AppointmentController.createAppointment);

// Route to fetch all appointments
router.get("/get-all-appointments", AppointmentController.getAllAppointments);

// Route to fetch a single appointment by ID
router.get("/get-appointment-id/:id", AppointmentController.getAppointmentById);

// Route to cancel (soft delete) an appointment by ID
router.delete("/cancel-appointment-id/:id", AppointmentController.cancelAppointmentById);

// Route to update an appointment by ID (PATCH for partial updates)
router.patch("/update-appointment-id/:id", AppointmentController.updateAppointmentById);

module.exports = router;
