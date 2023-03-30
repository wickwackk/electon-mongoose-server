import express from "express";
import { getProducts } from "../services/product-service.js";
import multer from "multer";
import upload from "../util/multer-handler.js";
import { v2 as cloudinary } from "cloudinary";
import uploadCloud from "../config/cloudinary-config.js";

const product_router = express.Router();

// const upload = multer({ dest: "/tmp" });

product_router.get("/product", async (req, res) => {
  console.log("request to get products");
  const products = await getProducts(10);
  res.status(200).json(products);
});

product_router.post("/product", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
    public_id: req.file.originalname,
    folder: "product",
    use_file: true,
  });

  const newProduct = { image: secure_url, ...JSON.parse(req.body.details) };

  // console.log("resfromCloud", resFromCloud);
  console.log("new product: ", newProduct);
});

export default product_router;
