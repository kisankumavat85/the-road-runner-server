import { AllowedSchema } from "express-json-validator-middleware";

const signinSchema: AllowedSchema = {
  type: "object",
  required: ["email", "password"],
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
  },
  errorMessage: {
    properties: {
      email: "Please enter valid Email Id",
      password: "Please enter valid Password",
    },
  },
};

export default signinSchema;
