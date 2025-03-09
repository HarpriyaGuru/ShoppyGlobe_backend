import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./Routes/product.routes.js";
import cartRoutes from "./Routes/cart.routes.js";
import authRoutes from "./Routes/auth.routes.js";

dotenv.config();
const app = express();
app.use(express.json());


// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/shoppyglobe")
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
