const { default: mongoose } = require("mongoose");

const inventorySchema = mongoose.Schema({
  km: Number,
  scratches: Number,
  paint: String,
  accident: Number,
  prebuyers: Number,
  place: String,
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "oem_specs" },
});

const InventoryModel = mongoose.model("inventories", inventorySchema);

module.exports = InventoryModel;
