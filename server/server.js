<<<<<<< HEAD
// server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;

// Storage configuration for uploaded files
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Handle file uploads
app.post('/upload', upload.array('files'), (req, res) => {
  res.status(200).json({ message: 'Files uploaded successfully', files: req.files });
});

// Handle file deletions
app.delete('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  // Code to delete the file from the 'uploads' folder
  // fs.unlinkSync(path.join(__dirname, 'uploads', filename));
  res.status(200).json({ message: 'File deleted successfully', filename });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
=======
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// config
dotenv.config();

// database
connectDatabase();

const PORT = process.env.PORT || 7004;

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
>>>>>>> 8dd11b44cbb22fdda453a1b1fa3826dcfc7d78f8
