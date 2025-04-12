const { StatusCodes } = require("http-status-codes");
const { AppointmentRepository } = require("../repository");
const AppError = require("../util/app/app-error");

const appointmentRepository = new AppointmentRepository();

async function createAppointment(data) {
  const appointment = await appointmentRepository.create(data);

  return appointment;
}

async function getAllAppointments(){
  const appointments=await appointmentRepository.getAll();

  return appointments;
}

async function getAppointmentById(id){
  const appointment=await appointmentRepository.get({_id: id});

  if(!appointment){
    throw new AppError("Appointment not found with the given id.", StatusCodes.NOT_FOUND)
  }

  return appointment;
}

async function cancelAppointmentById(id){
  const appointment=await appointmentRepository.get({_id: id});

  if(!appointment){
    return null;
  }

  if(appointment.status==="cancelled" || appointment.status==="completed"){
    throw new AppError(`Cannot cancel an appointment which is already ${appointment.status}.`);
  }

  const updatedAppointment=await appointmentRepository.update(id, {status: "cancelled"});

  return updatedAppointment;
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  cancelAppointmentById
};
