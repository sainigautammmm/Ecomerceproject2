// server.js
const express = require("express");
const connectDatabase = require("./database");
const { productfetch } = require("./CONTROLER/product"); // Assuming this function adds a product
const { getAllProducts } = require("./CONTROLER/productController"); // Ensure this path is correct
require("dotenv").config();
const cors = require("cors");
const { addtocart,  } = require("./CONTROLER/cart");

const { registerUser, otpverification, loginuser, userAuthentication, logout } = require("./CONTROLER/user");
const server = express();
const PORT = process.env.PORT || 8000; // Default to 8000 if PORT isn't set
const cookieParser = require('cookie-parser');
const { showCart } = require("./CONTROLER/showcart");
const { deleteCartItem } = require("./CONTROLER/deletecart");
const { placeorder } = require("./CONTROLER/order");
// const { profileuser } = require("./CONTROLER/profile");
// const { getUserProfile, updateUserProfile } = require("./CONTROLER/profile");

const {createOrUpdateUserProfile}= require("./CONTROLER/profile");



// Connect to the database
connectDatabase();
server.use(cookieParser());
// Middleware
server.use(cors({
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true, // Enable credentials for CORS
}));

server.use(express.json()); // Parse JSON bodies

// Routes
server.post("/product", productfetch); // Route to create a product
server.get("/api/products/all-products", getAllProducts); // Route to get all products
server.post('/api/cart/addtocart', addtocart);
server.get('/showcart',showCart);
server.post("/register_user",registerUser);
server.post("/verify-otp",otpverification);
server.post("/login",loginuser);
server.get("/user-auth",userAuthentication);
server.get("/logout",logout);
server.delete("/deletecart/:productid",deleteCartItem);
server.post("/placeorder",placeorder);



// server.get("/userprofile/:id",getUserProfile);
// server.put("/userprofile/:id",updateUserProfile);
server.post("/user/profile",createOrUpdateUserProfile);



// Start the server
server.listen(PORT, () => {
  console.log(`Backend Server is running at http://localhost:${PORT}/`);
});
