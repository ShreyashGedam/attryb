const { CarModel } = require("../models/car.schema");

const GetAllCars = async (req, res) => {
  const cars = await CarModel.find({});
  return res.status(200).send(cars);
};

const AddCars = async (req, res) => {
  const car = new CarModel(req.body);
  await car.save();
  return res.send("car added successfully");
};

module.exports = { GetAllCars, AddCars };
