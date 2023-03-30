import db from "../config/mongoose-config.js";
import User from "../model/User.js";

export async function getUsers(limit) {
  return await User.find({})
    .limit(limit)
    .then((users) => {
      return users;
    })
    .catch((err) => {
      console.log("Error getting users", err);
    });
}

export async function addUsers() {
  await Product.insert({});
}
