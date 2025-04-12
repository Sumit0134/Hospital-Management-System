const express=require("express");

const router=express.Router();

const {AppointmentController}=require("../controller")

router.post("/create-appointment", AppointmentController.createAppointment);

module.exports=router