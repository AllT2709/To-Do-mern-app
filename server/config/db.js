require("dotenv").config();
const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connection to mongo");
    })
    .catch((err) => {
      console.log("error to connect database");
      throw new Error(err.message);
    });
};

module.exports = connection;
