const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/register", userRoutes);
app.use("/:id", userRoutes);

mongoose
  .connect("mongodb://localhost/nodejs-mongodb-crud")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});
