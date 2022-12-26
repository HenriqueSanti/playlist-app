require("dotenv").config();
const express = require("express");
const dbConnection = require('./databse/db')

const app = express();
const port = process.env.PORT || 3000;

dbConnection()

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
