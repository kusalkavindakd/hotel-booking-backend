import mongoose from "mongoose";

const galleryitemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Galleryitem = mongoose.model("galleryItems", galleryitemSchema);
export default Galleryitem;
