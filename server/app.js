PORT = 8080;

const express = require("express");
const app = express();

var friends = ["Akif", "Sagor", "Adrita","Eram",];
app.get("/", (req, res) => {
  res.send("React and Express Project");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.listen(PORT, () => {
  console.log("Listening @" + PORT);
});
