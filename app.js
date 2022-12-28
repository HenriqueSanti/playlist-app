require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const dbConnection = require("./databse/db");
const path = require("path");
const Music = require("./model/Music");

mongoose.set("strictQuery", true);

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.get("/", async (req, res) => {
  const playlist = await Music.find();
  res.render("index", { playlist });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
