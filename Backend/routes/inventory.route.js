const { Router } = require("express");
const { AddInv, GetInv } = require("../controllers/inventory.controller");

const invRouter = Router();

invRouter.post("/addinv", AddInv);
invRouter.get("/getinv", GetInv);

module.exports = invRouter;
