const { StatusCodes } = require("http-status-codes");
const { DoctorRepository } = require("../repository");
const AppError = require("../util/app/app-error");
const { hashedPassword } = require("../util/helper/hash");

const doctorRepository = new DoctorRepository();

async function createDoctor(data) {
  const existingDoctor = await doctorRepository.get({ email: data.email });
  if (existingDoctor) {
    throw new AppError(
      "Doctor with this email id already exists. Please login.",
      StatusCodes.CONFLICT
    );
  }

  data.password = await hashedPassword(data.password);
  const doctor = await doctorRepository.create(data);

  return doctor;
}

async function getAllDoctors() {
  const doctors = await doctorRepository.getAll();

  return doctors;
}

async function getDoctorById(id) {
  const doctor = await doctorRepository.get({ _id: id });

  if (!doctor) {
    throw new AppError("Doctor not found with the given id.", StatusCodes.NOT_FOUND);
  }

  return doctor;
}

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
};
