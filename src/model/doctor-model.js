// doctor.js
// This file defines the Doctor schema and model for MongoDB using Mongoose.

const mongoose = require("mongoose");

// Define the schema for a doctor
const doctorSchema = new mongoose.Schema(
  {
    // Full name of the doctor
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      match: [
        /^[A-Za-z\s]+$/,
        "Please enter a valid name (only letters and spaces).",
      ],
    },

    // Unique email for the doctor
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    // Encrypted password of the doctor
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    // Primary phone number (must be 10 digits)
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },

    // Optional alternative phone number
    alternativePhoneNumber: {
      type: String,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },

    // Address of the doctor
    address: {
      type: String,
      required: [true, "Address is required"],
    },

    // Gender with limited valid options
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required"],
    },

    // Age of the doctor
    age: {
      type: Number,
      required: [true, "Age is required"],
    },

    // Doctor's area of specialization
    specialization: {
      type: String,
      required: [true, "Specialization is required"],
    },

    // Years of experience
    experience: {
      type: Number,
      default: 0,
    },

    // Whether the doctor is currently available for appointments
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

// Export the Doctor model
module.exports = mongoose.model("Doctor", doctorSchema);
