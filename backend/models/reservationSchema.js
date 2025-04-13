//Here we are creating schema models for our database
// schema models play a crucial role in defining the structure and behavior of the data. They help define how the data is stored, validated, and retrieved from the database.

import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters!!!"],
    maxLength: [30, "First name cannot exceed 30 characters!!!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 characters!!!"],
    maxLength: [30, "Last name cannot exceed 30 characters!!!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide valid email!!!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain only 10 digits!!!"],
    maxLength: [30, "Phone number must contain only 10 digits!!!"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservartion = mongoose.model("Reservation", reservationSchema);
