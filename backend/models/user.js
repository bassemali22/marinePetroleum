const mongoose = require("mongoose");
const Joi = require("joi");
const Jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

// UserSchema.virtual("posts", {
//   ref: "Post",
//   foreignField: "user",
//   localField: "_id",
// });

// UserSchema.methods.generateAuthToken = function () {
//   return Jwt.sign(
//     { id: this._id, isAdmin: this.isAdmin },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "30d",
//     },
//   );
// };

function validateRegisterUser(obj) {
  const Schema = Joi.object({
    username: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });
  return Schema.validate(obj);
}

function validateLoginUser(obj) {
  const Schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });
  return Schema.validate(obj);
}
function validateUpdateUser(obj) {
  const Schema = Joi.object({
    username: Joi.string().trim().min(2).max(100),
    password: Joi.string().trim().min(8),
    bio: Joi.string(),
  });
  return Schema.validate(obj);
}

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  validateLoginUser,
  validateRegisterUser,
  validateUpdateUser,
};
