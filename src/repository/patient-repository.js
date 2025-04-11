// PatientRepository.js
// This repository handles patient-specific database operations
// by extending the generic CRUD operations from CrudRepository.

const CrudRepository = require("./crud-repository"); // Import base CRUD repository
const { PatientModel } = require("../model"); // Import the Patient Mongoose model

// PatientRepository extends CrudRepository and binds it with the Patient model
class PatientRepository extends CrudRepository {
  constructor() {
    // Pass the Patient model to the base class constructor
    super(PatientModel);
  }
}

module.exports = PatientRepository;
