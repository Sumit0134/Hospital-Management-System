const { StatusCodes } = require("http-status-codes");
const { AppointmentService } = require("../service");
const { formatSuccess, formatError } = require("../util/common/formatResponse");

async function createAppointment(req, res, next) {
  try {
    const appointment = await AppointmentService.createAppointment(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("Appointment booked successfully.", appointment));
  } catch (error) {
    next(error);
  }
}

async function getAllAppointments(req, res, next) {
  try {
    const appointments = await AppointmentService.getAllAppointments();

    return res
      .status(StatusCodes.OK)
      .json(
        formatSuccess("All appointments fetched successfully.", appointments)
      );
  } catch (error) {
    next(error);
  }
}

async function getAppointmentById(req, res, next) {
  try {
    const appointment = await AppointmentService.getAppointmentById(
      req.params.id
    );

    return res
      .status(StatusCodes.OK)
      .json(
        formatSuccess(
          "Appointment with the given id has been fetched suucessfully.",
          appointment
        )
      );
  } catch (error) {
    next(error);
  }
}

async function cancelAppointmentById(req, res, next) {
  try {
    const appointment = await AppointmentService.cancelAppointmentById(
      req.params.id
    );

    if (!appointment) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json(formatError("Appointment not found.", StatusCodes.NOT_FOUND));
    }

    return res.status(StatusCodes.OK).json(formatSuccess("Appointment cancelled successfully", appointment));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  cancelAppointmentById,
};
