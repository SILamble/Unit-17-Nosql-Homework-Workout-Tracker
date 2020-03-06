const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const db = require("./models/Workout");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//Routes to view & API's
app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });