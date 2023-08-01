const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
const user = require("./routes/userRoutes");

app.use("/api/v1", user);

// middlewares
app.use(errorMiddleware);

module.exports = app;
