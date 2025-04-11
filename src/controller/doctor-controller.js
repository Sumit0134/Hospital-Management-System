const { StatusCodes } = require("http-status-codes");
const { DoctorService } = require("../service");

const  formatSuccess  = require("../util/common/formatResponse");

async function createDoctor(req, res, next) {
  try {
    const doctor = await DoctorService.createDoctor(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json(formatSuccess("Doctor created successfully", doctor));
  } catch (error) {
    // console.log(error)
    
    next(error);
  }
}

async function getAllDoctors(req, res, next){
  try {
    const doctors=await DoctorService.getAllDoctors();

    const message=doctors.length===0?"No doctor found in the system":"All doctors fetched successfully";
    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, doctors));
  } catch (error) {
    // console.log(error)
    
    next(error);
  }
}

async function getDoctorById(req, res, next){
  try {
    const doctor=await DoctorService.getDoctorById(req.params.id);

    const message=doctor?"Doctor fetched successfully with the given id":"No doctor found in the system with the given id";
    return res
      .status(StatusCodes.OK)
      .json(formatSuccess(message, doctor));

  } catch (error) {
    // console.log(error)
    
    next(error);
  }
}

module.exports = {
    createDoctor,
    getAllDoctors,
    getDoctorById
};
