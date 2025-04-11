// Service index file to export all service modules from a single place
// Helps in cleaner and centralized imports elsewhere in the project

module.exports = {
    PatientService: require("./patient-service"),           // Handles logic related to patients
    DoctorService: require("./doctor-service"),             // Handles logic related to doctors
    AppointmentService: require("./appointment-service"),   // Handles logic related to appointments
};
