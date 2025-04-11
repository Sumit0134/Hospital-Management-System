// Centralized export for all controller modules

module.exports = {
    // Handles all patient-related operations (CRUD)
    PatientController: require("./patient-controller"),

    // Handles all doctor-related operations (CRUD)
    DoctorController: require("./doctor-controller"),

    // Handles all appointment-related operations (booking, fetching, etc.)
    AppointmentController: require("./appointment-controller"),
};
