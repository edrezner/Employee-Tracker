const mysql = require("mysql2");
const express = require("express");

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
    this.connect();
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error("Error connecting to database:", err);
      } else {
        console.log("Connected to the database.");
      }
    });
  }

  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, results) => {
        if (err) {
          console.error("Error executing query:", err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Database;
