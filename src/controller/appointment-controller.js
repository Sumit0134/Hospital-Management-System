const { StatusCodes } = require("http-status-codes");
const {AppointmentService}=require("../service");
const formatSuccess = require("../util/common/formatResponse");

async function createAppointment(req, res, next){
    try {
        const appointment=await AppointmentService.createAppointment(req.body);

        return res.status(StatusCodes.CREATED).json(formatSuccess("Appointment booked successfully.", appointment));
    } catch (error) {
        next(error);
    }
}

module.exports={
    createAppointment,
}