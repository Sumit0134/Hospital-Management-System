const mongoose = require("mongoose");

// Define the schema for a Patient
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        match: [/^[A-Za-z\s]+$/, 'Please enter a valid name (only letters and spaces).']
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
    },

    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },

    alternativePhoneNumber: {
        type: String,
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },

    address: {
        type: String,
        required: [true, "Address is required"],
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: [true, "Gender is required"],
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Exporting the model based on the schema
module.exports = mongoose.model("Patient", patientSchema);
