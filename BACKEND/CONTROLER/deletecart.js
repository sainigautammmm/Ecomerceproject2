const { default: mongoose } = require("mongoose");
const cart =  require("../MODEL/cart")
const deleteCartItem = async (req, res) => {
    try {
        const { productid } = req.params; 

        if (!productid) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required",
            });
        }


        const deletedItem = await cart.findOneAndDelete({ productid });

        if (!deletedItem) {
            return res.status(404).json({
                success: false,
                message: "Cart item not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Cart item deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            
        });
    }
};

module.exports = {  deleteCartItem };
