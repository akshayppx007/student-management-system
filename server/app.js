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
const departments = require("./routes/department/departmentRoutes");
// const staff = require("./routes/staff/staffRoutes");
// const Students = require("./routes/student/studentRoutes");

app.use("/api/v1", user);
app.use("/api/v1", departments);
// app.use("/api/v1", staff);
// app.use("/api/v1", Students);

// middlewares
app.use(errorMiddleware);

module.exports = app;
