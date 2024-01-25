const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
  ProductID:String, 
  email:String,
  category: String,
  title: String,
  subTitle: String,
  image: String,
});

module.exports = mongoose.model(
  "quickFitCart",
  cartSchema,
  "quickFitCart"
);