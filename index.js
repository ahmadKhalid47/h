let express = require("express");
let app = express();
let ejs = require("ejs");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(9000, () => {
  console.log("ok");
});