import { AllowedSchema } from "express-json-validator-middleware";

const addressSchema: AllowedSchema = {
  type: "object",
  required: ["type", "street1", "city", "state", "PIN", "country"],
  properties: {
    type: {
      type: "string",
      enum: ["home", "work", "other"],
    },
    street1: {
      type: "string",
    },
    city: {
      type: "string",
    },
    state: {
      type: "string",
    },
    PIN: {
      type: "string",
    },
    country: {
      type: "string",
    },
  },
  errorMessage: {
    properties: {
      type: "Please provide valid address type",
      street1: "Please provide valid Street1",
      city: "Please provide valid City",
      state: "Please provide valid State",
      PIN: "Please provide valid PIN",
      country: "Please provide valid Country",
    },
  },
};

export default addressSchema;
