const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Test CRUD" });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});
