const express = require("express");

const router = express.Router();

const {
  getSiteSettings,
  updateSiteSettings,
} = require("../controllers/SiteSettings");

const verifyToken = require("../middleware/auth");
const authorize = require("../middleware/role");
// أي حد يقدر يقرأ إعدادات الموقع
router.get("/", getSiteSettings);

// الأدمن فقط يقدر يعدلها
router.patch("/", verifyToken, authorize("admin"), updateSiteSettings);

module.exports = router;
