const express=require("express");
const PatientRoutes=require("./patient-routes");
const DoctorRoutes=require("./doctor-routes")

const router=express.Router();

router.use("/v1", PatientRoutes);

router.use("/v1", DoctorRoutes);

module.exports=router;