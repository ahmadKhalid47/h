let express = require("express");
let app = express();
let mongoose = require("mongoose");
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

const uri ="mongodb+srv://ahmadrazakhalid110:oOAi1LGYaD8vQN1y@cluster0.cr0kdsf.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri);

let testSchema = mongoose.Schema({
  name: String,
  age: Number,
});
let testModel = mongoose.model("newTry", testSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/click", async (req, res) => {
  await testModel({
    name: "ahmadTry",
    age: 35,
  }).save();
  res.redirect("/");
});

app.listen(9000, () => {
  console.log("ok");
});
