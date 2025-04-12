const { AppointmentRepository } = require("../repository");

const appointmentRepository = new AppointmentRepository();

async function createAppointment(data) {
  const appointment = await appointmentRepository.create(data);

  return appointment;
}

module.exports = {
  createAppointment,
};
