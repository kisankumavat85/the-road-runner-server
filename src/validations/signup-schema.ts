import { AllowedSchema } from "express-json-validator-middleware";

const signupSchema: AllowedSchema = {
  type: "object",
  required: ["email", "password", "firstName", "lastName", "gender"],
  properties: {
    email: {
      type: "string",
      minLength: 7,
      pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
    },
    password: {
      type: "string",
      minLength: 6,
    },
    firstName: {
      type: "string",
      minLength: 1,
    },
    lastName: {
      type: "string",
      minLength: 1,
    },
    gender: {
      type: "string",
      enum: ["Male", "Female"],
    },
    dob: {
      type: "string",
      format: "date-time",
    },
  },
  errorMessage: {
    properties: {
      email: "Please enter a valid Email Id",
      password: "Please enter a valid Password",
      firstName: "Please enter a valid First Name",
      lastName: "Please enter a valid Last Name",
      gender: "Please enter a valid Gender",
      dob: "Please enter a valid Date of birth",
    },
  },
};

export default signupSchema;
