// index.js
// This file centralizes the exports of all Mongoose models for easier imports elsewhere.

module.exports = {
    PatientModel: require("./patient-model"),        // Model for Patient schema
    DoctorModel: require("./doctor-model"),          // Model for Doctor schema
    AppointmentModel: require("./appointment-model") // Model for Appointment schema
};
