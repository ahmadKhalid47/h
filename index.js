let express = require("express");
let app = express();
let ejs = require("ejs");
app.set("view engine", "ejs");
let fs = require("fs")
let filed=fs.readFileSync("text.txt");

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send(filed);
});

app.listen(9000, () => {
  console.log("ok");
});