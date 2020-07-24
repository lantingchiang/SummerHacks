const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Exercise = require("./models/exercises.js")

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/exercise-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});;

app.get("/api/exercises", async (req, res) => {
  const exercises = await Exercise.find({}); //a promise
  res.send(exercises);
});

app.post("/api/exercises", async (req, res) => {
  const newExercise = new Exercise(req.body);
  const savedExercise = await newExercise.save();
  res.send(savedExercise);
});

app.delete("/api/exercises/:id", async (req, res) => {
  const deleteExercise = await Exercise.findByIdAndDelete(req.params.id);
  res.send(deleteExercise);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server listening"))