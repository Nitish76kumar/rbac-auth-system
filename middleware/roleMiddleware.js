const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to check if user has a specific role
const roleRequired = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied, insufficient role" });
    }
    next();
  };
};

module.exports = { roleRequired };
