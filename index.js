let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const uri =
  "mongodb+srv://ahmadrazakhalid110:oOAi1LGYaD8vQN1y@cluster0.cr0kdsf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

let testSchema = mongoose.Schema({
  name: String,
  age: Number,
});
let testModel = mongoose.model("newTry", testSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/image", async (req, res) => {
  let tempImage = "notFound.jpg";
  await testModel({
    name: tempImage,
    age: 35,
  }).save();
  res.redirect("/");
});

app.listen(9000, () => {
  console.log("ok");
});
