// Appointment Repository
// Extends the generic CRUD repository and binds it to the AppointmentModel
// This allows us to perform CRUD operations specifically for appointments

const CrudRepository = require("./crud-repository"); // Importing the generic CRUD repository
const { AppointmentModel } = require("../model"); // Importing the Mongoose model for appointments

class AppointmentRepository extends CrudRepository {
  constructor() {
    // Binds the DoctorModel to the base repository
    super(AppointmentModel);
  }
}

module.exports = AppointmentRepository;
