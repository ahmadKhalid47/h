let express = require("express");
let app = express();
let mongoose = require("mongoose");
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let testSchema = mongoose.Schema({
  name: String,
  age: Number,
});
let testModel = mongoose.model("newTry", testSchema);
app.get("/", async (req, res) => {
  await testModel({
    name: "ahmadTry",
    age: 35,
  }).save();
  res.render("home");
});

app.listen(9000, () => {
  console.log("ok");
});
