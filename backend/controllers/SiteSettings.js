const SiteSettings = require("../models/siteSettings");

const updateSiteSettings = async (req, res) => {
  try {
    const { theme, font } = req.body;

    const updates = {};

    if (theme) updates.theme = theme;
    if (font) updates.font = font;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No data to update",
      });
    }

    const settings = await SiteSettings.findOneAndUpdate({}, updates, {
      new: true,
      runValidators: true,
    });

    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Site settings not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Site settings updated successfully",
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSiteSettings = async (req, res) => {
  try {
    const settings = await SiteSettings.findOne();

    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Site settings not found",
      });
    }

    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getSiteSettings,
  updateSiteSettings,
};
