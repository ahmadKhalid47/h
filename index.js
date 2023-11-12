const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 9000; // Use the PORT environment variable if available, or default to 9000

// Use environment variables for sensitive information
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://ahmadrazakhalid110:oOAi1LGYaD8vQN1y@cluster0.cr0kdsf.mongodb.net/";

app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    // Connect to MongoDB using connection pooling
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Define the schema outside of the route handler
    const testSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    // Create the model outside of the route handler
    const TestModel = mongoose.model("newTry", testSchema);

    // Use the model to save data
    await new TestModel({
      name: "ahmadTry",
      age: 35,
    }).save();

    res.render("home");
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the MongoDB connection after the operation
    mongoose.connection.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
