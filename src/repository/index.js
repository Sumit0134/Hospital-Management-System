// Repository Index File
// This file acts as a central export hub for all repository classes,
// making it easier to import them throughout the project.

module.exports = {
    CrudRepository: require("./crud-repository"), // Base repository with common CRUD operations
    PatientRepository: require("./patient-repository"), // Repository for patient-specific DB operations
    DoctorRepository: require("./doctor-repository"), // Repository for doctor-specific DB operations
    AppointmentRepository: require("./appointment-repository"), // Repository for appointment-specific DB operations
};
