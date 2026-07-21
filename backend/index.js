require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const errorHandler = require("./middleware/error");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const limiter = require("./middleware/ratelimt");
const connectionDB = require("./config/Db");
const authRoutes = require("./routes/user");
const xss = require("xss-clean");

app.use(express.json());
app.use(cookieParser());
const mongoSanitize = require("express-mongo-sanitize");

app.use(xss());
app.use(mongoSanitize());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, , "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);
app.use(helmet());
app.use(morgan("dev"));
app.use(limiter);
connectionDB();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/auth", authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
