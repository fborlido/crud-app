const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://mongo:27017/crud")
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const Object = mongoose.model("Object", {
  name: String,
});

app.get("/api", (req, res) => {
  res.send("hello");
});

app.get("/api/objects", (req, res) => {
  Object.find()
    .then((data) => {
      res.status(200).json({ msg: "success", data: data });
    })
    .catch((error) => {
      res.status(400).json({ msg: "error", error: error });
    });
});

app.post("/api/objects/new", (req, res) => {
  const { name } = req.body;
  let newObject = new Object({ name: name });
  newObject
    .save()
    .then((data) => {
      res.status(200).json({ msg: "success", data: data });
    })
    .catch((error) => {
      res.status(400).json({ msg: "error", error: error });
    });
});

app.post("/api/objects/update/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  Object.findByIdAndUpdate(id, { name: name })
    .then((data) => {
      res.status(200).json({ msg: "success", data: data });
    })
    .catch((error) => {
      res.status(400).json({ msg: "error", error: error });
    });
});

app.post("/api/objects/delete/:id", (req, res) => {
  const { id } = req.params;
  Object.findByIdAndDelete(id)
    .then((data) => {
      res.status(200).json({ msg: "success", data: data });
    })
    .catch((error) => {
      res.status(400).json({ msg: "error", error: error });
    });
});

const PORT = 4000;
app.listen(PORT, console.log(`App started on port ${PORT}`));
