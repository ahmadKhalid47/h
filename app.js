let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("helllo");
});

app.listen(9000, () => {
  console.log("ok");
});