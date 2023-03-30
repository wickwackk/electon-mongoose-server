import express from "express";
import { addCategory } from "../services/category-service";

const cate_router = express.Router();

cate_router.post("/categories", (req, res) => {});

export default cate_router;
