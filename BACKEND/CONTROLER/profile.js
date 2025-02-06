












const UserProfile = require("../MODEL/profile");

const createOrUpdateUserProfile = async (req, res) => {
  try {
    const { username, email, mobileno, address,profilePicture } = req.body;

    if (!username || !email || !mobileno || !address || !profilePicture) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userProfile = await UserProfile.findOneAndUpdate(
      { email },
      { username, mobileno, address,profilePicture },
      { new: true, upsert: true }
    );

    res.status(201).json({ message: "Profile saved successfully", profile: userProfile });
  } catch (error) {
    res.status(400).json({ message: "Failed to save profile", error: error.message });
  }
};

module.exports = { createOrUpdateUserProfile };
