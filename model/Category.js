import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    collection: "category",
  }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
