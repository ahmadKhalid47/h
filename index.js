const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000;
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://ahmadrazakhalid110:oOAi1LGYaD8vQN1y@cluster0.cr0kdsf.mongodb.net/";

app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const testSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    const TestModel = mongoose.model("newTry", testSchema);

    await new TestModel({
      name: "ahmadTry",
      age: 35,
    }).save();

    res.render("home");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  } finally {
    mongoose.connection.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
