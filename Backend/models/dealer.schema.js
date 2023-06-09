const { default: mongoose } = require("mongoose");

const dealerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "oem_specs" }],
});

const DealerModel = mongoose.model("dealers", dealerSchema);

module.exports = { DealerModel };
