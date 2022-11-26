import { AllowedSchema } from "express-json-validator-middleware";

const countrySchema: AllowedSchema = {
  type: "object",
  required: ["name", "code"],
  properties: {
    name: {
      type: "string",
    },
    code: {
      type: "string",
    },
    value: {
      type: "string",
    },
  },
  errorMessage: {
    properties: {
      name: "Please enter valid Country name",
      code: "Please enter valid Country code",
      value: "Please enter valid Country value",
    },
  },
};

export default countrySchema;
