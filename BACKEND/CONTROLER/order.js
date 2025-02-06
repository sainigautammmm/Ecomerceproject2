
const Order = require("../MODEL/order");

const placeorder = async (req, res) => {
  try {
    const { customername, address, city, state, pincode, mobileno, items, totalAmount } = req.body;

    if (!customername || !address || !city || !state || !pincode || !mobileno || !items || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Order({
      customername,
      address,
      city,
      state,
      pincode,
      mobileno,
      items,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", orderID: newOrder._id });

  } catch (error) {
    res.status(500).json({ message: "Failed to place order", error: error.message });
  }
};

module.exports = { placeorder };
