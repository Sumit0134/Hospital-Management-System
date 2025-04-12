const express=require("express");

const router=express.Router();

const {AppointmentController}=require("../controller")

router.post("/create-appointment", AppointmentController.createAppointment);

router.get("/get-all-appointments", AppointmentController.getAllAppointments);

router.get("/get-appointment-id/:id", AppointmentController.getAppointmentById);

router.delete("/cancel-appointment-id/:id", AppointmentController.cancelAppointmentById);

router.patch("/update-appointment-id/:id", AppointmentController.updateAppointmentById);

module.exports=router