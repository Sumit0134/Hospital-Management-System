const express=require("express");
const { PatientController } = require("../controller");

const router=express.Router();

router.post("/create-patient", PatientController.createPatient);

router.get("/get-all-patients", PatientController.getAllPatients);

router.get("/get-patient-id/:id", PatientController.getPatientById)

module.exports=router;