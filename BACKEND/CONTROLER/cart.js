const Cart = require("../MODEL/cart");

const addtocart = async (req, res) => {
  try {
    const {
      productid,
      productquantity,
      productprice,
      productthumbnail,
      productrating,
      productcategory,
    } = req.body;

    if (
      !productid ||
      productquantity == null ||
      productprice == null ||
      !productthumbnail ||
      productrating == null ||
      !productcategory
    ) {
      return res.status(400).json({
        success: false,
        message:
          "productid, productquantity, productprice, and productthumbnail  productrating productcategory  are required",
      });
    }

    let cartitem = await Cart.findOne({ productid });

    if (cartitem) {
      cartitem.productquantity += productquantity;
      await cartitem.save();
      return res.status(200).json({
        success: true,
        message: "Product quantity updated in cart",
        cartitem,
      });
    } else {
      cartitem = new Cart({
        productid,
        productquantity,
        productprice,
        productthumbnail,
        productrating,
        productcategory,
      });
      await cartitem.save();
      return res.status(200).json({
        success: true,
        message: "Product added to cart",
        cartitem,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addtocart };
