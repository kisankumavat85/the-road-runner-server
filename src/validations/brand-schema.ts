import { AllowedSchema } from "express-json-validator-middleware";

const brandSchema: AllowedSchema = {
  type: "object",
  required: ["name", "image", "description"],
  properties: {
    name: {
      type: "string",
    },
    image: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  errorMessage: {
    properties: {
      name: "Please enter valid Brand name",
      image: "Please enter valid Brand image",
      description: "Please enter valid Brand description",
    },
  },
};

export default brandSchema;
