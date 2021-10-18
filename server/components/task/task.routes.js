const express = require("express");

const Task = require("../../models/task");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const task = await new Task(req.body);
    task.save();
    res.json(task);
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tasks = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.json(tasks);
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tasks = await Task.findOneAndDelete({ _id: req.params.id });
    res.json(tasks);
  } catch (err) {
    res.json({ err: err.message });
  }
});

module.exports = router;
