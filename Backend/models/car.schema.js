const { default: mongoose } = require("mongoose");

const carSchema = mongoose.Schema({
  company: String,
  model: String,
  year: Number,
  price: Number,
  color: String,
  milage: Number,
  power: String,
  max_speed: Number,
  available: Boolean,
  image: String,
});

const CarModel = mongoose.model("oem_specs", carSchema);

module.exports = { CarModel };
