const CrudRepository = require("./crud-repository");

const { DoctorModel } = require("../model");

class DoctorRepository extends CrudRepository {
  constructor() {
    super(DoctorModel);
  }
}

module.exports = DoctorRepository;
