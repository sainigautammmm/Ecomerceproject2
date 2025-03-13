
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customername: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  mobileno: { type: String, required: true },
  items: [
    {
      productID: { type: String, required: true },
      productname: { type: String, required: true },
      productprice: { type: Number, required: true },
      productquantity: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
