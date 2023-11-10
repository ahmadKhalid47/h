let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("filed");
});

app.listen(9000, () => {
  console.log("ok");
});