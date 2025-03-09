import Cart from "../Models/cart.model.js";
import Product from "../Models/product.model.js";

// Add product to cart
// Add product to cart
export const addToCart = async (req, res) => {
    const { userId, product, quantity } = req.body; // Updated destructuring

    try {

        const foundProduct = await Product.findById(product);  // Updated here to 'product'


        if (!foundProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        const cartItem = new Cart({
            userId,
            product: product,
            quantity,
        });

        await cartItem.save();
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart" });
    }
};

// Update cart item
export const updateCart = async (req, res) => {
    const { quantity } = req.body;

    try {
        const cartItem = await Cart.findById(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        cartItem.quantity = quantity;
        await cartItem.save();
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ message: "Error updating cart" });
    }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        res.json({ message: "Product removed from cart" });
    } catch (error) {
        res.status(500).json({ message: "Error removing from cart" });
    }
};
