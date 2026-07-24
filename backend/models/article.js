const mongoose = require("mongoose");
const Joi = require("joi");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 500,
    },

    content: {
      type: String,
      required: true,
      minlength: 20,
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    seoTitle: {
      type: String,
      default: "",
    },

    seoDescription: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Article = mongoose.model("Article", articleSchema);

/*===========================
Create Validation
===========================*/

function validateCreateArticle(obj) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200).required(),

    description: Joi.string().min(10).max(500).required(),

    content: Joi.string().min(20).required(),

    image: Joi.string().allow("").optional(),

    category: Joi.string().required(),

    tags: Joi.array().items(Joi.string()),

    seoTitle: Joi.string().allow("").optional(),

    seoDescription: Joi.string().allow("").optional(),

    featured: Joi.boolean(),

    isPublished: Joi.boolean(),
  });

  return schema.validate(obj);
}

/*===========================
Update Validation
===========================*/

function validateUpdateArticle(obj) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200),

    description: Joi.string().min(10).max(500),

    content: Joi.string().min(20),

    image: Joi.string().allow(""),

    category: Joi.string(),

    tags: Joi.array().items(Joi.string()),

    seoTitle: Joi.string().allow(""),

    seoDescription: Joi.string().allow(""),

    featured: Joi.boolean(),

    isPublished: Joi.boolean(),
  });

  return schema.validate(obj);
}

module.exports = {
  Article,
  validateCreateArticle,
  validateUpdateArticle,
};
