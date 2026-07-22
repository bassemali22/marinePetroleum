const express = require("express");

const router = express.Router();

const {
  getSiteSettings,
  updateSiteSettings,
} = require("../controllers/SiteSettings");

const verifyToken = require("../middleware/auth");
const authorize = require("../middleware/role");
router.get("/", getSiteSettings);

router.patch("/", verifyToken, authorize("admin"), updateSiteSettings);

module.exports = router;
