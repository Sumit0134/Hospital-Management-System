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
    console.log(error)
    const errorResponse = formatError(error);

    res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

async function getAllPatients(req, res){
  try {
    const patients=await PatientService.getAllPatients();

    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("All patients fetched successfully", patients));
  } catch (error) {
    
  }
}

module.exports = {
  createPatient,
};
