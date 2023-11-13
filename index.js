let express = require("express");
let app = express();
let mongoose = require("mongoose");
const multer = require("multer");
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

let upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./imagesFolder");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
});

app.post("/image", upload.single("image"), async (req, res) => {
  if (upload) {
    try {
      if (req.file == null) {
        var tempImage = "notFound.jpg";
      } else {
        var tempImage = req.file.filename;
      }
      await testModel({
        name: tempImage,
        age: 35,
      }).save();
      res.redirect("/");
    } catch (err) {
      res.send(`<h1>${err}</h1>`);
    }
  } else {
    res.send("no");
  }
});

app.listen(9000, () => {
  console.log("ok");
});
