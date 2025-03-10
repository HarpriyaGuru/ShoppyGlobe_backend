// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from the "Authorization" header

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Verify the token using JWT_SECRET from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;  // Attach user ID to the request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default protect;
