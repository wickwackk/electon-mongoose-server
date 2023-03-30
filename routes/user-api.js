import express from "express";
import multer from "multer";
import upload from "../util/multer-handler.js";
import { v2 as cloudinary } from "cloudinary";
import uploadCloud from "../config/cloudinary-config.js";
import { getUsers } from "../services/user-service.js";

const user_router = express.Router();

// const upload = multer({ dest: "/tmp" });

user_router.get("/user", async (req, res) => {
  console.log("request to get users");
  const users = await getUsers(10);
  res.status(200).json(users);
});

user_router.post("/user", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
    public_id: req.file.originalname,
    folder: "product",
    use_file: true,
  });

  const newUser = { image: secure_url, ...JSON.parse(req.body.details) };

  // console.log("resfromCloud", resFromCloud);
  console.log("new user: ", newUser);
});

export default user_router;
