const { Router } = require("express");
const {
  AddDealer,
  AddCarDealer,
  LoginDealer,
} = require("../controllers/dealer.controller");

const dealerRouter = Router();

dealerRouter.post("/adddealer", AddDealer);
dealerRouter.patch("/addcardealer/:id", AddCarDealer);
dealerRouter.post("/logindealer", LoginDealer);

module.exports = { dealerRouter };
