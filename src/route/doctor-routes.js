const express=require("express");
const { DoctorController } = require("../controller");

const router=express.Router();

router.post("/create-doctor", DoctorController.createDoctor);

router.get("/get-all-doctors", DoctorController.getAllDoctors);

router.get("/get-doctor-id/:id", DoctorController.getDoctorById)

module.exports=router;