/**
 * Appointment Controller
 * ----------------------
 * Handles incoming HTTP requests related to appointments and delegates
 * business logic to the AppointmentService. Returns appropriate responses.
 */

const { StatusCodes } = require("http-status-codes");
const { AppointmentService } = require("../service");
const { formatSuccess, formatError } = require("../util/common/formatResponse");

// Create a new appointment
async function createAppointment(req, res, next) {
  try {
    const appointment = await AppointmentService.createAppointment(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("Appointment booked successfully.", appointment));
  } catch (error) {
    next(error); // Passes error to global error handler
  }
}

// Get all appointments
async function getAllAppointments(req, res, next) {
  try {
    const appointments = await AppointmentService.getAllAppointments();

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess("All appointments fetched successfully.", appointments));
  } catch (error) {
    next(error);
  }
}

// Get a single appointment by ID
async function getAppointmentById(req, res, next) {
  try {
    const appointment = await AppointmentService.getAppointmentById(req.params.id);

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess("Appointment fetched successfully.", appointment));
  } catch (error) {
    next(error);
  }
}

// Cancel an appointment by ID (soft delete)
async function cancelAppointmentById(req, res, next) {
  try {
    const appointment = await AppointmentService.cancelAppointmentById(req.params.id);

    if (!appointment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json(formatError("Appointment not found.", StatusCodes.NOT_FOUND));
    }

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess("Appointment cancelled successfully.", appointment));
  } catch (error) {
    next(error);
  }
}

// Update an appointment by ID
async function updateAppointmentById(req, res, next) {
  try {
    const appointment = await AppointmentService.updateAppointmentById(
      req.params.id,
      req.body
    );

    if (!appointment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json(formatError("Appointment not found.", StatusCodes.NOT_FOUND));
    }

    return res
      .status(StatusCodes.OK)
      .json(formatSuccess("Appointment updated successfully.", appointment));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  cancelAppointmentById,
  updateAppointmentById,
};
