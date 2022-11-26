import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Brand name is required"],
  },
  image: {
    type: String,
    required: [true, "Brand image is required"],
  },
  description: {
    type: String,
    required: [true, "Brand description is required"],
  },
});

const brandModel = mongoose.model("Brand", brandSchema);

export default brandModel;
