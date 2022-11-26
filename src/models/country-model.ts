import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Country name is required"],
  },
  code: {
    type: String,
    required: [true, "Country code is required"],
  },
  value: {
    type: String,
    required: [true, "Country value is required"],
  },
});

const countryModel = mongoose.model("Country", countrySchema);

export default countryModel;
