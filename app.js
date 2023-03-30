import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import product_router from "./routes/product-api.js";
import user_router from "./routes/user-api.js";

// import { v2 as cloudinary } from "cloudinary";

// import db from "./config/mongoose-config.js";

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(product_router);
app.use(user_router);
// app.use(cate_router);

const port = 2040;

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
