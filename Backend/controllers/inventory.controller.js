const InventoryModel = require("../models/inventory.schema");

const AddInv = async (req, res) => {
  const data = new InventoryModel(req.body);
  await data.save();
  return res.status(201).send("Inventory added successfully");
};

const GetInv = async (req, res) => {
  const data = await InventoryModel.find().populate("carId");
  return res.status(200).send(data);
};

module.exports = { AddInv, GetInv };
