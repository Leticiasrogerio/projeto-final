const controller = require("../controller/nutriletController")

const express = require("express");

const router = express.Router();

router.post("/new", controller.newNutrilet)

router.get("/all", controller.findAllNutrilet)

router.patch("/update/:id", controller.updateByIdNutrilet)

router.delete("/delete/:id", controller.deleteNutrilet)

module.exports = router