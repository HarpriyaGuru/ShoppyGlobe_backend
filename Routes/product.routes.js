// routes/product.routes.js
import express from "express";
import { addProduct, getProducts, getProductById } from "../Controllers/product.controller.js";

const router = express.Router();

// Route to add a new product
router.post("/", addProduct);

// Route to fetch all products
router.get("/", getProducts);

// Route to fetch a product by its ID
router.get("/:id", getProductById);

export default router;
