import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
});

const category = mongoose.model("category", categorySchema);
export default category;
