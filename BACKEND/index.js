
const express = require("express");
const connectDatabase = require("./database");
const { productfetch } = require("./CONTROLER/product"); 
const { getAllProducts } = require("./CONTROLER/productController"); 
require("dotenv").config();
const cors = require("cors");
const { addtocart,  } = require("./CONTROLER/cart");

const { registerUser, otpverification, loginuser, userAuthentication, logout } = require("./CONTROLER/user");
const server = express();
const PORT = process.env.PORT || 8000; 
const cookieParser = require('cookie-parser');
const { showCart } = require("./CONTROLER/showcart");
const { deleteCartItem } = require("./CONTROLER/deletecart");
const { placeorder } = require("./CONTROLER/order");


const {createOrUpdateUserProfile}= require("./CONTROLER/profile");




connectDatabase();
server.use(cookieParser());

server.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));

server.use(express.json()); 


server.post("/product", productfetch); 
server.get("/api/products/all-products", getAllProducts); 
server.post('/api/cart/addtocart', addtocart);
server.get('/showcart',showCart);
server.post("/register_user",registerUser);
server.post("/verify-otp",otpverification);
server.post("/login",loginuser);
server.get("/user-auth",userAuthentication);
server.get("/logout",logout);
server.delete("/deletecart/:productid",deleteCartItem);
server.post("/placeorder",placeorder);




server.post("/user/profile",createOrUpdateUserProfile);




server.listen(PORT, () => {
  console.log(`Backend Server is running at http://localhost:${PORT}/`);
});
