const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
