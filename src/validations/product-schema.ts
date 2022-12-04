import { AllowedSchema } from "express-json-validator-middleware";

import { Gender } from "../constants/common-constant";

const variantSchema: AllowedSchema = {
  type: "object",
  required: ["sizes", "colors", "price", "images", "image", "quantity"],
  properties: {
    sizes: {
      type: "array",
      items: {
        type: "number",
        enum: [3, 3.5, 4, 5, 6, 7, 8, 8.5, 9, 10, 11, 12, 13, 14],
      },
      minItems: 1,
      uniqueItems: true,
    },
    colors: {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
      maxItems: 6,
      uniqueItems: true,
      errorMessage: {
        type: "Colors should be an array",
        uniqueItems: "Colors should have unique items",
        maxItems: "Colors can not have more color than 6",
      },
    },
    price: {
      type: "string",
      minLength: 2,
      errorMessage: "Please enter a valid price",
    },
    images: {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
      maxItems: 6,
      uniqueItems: true,
    },
  },
};

export const createProductSchema: AllowedSchema = {
  type: "object",
  required: [
    "brand",
    "title",
    "subTitle",
    "description",
    "gender",
    "category",
    "averageRating",
    "variants",
  ],
  properties: {
    brand: {
      type: "string",
      minLength: 2,
    },
    title: {
      type: "string",
      minLength: 5,
    },
    subTitle: {
      type: "string",
      minLength: 5,
    },
    description: {
      type: "string",
      minLength: 5,
    },
    gender: {
      type: "string",
      enum: [Gender.MALE, Gender.FEMALE],
    },
    category: {
      type: "string",
      minLength: 3,
    },
    averageRating: {
      type: "number",
      minimum: 0,
      maximum: 5,
      errorMessage: "Valid rating",
    },
    variants: {
      type: "array",
      items: variantSchema,
    },
  },
  errorMessage: {
    properties: {
      brand: "Please enter a valid brand",
      title: "Please enter a valid title",
      subTitle: "Please enter a valid sub-title",
      description: "Please enter a valid description",
      gender: "Please enter a valid gender",
      category: "Please enter a valid category",
      averageRating: "Please enter a valid rating",
      // variants: "Please enter a valid variant(s)",
    },
  },
};
