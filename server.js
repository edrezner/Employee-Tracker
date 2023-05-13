const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const cli = require("./utils/cli");
const Database = require("./models/Database");

const PORT = process.env.PORT || 3001;
const app = express();

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
};

const database = new Database(dbConfig);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

cli.start(database);
