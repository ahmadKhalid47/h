let express = require("express");
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(9000, () => {
  console.log("ok");
});