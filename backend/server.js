const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const uri =
  "mongodb+srv://Alvaro95:node1234@cluster0.e5wha7p.mongodb.net/?retryWrites=true&w=majority";

app.use("/", require("./routes"));

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
