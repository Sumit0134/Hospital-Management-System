// Doctor Repository
// Extends the generic CRUD repository and binds it to the DoctorModel
// This allows us to perform CRUD operations specifically for doctors

const CrudRepository = require("./crud-repository"); // Importing the generic CRUD repository
const { DoctorModel } = require("../model"); // Importing the Mongoose model for doctors

class DoctorRepository extends CrudRepository {
  constructor() {
    // Binds the DoctorModel to the base repository
    super(DoctorModel);
  }
}

module.exports = DoctorRepository;
