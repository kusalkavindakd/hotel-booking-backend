import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  img: {
    type: String,
    default: "https://www.example.com/default-avatar.png",
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
