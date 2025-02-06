const mongoose = require("mongoose");



const cartSchema = new mongoose.Schema({
    productid: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "product", 
        required: true 
    },
    productquantity: { 
        type: Number, 
        default: 1, 
        required: true 
    },
    productprice: { 
        type: Number, 
        required: true 
    },
    productthumbnail: { 
        type: String, 
        required: true 
    },  
    productrating: {
        type: Number,
        required:true,
    },
    productcategory: {
        type:String,
        required: true
    },
 

}, {
    timestamps: true // Adds createdAt and updatedAt fields
});
 const Cart =    mongoose.model("Cart", cartSchema);
module.exports = Cart;