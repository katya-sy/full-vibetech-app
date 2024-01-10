require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");

const PORT = process.env.PORT || 3000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(PORT));
  } catch (error) {
    console.log(error);
  }
};

start();
