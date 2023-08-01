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
