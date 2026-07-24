const router = require("express").Router();

const {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  increaseViews,
  togglePublish,
  toggleFeatured,
} = require("../controllers/article");

const verifyToken = require("../middleware/auth");
const authorize = require("../middleware/role");

/* =========================================
            Public Routes
========================================= */

// Get All Articles
router.get("/", getArticles);

// Get Single Article
router.get("/:id", getArticle);

// Increase Views
router.patch("/:id/views", increaseViews);

/* =========================================
            Admin Routes
========================================= */

// Create Article
router.post("/", verifyToken, authorize("admin"), createArticle);

// Update Article
router.put("/:id", verifyToken, authorize("admin"), updateArticle);

// Delete Article
router.delete("/:id", verifyToken, authorize("admin"), deleteArticle);

// Publish / UnPublish
router.patch("/:id/publish", verifyToken, authorize("admin"), togglePublish);

// Featured / UnFeatured
router.patch("/:id/featured", verifyToken, authorize("admin"), toggleFeatured);

module.exports = router;
