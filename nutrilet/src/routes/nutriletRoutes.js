const controller = require("../controller/nutriletController")

const express = require("express");

const router = express.Router();

router.post("/new", controller.newNutrilet)

router.get("/all", controller.findAllNutrilet)

router.patch("/update", controller.updateByIdNutrilet)

router.delete("/delete", controller.deleteNutrilet)
