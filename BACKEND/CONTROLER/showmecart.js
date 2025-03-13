const Cart = require("../MODEL/cart");

const showCart = async (req, res) => {
    try {
        
        const cartItems = await Cart.find();

        if (cartItems.length === 0) {
            return res.status(200).json({
                success: true,
                message: "Cart is empty",
                cartItems: [],
            });
        }

        
        return res.status(200).json({
            success: true,
            message: "Cart items retrieved successfully",
            cartItems,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { showCart };
