
const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileno: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  profilePicture:{type:String,required:true},
  createdAt: { type: Date, default: Date.now },
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);
module.exports = UserProfile;
