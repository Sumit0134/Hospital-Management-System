const { StatusCodes } = require("http-status-codes");
const { PatientRepository } = require("../repository");
const AppError = require("../util/app/app-error");
const { hashedPassword } = require("../util/helper/hash");

const patientRepository = new PatientRepository();

async function createPatient(data) {
    const existingPatient = await patientRepository.get({ email: data.email });
    if (existingPatient) {
      throw new AppError(
        "Patient with this email id already exists. Please login.",
        StatusCodes.CONFLICT
      );
    }

    data.password = await hashedPassword(data.password);
    const patient = await patientRepository.create(data);

    return patient;
}

async function getAllPatients(){
  const patients=await patientRepository.getAll();
  
  return patients;
}

module.exports = {
  createPatient,
};
