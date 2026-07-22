const mongoose = require("mongoose");

const siteSettingsSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      enum: ["navy", "teal", "purple", "dark"],
      default: "navy",
    },

    font: {
      type: String,
      enum: ["cairo", "alexandria", "tajawal", "readex"],
      default: "cairo",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("SiteSettings", siteSettingsSchema);
