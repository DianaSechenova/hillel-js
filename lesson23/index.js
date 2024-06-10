const express = require("express");
const TodosModel = require("./mongo/todo.model");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://sechenova93:_HA9bNcgMcY8x7t@cluster0.ytfetyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect = mongoose.connect(uri);
connect.then(() => console.log("Connected!"));
const app = express();
app.listen(5000, () => {
  console.log("Server is running on localhost:5000...");
});
app.use(express.json());
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile("client/index.html", { root: __dirname });
});
app.get("/todos", (req, res) => {
  TodosModel.find().then((response) => res.send(response));
});
app.post("/todos", (req, res) => {
  const todo = new TodosModel(req.body);
  todo.save().then((response) => res.send(response));
});
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodosModel.deleteOne({ _id: id }).then((response) => {
    if (response.deletedCount === 0) {
      res.status(404).send({ message: "Error!" });
    } else {
      res.status(200).send({ message: "Success" });
    }
  });
});
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodosModel.updateOne({ _id: id }, req.body)
    .then(() => TodosModel.findById(id))
    .then((response) =>
      res.status(200).send({ message: "Success", data: response })
    );
});
