const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile accessed",
    user: req.user,
  });
});

module.exports = router;
