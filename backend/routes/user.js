const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  register,
} = require("../controllers/auth");

const verifyToken = require("../middleware/auth");
const authorize = require("../middleware/role");

const router = express.Router();

// ======================
// Public Routes
// ======================

router.post(
  "/register",

  register,
);

router.post(
  "/login",

  login,
);

// ======================
// Protected Routes
// ======================

// Admin فقط
router.get("/", verifyToken, authorize("admin"), getUsers);

// Admin أو User
router.get("/:id", verifyToken, authorize("admin", "user"), getUser);

// Admin فقط
router.post(
  "/",
  verifyToken,
  authorize("admin"),

  createUser,
);

// Admin أو User
router.put(
  "/:id",
  verifyToken,
  authorize("admin", "user"),

  updateUser,
);

// Admin فقط
router.delete("/:id", verifyToken, authorize("admin"), deleteUser);

module.exports = router;
