import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: false,
      required: true,
    },
    surname: {
      type: String,
      unique: false,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: false,
      required: true,
    },
    phone: {
      type: Number,
      required: false,
      unique: true,
    },
    address1: {
      type: String,
      required: false,
      unique: false,
    },
    address2: {
      type: String,
      required: false,
      unique: false,
    },
    user_image: {
      type: String,
      required: false,
      unique: false,
    },
    registerDate: {
      type: Date,
      default: Date.now(),
    },
    // specs: {
    //   type: [Object],
    //   required: false,
    // },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
