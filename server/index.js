const path = require("path");
const express = require("express");
const cors = require("cors");

const connection = require("./config/db");
const taskRoute = require("./components/task/task.routes");

const app = express();

connection();
const port = process.env.PORT || 3001;

//middlewares//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public/dist")));

app.get("/", (req, res) => {
  res.send("This is a todo app");
});
app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
