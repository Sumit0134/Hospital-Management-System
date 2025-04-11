// CRUD Repository
// This class provides generic methods to interact with MongoDB models.
// It handles Create, Read, Update, and Delete operations and throws custom errors for better error handling.

const AppError = require("../util/app/app-error");
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
  constructor(model) {
    // Initializes with a specific Mongoose model
    this.model = model;
  }

  // Create a new document in the collection
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      // Throw custom error if creation fails
      throw new AppError(
        error.message || "Error while creating the resource.",
        StatusCodes.BAD_REQUEST
      );
    }
  }

  // Fetch a single document based on provided filter
  async get(data) {
    try {
      const response = await this.model.findOne(data);
      return response;
    } catch (error) {
      // Throw error if the document is not found or there's an issue with the query
      throw new AppError(
        "The requested resource does not exist.",
        StatusCodes.NOT_FOUND
      );
    }
  }

  // Fetch all documents based on optional filter
  async getAll(filter = {}) {
    try {
      const response = await this.model.find(filter);
      // If no documents are found, throw a custom error
      if (response.length === 0) {
        throw new AppError("No resources found.", StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Update a document by ID with new data
  async update(id, data) {
    try {
      const response = await this.model.findOneAndUpdate({ _id: id }, data, {
        new: true, // return the updated document
      });
      // If no document is found with the given ID
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

  // Delete a document by ID
  async delete(id) {
    try {
      const response = await this.model.findOneAndDelete({ _id: id });
      // If no document is found with the given ID
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
