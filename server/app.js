const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use(cors({ origin: 'http://localhost:3002',withCredentials:true }));
const allowedOrigins = [
    'http://localhost:3000'
  ];
  
  app.use(
    cors({
      origin: function (origin, callback) {
        // Check if the origin is in the allowedOrigins array
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    })
  );
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
const user = require("./routes/userRoutes");

app.use("/api/v1", user);

// middlewares
app.use(errorMiddleware);

module.exports = app;
