const express = require("express");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");
const { protect } = require("../middleware/authMiddleware");
const { roleRequired } = require("../middleware/roleMiddleware");
const router = express.Router();

router.get("/", protect, getProfile); // Normal users can access their profile
router.put("/", protect, updateProfile); // Normal users can update their profile

// Admin and Moderator can view and update any user's profile
router.get(
  "/:userId",
  protect,
  roleRequired(["Admin", "Moderator"]),
  getProfile
);
router.put(
  "/:userId",
  protect,
  roleRequired(["Admin", "Moderator"]),
  updateProfile
);

module.exports = router;
