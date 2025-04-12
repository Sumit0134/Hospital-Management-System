/**
 * Appointment Service
 * -------------------
 * This file contains business logic related to Appointment management.
 * It acts as an intermediary between the controllers and the repository layer.
 * Handles creation, retrieval, update, and cancellation (soft delete) of appointments.
 */

const { StatusCodes } = require("http-status-codes");
const { AppointmentRepository } = require("../repository");
const AppError = require("../util/app/app-error");

// Creating an instance of the Appointment repository
const appointmentRepository = new AppointmentRepository();

/**
 * Create a new appointment
 * @param {Object} data - Appointment data
 * @returns {Object} - Created appointment
 */
async function createAppointment(data) {
  const appointment = await appointmentRepository.create(data);
  return appointment;
}

/**
 * Retrieve all appointments
 * @returns {Array} - List of appointments
 */
async function getAllAppointments() {
  const appointments = await appointmentRepository.getAll();
  return appointments;
}

/**
 * Get a single appointment by ID
 * @param {String} id - Appointment ID
 * @returns {Object} - Found appointment
 * @throws {AppError} - If not found
 */
async function getAppointmentById(id) {
  const appointment = await appointmentRepository.get({ _id: id });

  if (!appointment) {
    throw new AppError(
      "Appointment not found with the given id.",
      StatusCodes.NOT_FOUND
    );
  }

  return appointment;
}

/**
 * Cancel an appointment by ID (soft delete by setting status)
 * @param {String} id - Appointment ID
 * @returns {Object|null} - Cancelled appointment or null if not found
 * @throws {AppError} - If already cancelled or completed
 */
async function cancelAppointmentById(id) {
  const appointment = await appointmentRepository.get({ _id: id });

  if (!appointment) {
    return null;
  }

  if (
    appointment.status === "cancelled" ||
    appointment.status === "completed"
  ) {
    throw new AppError(
      `Cannot cancel an appointment which is already ${appointment.status}.`
    );
  }

  const cancelledAppointment = await appointmentRepository.update(id, {
    status: "cancelled",
  });

  return cancelledAppointment;
}

/**
 * Update an appointment by ID
 * @param {String} id - Appointment ID
 * @param {Object} data - Fields to update
 * @returns {Object|null} - Updated appointment or null if not found
 */
async function updateAppointmentById(id, data) {
  const appointment = await appointmentRepository.get({ _id: id });

  if (!appointment) {
    return null;
  }

  const updatedAppointment = await appointmentRepository.update(id, data);

  return updatedAppointment;
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  cancelAppointmentById,
  updateAppointmentById,
};
