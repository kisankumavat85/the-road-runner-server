import { AllowedSchema } from "express-json-validator-middleware";

const categorySchema: AllowedSchema = {
  type: "object",
  required: ["name", "code"],
  properties: {
    name: {
      type: "string",
    },
    value: {
      type: "string",
    },
  },
  errorMessage: {
    properties: {
      name: "Please enter valid Category name",
      value: "Please enter valid Category value",
    },
  },
};

export default categorySchema;
