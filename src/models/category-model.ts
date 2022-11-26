import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "Category id is required"],
  },
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
});

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
