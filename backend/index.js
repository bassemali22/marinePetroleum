require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectionDB = require("./config/Db");

const authRoutes = require("./routes/user");
const settingRoutes = require("./routes/siteSetting");

const limiter = require("./middleware/ratelimt");
const errorHandler = require("./middleware/error");

// const mongoSanitize = require("express-mongo-sanitize");

const app = express();

/* ===========================
   CORS
=========================== */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

/* ===========================
   Body Parser
=========================== */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ===========================
   Security
=========================== */

app.use(helmet());

// مؤقتًا معلق لأنه لا يدعم Express 5 جيدًا
// app.use(mongoSanitize());

/* ===========================
   Logger
=========================== */

app.use(morgan("dev"));

/* ===========================
   Rate Limit
=========================== */

app.use(limiter);

/* ===========================
   Database
=========================== */

connectionDB();

/* ===========================
   Routes
=========================== */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is Running 🚀",
  });
});

app.use("/api/auth", authRoutes);

// عدلت الاسم ليطابق الـ Frontend
app.use("/api/site-settings", settingRoutes);

/* ===========================
   Error Handler
=========================== */

app.use(errorHandler);

/* ===========================
   Start Server
=========================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
