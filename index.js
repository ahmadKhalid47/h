let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("helllo1");
});

app.listen(9000, () => {
  console.log("ok");
});