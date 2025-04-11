const CrudRepository = require("./crud-repository");

const { PatientModel } = require("../model");

class PatientRepository extends CrudRepository {
  constructor() {
    super(PatientModel);
  }
}

module.exports = PatientRepository;
