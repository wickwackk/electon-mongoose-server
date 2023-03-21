import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      unique: false,
      required: true,
    },
    description: {
      type: String,
      unique: false,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    sale: {
      type: String,
      required: false,
    },
    // specs: {
    //   type: [Object],
    //   required: false,
    // },
    // createdOn: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  {
    collection: "products",
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
