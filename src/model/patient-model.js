const mongoose=require("mongoose");

const patientSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        match: [/^[A-Za-z\s]+$/, 'Please enter a valid name (only letters and spaces).']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },

    password: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },

    alternativePhoneNumber: {
        type: String,
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },

    address: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },

    age: {
        type: Number,
        required: true,
    }
}, {timestamps: true})

module.exports=mongoose.model("Patient", patientSchema);