const express = require("express");
const User = require("../models/user");

app.get("/", (req, res) => {
  res.send({ message: "Test CRUD" });
});
