import { AllowedSchema } from "express-json-validator-middleware";
import { ImageType } from "../constants/common-constant";

const imageUploadSchema: AllowedSchema = {
  type: "object",
  required: ["imageType"],
  properties: {
    imageType: {
      type: "string",
      enum: [ImageType.ProfileImage, ImageType.ProductImage],
    },
  },
  errorMessage: {
    properties: {
      imageType: "Please enter valid image type",
    },
  },
};

export default imageUploadSchema;
