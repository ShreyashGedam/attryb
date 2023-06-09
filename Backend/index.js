const express = require("express");
const connection = require("./config/config");
const carRouter = require("./routes/car.route");
const { dealerRouter } = require("./routes/dealer.route");
const invRouter = require("./routes/inventory.route");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/cars", carRouter);
app.use("/dealers", dealerRouter);
app.use("/inventory", invRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("conncetion to DB Success");
  } catch (error) {
    console.log("conncetion to DB failed");
  }
  console.log("App is listening to port 8080");
});
