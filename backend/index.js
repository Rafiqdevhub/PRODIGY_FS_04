const express = require("express");
const dbConnection = require("./config/dbConnection");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 3000;

// middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
