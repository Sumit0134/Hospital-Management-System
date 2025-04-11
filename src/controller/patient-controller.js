const { StatusCodes } = require("http-status-codes");
const { PatientService } = require("../service");

const { formatSuccess, formatError } = require("../util/common/formatResponse");

async function createPatient(req, res) {
  try {
    const patient = await PatientService.createPatient(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("Patient created successfully", patient));
  } catch (error) {
    // console.log(error)
    const errorResponse = formatError(error);

    res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

async function getAllPatients(req, res){
  try {
    const patients=await PatientService.getAllPatients();

    const message=patients.length===0?"No patients found in the system":"All patients fetched successfully";
    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, patients));
  } catch (error) {
    // console.log(error)
    const errorResponse = formatError(error);

    res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

async function getPatientById(req, res){
  try {
    const patient=await PatientService.getPatientById(req.params.id);

    const message=patient.length===0?"No patient found in the system with the gven id":"Patient fetched successfully with the given id";
    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, patient));

  } catch (error) {
    // console.log(error)
    const errorResponse = formatError(error);

    res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById
};
