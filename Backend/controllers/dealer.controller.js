const { CarModel } = require("../models/car.schema");
const { DealerModel } = require("../models/dealer.schema");

const AddDealer = async (req, res) => {
  const dealer = await DealerModel.findOne({ email: req.body.email });

  if (dealer)
    return res.status(409).send({
      status: false,
      message: "email already exists",
    });

  try {
    const dealer = new DealerModel(req.body);
    await dealer.save();
    return res.status(201).send({
      status: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error,
    });
  }
};

const AddCarDealer = async (req, res) => {
  await DealerModel.updateOne(
    { _id: req.params.id },
    { $push: { cars: req.body.carId } },
    { new: true }
  );

  await CarModel.findByIdAndUpdate(
    { _id: req.body.carId },
    { available: false },
    { new: true }
  );

  try {
    return res.status(201).send({
      status: true,
      message: "car added successfully",
    });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error,
    });
  }
};

const LoginDealer = async (req, res) => {
  try {
    let email = await DealerModel.findOne({ email: req.body.email });
    if (!email)
      return res.status(400).send({
        status: false,
        message: "wrong email or password",
      });

    if (req.body.password !== email.password)
      return res.status(400).send({
        status: false,
        message: "wrong email or password",
      });

    return res.status(200).send({
      status: true,
      message: "Login Success",
      cars: email.cars,
    });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: "Login failed",
    });
  }
};

module.exports = { AddDealer, AddCarDealer, LoginDealer };
