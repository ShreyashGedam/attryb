const { Router } = require("express");
const { GetAllCars, AddCars } = require("../controllers/car.controller");

const carRouter = Router();

carRouter.get("/getallcars", GetAllCars);
carRouter.post("/addcars", AddCars);

module.exports = carRouter;
