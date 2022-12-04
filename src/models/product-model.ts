import mongoose from "mongoose";
import { Gender } from "../constants/common-constant";

const variantsSchema = new mongoose.Schema({
  sizes: [
    {
      type: Number,
      enum: [3, 3.5, 4, 5, 6, 7, 8, 8.5, 9, 10, 11, 12, 13, 14],
      required: [true, "Variant sizes are required"],
    },
  ],
  colors: [
    {
      type: String,
      required: [true, "Variant colors are required"],
    },
  ],
  price: {
    type: String,
    required: [true, "Variant price is required"],
  },
  image: {
    type: String,
    required: [true, "Variant image is required"],
  },
  images: [
    {
      type: String,
    },
  ],
  quantity: {
    type: Number,
    required: [true, "Variant quantity is required"],
  },
});

const productSchema = new mongoose.Schema({
  brand: { type: mongoose.Types.ObjectId, required: true, ref: "Brand" },
  title: {
    type: String,
    required: [true, "Product title is required"],
  },
  subTitle: {
    type: String,
    required: [true, "Product sub-title is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  gender: {
    type: String,
    enum: [Gender.FEMALE, Gender.MALE],
    required: [true, "Gender for product is required"],
  },
  category: {
    type: String,
    enum: [
      "running",
      "walking",
      "training",
      "football",
      "cricket",
      "lifestyle",
    ],
    required: [true, "Product category is required"],
  },
  averageRating: {
    type: Number,
  },
  variants: {
    type: [variantsSchema],
    required: [true, "Product variant is required"],
  },
});

productSchema.index({
  title: "text",
  subTitle: "text",
  description: "text",
  gender: "text",
  category: "text",
});

const productModle = mongoose.model("Product", productSchema);

export default productModle;
