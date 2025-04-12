const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
      min: Date.now,
    },

    appointmentType: {
      type: String,
      enum: ["in-person", "online"],
      default: "in-person",
    },

    notes: {
      type: String,
      trim: true,
      maxlength: [1000, "Notes cannot exceed 1000 characters."],
      match: [/^[a-zA-Z0-9\s,.\-]+$/, "Notes can only contain letters, numbers, spaces, commas, periods, and hyphens."]
    },

    status: {
      type: String,
      enum: ["scheduled", "cancelled", "completed"],
      default: "scheduled",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    paidAt: {
        type: Date,
        required: function() {
          return this.paymentStatus === "paid"; 
        },
      },

    duration: {
        type: Number,
        default: 30,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
