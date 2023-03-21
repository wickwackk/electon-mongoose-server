import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import product_router from "./routes/product-api.js";

// import { v2 as cloudinary } from "cloudinary";

// import db from "./config/mongoose-config.js";

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(product_router);

// const res = cloudinary.uploader.upload("/Users/morning/Downloads/andy.jpeg", {
//   public_id: "hey2",
//   folder: "Andy bagsh",
//   use_filename: true,
// });

// res
//   .then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const port = 2040;

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
