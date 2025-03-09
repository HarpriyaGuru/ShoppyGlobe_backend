// controllers/product.controller.js
import Product from "../Models/product.model.js";

// Add a new product to the database
export const addProduct = async (req, res) => {
    const { name, price, description, stock } = req.body;

    // Validate that all fields are provided
    if (!name || !price || !description || !stock) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create a new product instance with the provided data
        const newProduct = new Product({
            name,
            price,
            description,
            stock,
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Respond with the saved product data
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding product" });
    }
};

// Get all products from the database
export const getProducts = async (req, res) => {
    try {
        // Fetch all products
        const products = await Product.find();

        // If no products are found
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        // Respond with the list of products
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching products" });
    }
};

// Get a single product by its ID from the database
export const getProductById = async (req, res) => {
    const { id } = req.params;  // Get the product ID from request params

    try {
        // Find the product by its ID
        const product = await Product.findById(id);

        // If product is not found
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Respond with the product data
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching product" });
    }
};
