import db from "../config/mongoose-config.js";
import Product from "../model/Product.js";

export async function getProducts(limit) {
  return await Product.find({})
    .limit(limit)
    .then((movies) => {
      return movies;
    })
    .catch((err) => {
      console.log("Error getting products", err);
    });
}

export async function addProducts() {
  await Product.insert({});
}
