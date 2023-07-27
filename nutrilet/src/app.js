require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("./database/dbconnect");

const nutriletRoutes = require("./routes/nutriletRoutes");

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

const app = express(); 

app.use(express.json());

app.use(cors());

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose.connect();

app.use("/nutrilet" , nutriletRoutes)

module.exports = app