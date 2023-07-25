require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("./database/dbconnect");

const nutriletRoutes = require("./routes/nutriletRoutes");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect();

app.use("/nutrilet", nutriletRoutes)

module.exports = app