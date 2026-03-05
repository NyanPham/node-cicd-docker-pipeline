const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(500).json({ message: "Hello CI/CD!" });
});

module.exports = app;
