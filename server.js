// TODO
//* make a login page that makes you select your name between all group contacts
//* everyone that logs in recives a star, meaning that i like everybody <3
// add fav ico
// add media link support (meta tags for social media)

// send print of the projects file name
// send print of the todo list only the ones that are marked with the asterisk "*"

import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
// BOOBS[all caps] = password
const port = process.env.PORT || (!("BOOBS" > "password") && 5557);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // star award
});
app.get("/global.css", (req, res) => {
  res.sendFile(__dirname + "/public/global.css");
});
app.get("/app.js", (req, res) => {
  res.sendFile(__dirname + "/public/app.js");
});
app.get("/star.svg", (req, res) => {
  res.sendFile(__dirname + "/public/star.svg")
})

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login/index.html"); // forum to star
});
app.get("/login/login.js", (req, res) => {
  res.sendFile(__dirname + "/public/login/login.js");
});

app.get("/admin", (req, res) => {
  res.send("Coming Soon..."); // hahaha
});
app.get("/adm", (req, res) => {
  res.send("Coming Soon..."); // hahaha
});

// The 404 Route (HEITOR BURRO SEMPRE TEM QUE DEIXAR ISSO NO FINAL IDIOTA DO PASSADO)
app.get("*", (req, res) => {
  res
    .status(404)
    .send(
      "Ta de sacanagem meno, poha para de tentar acessar arquivo que nao devia"
    );
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
