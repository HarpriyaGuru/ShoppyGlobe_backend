// import express from "express";
// import { addToCart, updateCart, removeFromCart } from "../Controllers/cart.controller.js";

// const router = express.Router();

// router.post("/cart", addToCart);
// router.put("/cart/:id", updateCart);
// router.delete("/cart/:id", removeFromCart);

// export default router;

// routes/cart.routes.js
import express from "express";
import { addToCart, updateCart, removeFromCart } from "../Controllers/cart.controller.js";
import protect from "../middleware/middleware.js"; // Import the protect middleware

const router = express.Router();

// Protecting the cart routes
router.post("/cart", protect, addToCart);  // Only authenticated users can add to cart
router.put("/cart/:id", protect, updateCart);  // Only authenticated users can update the cart
router.delete("/cart/:id", protect, removeFromCart);  // Only authenticated users can remove from cart

export default router;
