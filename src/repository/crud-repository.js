const AppError = require("../util/app/app-error");

const { StatusCodes } = require("http-status-codes");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw new AppError(
        error.message || "Error while creating the resource.",
        StatusCodes.BAD_REQUEST
      );
    }
  }

  async get(data) {
    try {
      const response = await this.model.findOne(data);
      return response;
    } catch (error) {
      throw new AppError(
        error.message || "The requested resource does not exist.",
        StatusCodes.NOT_FOUND
      );
    }
  }

  async getAll(filter = {}) {
    try {
      const response = await this.model.find(filter);
      if (response.length === 0) {
        throw new AppError("No resources found.", StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!response) {
        throw new AppError(
          "The requested resource does not exist.",
          StatusCodes.NOT_FOUND
        );
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.model.findOneAndDelete({ _id: id });
      if (!response) {
        throw new AppError(
          "The requested resource does not exist.",
          StatusCodes.NOT_FOUND
        );
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CrudRepository;
