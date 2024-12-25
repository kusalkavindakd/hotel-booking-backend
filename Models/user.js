import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: "customer",
  },
  Whatsapp: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  disable: {
    type: Boolean,
    required: true,
    default: false,
  },
  emailVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
