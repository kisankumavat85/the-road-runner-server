import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street1: {
    type: String,
    required: [true, "Street is required"],
  },
  street2: {
    type: String,
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  state: {
    type: String,
    required: [true, "State is required"],
  },
  pin: {
    type: String,
    required: [true, "PIN is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender is required"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"],
  },
  profileImageUrl: {
    type: String,
  },
  address: {
    home: addressSchema,
    work: addressSchema,
    other: addressSchema,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
