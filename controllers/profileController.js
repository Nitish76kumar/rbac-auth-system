const User = require("../models/User");

const getProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    let user;

    if (req.user.role === "Admin" || req.user.role === "Moderator") {
      user = await User.findById(req.params.userId || userId).select(
        "-password"
      );
    } else {
      user = await User.findById(userId).select("-password");
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateProfile = async (req, res) => {
  const { name, email } = req.body;
  const userId = req.user.userId; // Ensure this is the correct field from the decoded JWT

  try {
    let user;

    // If Admin or Moderator, they can update another user's profile
    if (req.user.role === "Admin" || req.user.role === "Moderator") {
      user = await User.findById(req.params.userId || userId);
    } else {
      // Otherwise, the user can only update their own profile
      user = await User.findById(userId);
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user fields if provided
    if (name) user.name = name;
    if (email) user.email = email;

    // Save the updated profile
    await user.save();
    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProfile, updateProfile };
