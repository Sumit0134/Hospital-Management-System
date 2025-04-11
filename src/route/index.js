const express=require("express");
const PatientRoutes=require("./patient-routes")

const router=express.Router();

router.use("/v1", PatientRoutes);

module.exports=router;